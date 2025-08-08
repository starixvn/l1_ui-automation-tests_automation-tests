import * as msgpack from "msgpack-lite";
import WebSocket from "ws";
import { Page } from "@playwright/test";
import { Credentials, GameConfig } from "./types";

// Constants
const DEFAULT_TIMEOUT = {
  CREDENTIALS: 30000,
  HANDSHAKE: 20000,
  CONNECTION: 45000,
  AUTH: 30000,
  BETTING: 5000,
  SOCKET_CLOSE: 2000,
} as const;

const MAX_RETRIES = 30;
const RETRY_DELAY = 1000;
const CREDENTIALS_CHECK_INTERVAL = 100;

// Types for internal use
type GameType = "round" | "slot" | "crash" | "baccarat" | "card" | "tap";
type MessageData = string | Buffer;

// Generic function to wait for credentials
export const waitForCredentials = (
  getCredentials: () => Credentials | null,
  timeout: number = DEFAULT_TIMEOUT.CREDENTIALS
): Promise<Credentials> => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();

    const checkCredentials = (): void => {
      const credentials = getCredentials();
      if (
        credentials?.sessionId &&
        credentials?.username &&
        credentials?.connectionUrl
      ) {
        resolve(credentials);
      } else if (Date.now() - startTime > timeout) {
        reject(new Error(`Timeout waiting for credentials after ${timeout}ms`));
      } else {
        setTimeout(checkCredentials, CREDENTIALS_CHECK_INTERVAL);
      }
    };

    checkCredentials();
  });
};

// Setup WebSocket listener for credential capture
export const setupCredentialCapture = (
  page: Page,
  onCredentialsCaptured: (
    sessionId: string,
    username: string,
    connectionUrl: string
  ) => void
) => {
  page.on("websocket", (ws) => {
    const frameHandler = (frame: any, direction: "sent" | "received") => {
      try {
        const payload = frame.payload;
        let decodedData;
        // console.log("payload", payload);
        if (typeof payload === "string") {
          if (payload.startsWith("0")) {
            decodedData = JSON.parse(payload.slice(1));
          } else return;
        } else {
          decodedData = msgpack.decode(Buffer.from(payload));
        }

        if (
          direction === "sent" &&
          decodedData.type === 2 &&
          decodedData.data?.[0] === "signin" &&
          decodedData.data?.[1]?.ss &&
          decodedData.data?.[1]?.username
        ) {
          onCredentialsCaptured(
            decodedData.data[1].ss,
            decodedData.data[1].username,
            ws.url()
          );
        }
      } catch (error) {
        // Error logging removed
      }
    };

    ws.on("framesent", (frame: any) => frameHandler(frame, "sent"));
    ws.on("framereceived", (frame: any) => frameHandler(frame, "received"));
  });
};

// Simplified predicate functions
const isHandshake = (data: any): boolean =>
  typeof data === "string" && data.startsWith("0");

const isConnectionAck = (data: any): boolean =>
  data.type === 0 && data.data?.sid;

const isAuthResponse = (data: any): boolean =>
  data.type === 2 && data.data?.[0] === "signedIn";

const isPfEvent = (data: any): boolean => {
  const result =
    data.type === 2 && data.data?.[1]?.pf && data.data[1].pf.roundId;
  if (data.type === 2 && data.data?.[0]) {
    // console.log(
    //   `Message received: ${data.data[0]}, data:`,
    //   JSON.stringify(data.data[1])
    // );
  }
  return result;
};

const isCardDealResponse = (data: any, gameName: string): boolean =>
  data.type === 2 && data.data?.[1]?.deal?.roundId;

const isBetResponse = (data: any, gameType: GameType): boolean => {
  if (data.type !== 2 || !data.data?.[1]) return false;
  const response = data.data[1];

  if (gameType === "slot") {
    return !!response.endBet;
  } else if (gameType === "crash") {
    return !!(response.endBet || response.bet);
  } else if (gameType === "tap") {
    return !!response.endBet;
  } else if (gameType === "card") {
    return !!response.endBet;
  } else {
    return !!(response.endBet && response.ownBets);
  }
};

// Message decoder
const decodeMessage = (data: MessageData): any =>
  typeof data === "string" ? data : msgpack.decode(data);

// Simplified waitForResponse function
const waitForResponse = (
  socket: WebSocket,
  predicate: (data: any) => boolean,
  timeout: number = DEFAULT_TIMEOUT.BETTING
): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (socket.readyState !== WebSocket.OPEN) {
      reject(new Error("WebSocket not open"));
      return;
    }

    let isSettled = false;
    const timeoutId = setTimeout(() => {
      if (!isSettled) {
        isSettled = true;
        cleanup();
        reject(new Error(`Timeout after ${timeout}ms`));
      }
    }, timeout);

    const cleanup = () => {
      clearTimeout(timeoutId);
      socket.removeEventListener("message", messageHandler);
      socket.removeEventListener("error", errorHandler);
      socket.removeEventListener("close", closeHandler);
    };

    const messageHandler = (event: MessageEvent) => {
      if (isSettled) return;
      try {
        const data = decodeMessage(event.data);
        if (predicate(data)) {
          isSettled = true;
          cleanup();
          resolve(data);
        }
      } catch (error) {
        isSettled = true;
        cleanup();
        reject(new Error(`Message decode error: ${error}`));
      }
    };

    const errorHandler = () => {
      if (!isSettled) {
        isSettled = true;
        cleanup();
        reject(new Error("WebSocket error"));
      }
    };

    const closeHandler = () => {
      if (!isSettled) {
        isSettled = true;
        cleanup();
        reject(new Error("WebSocket closed"));
      }
    };

    socket.addEventListener("message", messageHandler);
    socket.addEventListener("error", errorHandler);
    socket.addEventListener("close", closeHandler);
  });
};

// Send MessagePack encoded message
export const sendMessage = (socket: WebSocket, message: any): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      socket.send(msgpack.encode(message));
      resolve();
    } catch (error) {
      reject(new Error(`Failed to send message: ${error}`));
    }
  });
};

// Simplified socket close helper
const safeCloseSocket = (socket: WebSocket): Promise<void> => {
  return new Promise((resolve) => {
    if (!socket || socket.readyState === WebSocket.CLOSED) {
      resolve();
      return;
    }

    const cleanup = () => resolve();
    socket.addEventListener("close", cleanup, { once: true });
    setTimeout(cleanup, DEFAULT_TIMEOUT.SOCKET_CLOSE);

    if (socket.readyState === WebSocket.OPEN) {
      socket.close();
    } else {
      cleanup();
    }
  });
};

// Create WebSocket connection
export const createWebSocketConnection = (
  url: string,
  userAgent: string,
  origin: string
): WebSocket => {
  const socket = new (WebSocket as any)(url, {
    headers: {
      "User-Agent": userAgent,
      Origin: origin,
      "Sec-WebSocket-Extensions": "permessage-deflate; client_max_window_bits",
      "Sec-WebSocket-Version": "13",
    },
  });
  socket.setMaxListeners(20);
  return socket;
};

// Simplified connection wait
export const waitForConnection = (socket: WebSocket): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (socket.readyState === WebSocket.OPEN) {
      resolve();
      return;
    }

    const openHandler = () => {
      socket.removeEventListener("error", errorHandler);
      resolve();
    };

    const errorHandler = (error: Event) => {
      socket.removeEventListener("open", openHandler);
      reject(error);
    };

    socket.addEventListener("open", openHandler, { once: true });
    socket.addEventListener("error", errorHandler, { once: true });
  });
};

// Message creation helpers
const createMessage = (
  type: number,
  data: any,
  namespace: string,
  compress = false
) => ({
  type,
  data,
  nsp: namespace,
  ...(compress && { options: { compress: true } }),
});

const createAuthData = (credentials: Credentials) => [
  "signin",
  {
    isAuthenticated: true,
    ss: credentials.sessionId,
    username: credentials.username,
    language: "vi-VN",
    system: 1,
    time: new Date().toISOString(),
  },
];

// Generic game flow handler
async function executeGameFlow(
  socket: WebSocket,
  gameName: string,
  gameConfig: GameConfig,
  credentials: Credentials,
  gameType: GameType
): Promise<void> {
  try {
    // Step 1: Handle handshake
    await waitForResponse(socket, isHandshake, DEFAULT_TIMEOUT.HANDSHAKE);

    // Step 2: Send initial message
    await sendMessage(
      socket,
      createMessage(
        0,
        { buffer: { type: "Buffer", data: [0] }, type: 0 },
        gameConfig.namespace
      )
    );

    // Step 3: Wait for connection acknowledgment
    await waitForResponse(socket, isConnectionAck, DEFAULT_TIMEOUT.CONNECTION);

    // Step 4: Authenticate
    await sendMessage(
      socket,
      createMessage(2, createAuthData(credentials), gameConfig.namespace, true)
    );

    // Step 5: Wait for authentication response
    const authResponse = await waitForResponse(
      socket,
      isAuthResponse,
      DEFAULT_TIMEOUT.AUTH
    );

    if (authResponse.data?.[1]?.unauthorized) {
      throw new Error(`${gameName} authentication failed - unauthorized`);
    }

    // Step 6: Send in-game message
    await sendMessage(
      socket,
      createMessage(2, ["inGame"], gameConfig.namespace, true)
    );

    let roundId: number | undefined;

    // Step 7: For crash games, wait for pf event to get roundId
    if (gameType === "crash") {
      const pfEvent = await waitForResponse(
        socket,
        isPfEvent,
        45000 // 45 seconds timeout for crash games pf event
      );
      roundId = pfEvent.data?.[1]?.pf?.roundId;
      if (!roundId) {
        throw new Error(`${gameName} failed to get roundId from pf event`);
      }
    }

    // Step 8: Betting with retry
    const betSuccess = await attemptBetting(
      socket,
      gameName,
      gameConfig,
      gameType,
      roundId
    );

    if (!betSuccess) {
      throw new Error(`${gameName} betting failed after maximum attempts`);
    }
  } catch (error) {
    throw error;
  }
}

// Unified game play function
async function playGame(
  gameName: string,
  gameConfig: GameConfig,
  credentials: Credentials,
  userAgent: string,
  gameType: GameType
): Promise<void> {
  const socket = createWebSocketConnection(
    gameConfig.url,
    userAgent,
    gameConfig.origin
  );

  try {
    await waitForConnection(socket);
    await executeGameFlow(socket, gameName, gameConfig, credentials, gameType);
  } finally {
    await safeCloseSocket(socket);
  }
}

// Public API functions
export const playGameRound = (
  gameName: string,
  gameConfig: GameConfig,
  credentials: Credentials,
  userAgent: string
): Promise<void> =>
  playGame(gameName, gameConfig, credentials, userAgent, "round");

export const playGameSlot = (
  gameName: string,
  gameConfig: GameConfig,
  credentials: Credentials,
  userAgent: string
): Promise<void> =>
  playGame(gameName, gameConfig, credentials, userAgent, "slot");

export const playGameCrash = (
  gameName: string,
  gameConfig: GameConfig,
  credentials: Credentials,
  userAgent: string
): Promise<void> =>
  playGame(gameName, gameConfig, credentials, userAgent, "crash");

export const playGameTap = (
  gameName: string,
  gameConfig: GameConfig,
  credentials: Credentials,
  userAgent: string
): Promise<void> =>
  playGame(gameName, gameConfig, credentials, userAgent, "tap");

export const playGameCard = (
  gameName: string,
  gameConfig: GameConfig,
  credentials: Credentials,
  userAgent: string
): Promise<void> =>
  playGame(gameName, gameConfig, credentials, userAgent, "card");

// Simplified bet data creation
const createBetData = (
  gameConfig: GameConfig,
  gameType: GameType,
  roundId?: number,
  gameName?: string
): any => {
  const base = {
    amount: gameConfig.betAmount || 1,
    betChoice: gameConfig.betChoice,
    ...(gameConfig.clientSeed && { clientSeed: gameConfig.clientSeed }),
  };

  if (gameType === "slot") {
    return {
      ...base,
      freeSpin: false,
      clientSentTime: new Date().toISOString(),
      ...(gameConfig.coinValue && { coinValue: gameConfig.coinValue }),
      ...(gameConfig.totalBet && { totalBet: gameConfig.totalBet }),
      ...(gameConfig.betLevel && { betLevel: gameConfig.betLevel }),
    };
  } else if (gameType === "crash") {
    const currentTime = new Date().toISOString();
    const crashBetData: any = {
      m: 1,
      username: "Emi26",
      freeBet: false,
      amount: gameConfig.betAmount || 1,
      clientSentTime: currentTime,
      autoCashOut: gameConfig.autoCashOut || 1.01,
      roundId: roundId,
      clientSeed: gameConfig.clientSeed || "4756",
      clientSendTime: currentTime,
    };

    // Add betKey for rocketx
    if (gameName === "rocketx") {
      crashBetData.betKey = 0;
    }

    return crashBetData;
  } else if (gameType === "tap") {
    const currentTime = new Date().toISOString();
    return {
      m: 1,
      username: "Emi26",
      freeBet: false,
      amount: gameConfig.betAmount || 1,
      clientSentTime: currentTime,
      action: "mine",
      clientSeed: gameConfig.clientSeed || "8982",
    };
  } else if (gameType === "card") {
    const currentTime = new Date().toISOString();
    return {
      deal: {
        hands: [
          {
            pos: 2,
            bet: gameConfig.betAmount || 50,
          },
        ],
      },
      clientSentTime: currentTime,
      username: "Emi26",
    };
  } else {
    return {
      ...base,
      username: "Emi26",
      m: "1",
    };
  }
};

// Simplified betting with retry
async function attemptBetting(
  socket: WebSocket,
  gameName: string,
  gameConfig: GameConfig,
  gameType: GameType,
  roundId?: number
): Promise<boolean> {
  let extractedRoundId = roundId; // For card games, will be extracted from deal response

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    if (attempt > 1)
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));

    try {
      const betData = createBetData(
        gameConfig,
        gameType,
        extractedRoundId,
        gameName
      );

      // Wait 3 seconds before sending bet message for crash games
      if (gameType === "crash") {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }

      await sendMessage(
        socket,
        createMessage(2, ["bet", betData], gameConfig.namespace, true)
      );

      // Special handling for tap games
      if (gameType === "tap") {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        await sendMessage(
          socket,
          createMessage(2, ["cashOut", {}], gameConfig.namespace, true)
        );
      }

      // Special handling for card games
      if (gameType === "card") {
        await new Promise((resolve) => setTimeout(resolve, 500));
        await new Promise((resolve) => setTimeout(resolve, 500));

        const dealResponse = await waitForResponse(
          socket,
          (data) => isCardDealResponse(data, gameName),
          DEFAULT_TIMEOUT.BETTING
        );

        // Extract roundId from deal response for potential retries
        extractedRoundId = dealResponse.data?.[1]?.deal?.roundId;

        const handData = dealResponse.data?.[1]?.deal?.hands?.[0];
        if (handData) {
          const standData = {
            ...handData,
            actions: ["stand"],
            isStand: true,
          };

          // Use the actual game response name from the deal response
          const gameResponseName = dealResponse.data?.[0] || gameName;
          await sendMessage(
            socket,
            createMessage(
              2,
              [gameResponseName, { stand: standData }],
              gameConfig.namespace,
              true
            )
          );
        } else {
          throw new Error(
            `${gameName}: Failed to extract hand data from card deal response`
          );
        }
      }

      const response = await waitForResponse(
        socket,
        (data) => isBetResponse(data, gameType),
        DEFAULT_TIMEOUT.BETTING
      );

      const responseData = response.data?.[1];
      if (
        gameType === "slot"
          ? responseData?.endBet
          : gameType === "crash"
            ? responseData?.endBet || responseData?.bet
            : gameType === "tap"
              ? responseData?.endBet
              : gameType === "card"
                ? responseData?.endBet
                : responseData?.ownBets
      ) {
        return true;
      }
    } catch (error) {
      // Only log if it's the final attempt
      if (attempt === MAX_RETRIES) {
        throw error;
      }
    }
  }

  throw new Error(`${gameName}: All betting attempts failed`);
}
