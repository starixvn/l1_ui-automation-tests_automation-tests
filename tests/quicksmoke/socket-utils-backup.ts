import * as msgpack from "msgpack-lite";
import WebSocket from "ws";
import { Page } from "@playwright/test";
import { Credentials, GameConfig } from "./types";

// Helper function to log WebSocket frames
export const logFrame = (
  direction: "sent" | "received",
  url: string,
  data: any
) => {
  // Logging removed
};

// Generic function to wait for credentials
export const waitForCredentials = (
  getCredentials: () => Credentials | null,
  timeout: number = 30000
): Promise<Credentials> => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    const checkCredentials = () => {
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
        setTimeout(checkCredentials, 100);
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

        if (typeof payload === "string") {
          if (payload.startsWith("0")) {
            decodedData = JSON.parse(payload.slice(1));
          } else return;
        } else {
          decodedData = msgpack.decode(Buffer.from(payload));
        }

        // Logging removed

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

// Generic function to wait for WebSocket response
const waitForResponse = (
  socket: WebSocket,
  predicate: (data: any) => boolean,
  timeout: number = 35000,
  gameName: string = ""
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const messageHandler = (event: MessageEvent) => {
      try {
        let decodedData;

        // Handle string messages (handshake)
        if (typeof event.data === "string") {
          decodedData = event.data;
        } else {
          // Handle binary messages (MessagePack)
          decodedData = msgpack.decode(event.data);
        }

        if (predicate(decodedData)) {
          clearTimeout(timeoutId);
          socket.removeEventListener("message", messageHandler);
          resolve(decodedData);
        }
      } catch (error) {
        // Error logging removed
      }
    };

    const timeoutId = setTimeout(() => {
      // Clean up listener on timeout
      socket.removeEventListener("message", messageHandler);
      reject(new Error(`${gameName} response timeout after ${timeout}ms`));
    }, timeout);

    socket.addEventListener("message", messageHandler);
  });
};

// Send MessagePack encoded message
export const sendMessage = (socket: WebSocket, message: any): Promise<void> => {
  return new Promise((resolve) => {
    const encodedMessage = msgpack.encode(message);
    socket.send(encodedMessage);
    resolve();
  });
};

// Helper function to safely close WebSocket
const safeCloseSocket = (socket: WebSocket): Promise<void> => {
  return new Promise((resolve) => {
    if (!socket || socket.readyState === WebSocket.CLOSED) {
      resolve();
      return;
    }

    if (
      socket.readyState === WebSocket.OPEN ||
      socket.readyState === WebSocket.CONNECTING
    ) {
      const closeHandler = () => {
        socket.removeEventListener("close", closeHandler);
        socket.removeEventListener("error", errorHandler);
        resolve();
      };

      const errorHandler = () => {
        socket.removeEventListener("close", closeHandler);
        socket.removeEventListener("error", errorHandler);
        resolve();
      };

      // Set timeout to force close after 2 seconds
      setTimeout(() => {
        socket.removeEventListener("close", closeHandler);
        socket.removeEventListener("error", errorHandler);
        resolve();
      }, 2000);

      socket.addEventListener("close", closeHandler);
      socket.addEventListener("error", errorHandler);
      socket.close();
    } else {
      resolve();
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

  // Increase max listeners limit to prevent memory leak warnings
  socket.setMaxListeners(20);

  return socket;
};

// Wait for WebSocket connection
export const waitForConnection = (
  socket: WebSocket,
  gameName: string
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const openHandler = () => {
      socket.removeEventListener("open", openHandler);
      socket.removeEventListener("error", errorHandler);
      resolve();
    };

    const errorHandler = (error: Event) => {
      socket.removeEventListener("open", openHandler);
      socket.removeEventListener("error", errorHandler);
      reject(error);
    };

    socket.addEventListener("open", openHandler);
    socket.addEventListener("error", errorHandler);
  });
};

// Handle complete game workflow
export async function playGameRound(
  gameName: string,
  gameConfig: GameConfig,
  credentials: Credentials,
  userAgent: string
): Promise<void> {
  if (!gameConfig) {
    throw new Error(`Game configuration not found for: ${gameName}`);
  }

  const socket = createWebSocketConnection(
    gameConfig.url,
    userAgent,
    gameConfig.origin
  );

  try {
    // Step 1: Connect
    await waitForConnection(socket, gameName);

    // Step 2: Handle handshake
    await waitForResponse(
      socket,
      (data) => {
        if (typeof data === "string" && data.startsWith("0")) {
          try {
            const handshakeData = JSON.parse(data.slice(1));
            return true;
          } catch (error) {
            return false;
          }
        }
        return false;
      },
      20000,
      gameName
    );

    // Step 3: Send initial message
    await sendMessage(socket, {
      type: 0,
      data: { buffer: { type: "Buffer", data: [0] }, type: 0 },
      nsp: gameConfig.namespace,
    });

    // Step 4: Wait for connection acknowledgment
    await waitForResponse(
      socket,
      (data) => {
        if (data.type === 0 && data.data?.sid) {
          return true;
        }
        return false;
      },
      15000,
      gameName
    );

    // Step 5: Authenticate
    await sendMessage(socket, {
      type: 2,
      data: [
        "signin",
        {
          isAuthenticated: true,
          ss: credentials.sessionId,
          username: credentials.username,
          language: "vi-VN",
          system: 1,
          time: new Date().toISOString(),
        },
      ],
      options: { compress: true },
      nsp: gameConfig.namespace,
    });

    // Step 6: Wait for authentication response
    const authResponse = await waitForResponse(
      socket,
      (data) => {
        if (
          data.type === 2 &&
          Array.isArray(data.data) &&
          data.data[0] === "signedIn"
        ) {
          return true;
        }
        return false;
      },
      15000,
      gameName
    );

    if (authResponse.data?.[1]?.unauthorized) {
      throw new Error(`${gameName} authentication failed`);
    }

    // Step 7: Send in-game message
    await sendMessage(socket, {
      type: 2,
      data: ["inGame"],
      options: { compress: true },
      nsp: gameConfig.namespace,
    });

    // Step 8: Betting with retry
    const betSuccess = await attemptBettingRound(socket, gameName, gameConfig);

    if (betSuccess) {
      // Success - close socket immediately
      await safeCloseSocket(socket);
      return;
    } else {
      // Failed - close socket and throw error
      await safeCloseSocket(socket);
      throw new Error(`${gameName} betting failed after maximum attempts`);
    }
  } catch (error) {
    // Ensure socket is closed on any error
    await safeCloseSocket(socket);
    throw error;
  }
}

export async function playGameSlot(
  gameName: string,
  gameConfig: GameConfig,
  credentials: Credentials,
  userAgent: string
): Promise<void> {
  if (!gameConfig) {
    throw new Error(`Game configuration not found for: ${gameName}`);
  }

  const socket = createWebSocketConnection(
    gameConfig.url,
    userAgent,
    gameConfig.origin
  );

  try {
    // Step 1: Connect
    await waitForConnection(socket, gameName);

    // Step 2: Handle handshake
    await waitForResponse(
      socket,
      (data) => {
        if (typeof data === "string" && data.startsWith("0")) {
          try {
            const handshakeData = JSON.parse(data.slice(1));
            return true;
          } catch (error) {
            return false;
          }
        }
        return false;
      },
      20000,
      gameName
    );

    // Step 3: Send initial message
    await sendMessage(socket, {
      type: 0,
      data: { buffer: { type: "Buffer", data: [0] }, type: 0 },
      nsp: gameConfig.namespace,
    });

    // Step 4: Wait for connection acknowledgment
    await waitForResponse(
      socket,
      (data) => {
        if (data.type === 0 && data.data?.sid) {
          return true;
        }
        return false;
      },
      15000,
      gameName
    );

    // Step 5: Authenticate
    await sendMessage(socket, {
      type: 2,
      data: [
        "signin",
        {
          isAuthenticated: true,
          ss: credentials.sessionId,
          username: credentials.username,
          language: "vi-VN",
          system: 1,
          time: new Date().toISOString(),
        },
      ],
      options: { compress: true },
      nsp: gameConfig.namespace,
    });

    // Step 6: Wait for authentication response
    const authResponse = await waitForResponse(
      socket,
      (data) => {
        if (
          data.type === 2 &&
          Array.isArray(data.data) &&
          data.data[0] === "signedIn"
        ) {
          return true;
        }
        return false;
      },
      15000,
      gameName
    );

    if (authResponse.data?.[1]?.unauthorized) {
      throw new Error(`${gameName} authentication failed`);
    }

    // Step 7: Send in-game message
    await sendMessage(socket, {
      type: 2,
      data: ["inGame"],
      options: { compress: true },
      nsp: gameConfig.namespace,
    });

    // Step 8: Betting with retry
    const betSuccess = await attemptBettingSlot(socket, gameName, gameConfig);

    if (betSuccess) {
      // Success - close socket immediately
      await safeCloseSocket(socket);
      return;
    } else {
      // Failed - close socket and throw error
      await safeCloseSocket(socket);
      throw new Error(`${gameName} betting failed after maximum attempts`);
    }
  } catch (error) {
    // Ensure socket is closed on any error
    await safeCloseSocket(socket);
    throw error;
  }
}

// Simplified betting logic with retry
async function attemptBettingSlot(
  socket: WebSocket,
  gameName: string,
  gameConfig: GameConfig
): Promise<boolean> {
  const maxRetries = 30;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    if (attempt > 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1s between retries
    }

    try {
      // Send bet message
      const betData: any = {
        betChoice: gameConfig.betChoice,
        amount: gameConfig.betAmount,
        freeSpin: false,
        clientSentTime: new Date().toISOString(),
        // Conditionally add optional properties
        ...(gameConfig.clientSeed && { clientSeed: gameConfig.clientSeed }),
        ...(gameConfig.coinValue && { coinValue: gameConfig.coinValue }),
        ...(gameConfig.totalBet && { totalBet: gameConfig.totalBet }),
        ...(gameConfig.betLevel && { betLevel: gameConfig.betLevel }),
      };

      const betMessage = {
        type: 2,
        data: ["bet", betData],
        options: { compress: true },
        nsp: gameConfig.namespace,
      };

      // console.log(
      //   `📤 [${gameName}] Sending bet message:`,
      //   JSON.stringify(betData, null, 2)
      // );

      await sendMessage(socket, betMessage);

      // Wait for bet response
      const betResponse = await waitForResponse(
        socket,
        (data) => {
          if (
            data.type === 2 &&
            Array.isArray(data.data) &&
            data.data[1]?.hasOwnProperty("endBet")
          ) {
            return true;
          }
          return false;
        },
        35000,
        gameName
      );

      // console.log(
      //   `📥 [${gameName}] Received bet response:`,
      //   JSON.stringify(betResponse, null, 2)
      // );

      const endBet = betResponse.data?.[1]?.endBet;

      if (endBet) {
        // Bet successful - return immediately
        // console.log(`✅ [${gameName}] Bet successful on attempt ${attempt}`);
        return true;
      } else {
        // Bet failed - continue to next attempt
        console.log(
          `❌ [${gameName}] Bet failed on attempt ${attempt}, missing endBet in response`
        );
        continue;
      }
    } catch (error) {
      console.log(`💥 [${gameName}] Error on attempt ${attempt}:`, error);
    }
  }

  return false;
}

async function attemptBettingRound(
  socket: WebSocket,
  gameName: string,
  gameConfig: GameConfig
): Promise<boolean> {
  const maxRetries = 30;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    if (attempt > 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1s between retries
    }

    try {
      // Send bet message
      const betData: any = {
        amount: gameConfig.betAmount || 1,
        betChoice: gameConfig.betChoice,
        username: "NoName",
        m: "1",
        ...(gameConfig.clientSeed && { clientSeed: gameConfig.clientSeed }),
      };

      const betMessage = {
        type: 2,
        data: ["bet", betData],
        options: { compress: true },
        nsp: gameConfig.namespace,
      };

      // console.log(
      //   `📤 [${gameName}] Sending bet message:`,
      //   JSON.stringify(betData, null, 2)
      // );
      await sendMessage(socket, betMessage);

      // Wait for bet response
      const betResponse = await waitForResponse(
        socket,
        (data) => {
          if (
            data.type === 2 &&
            // Array.isArray(data.data) &&
            data.data[1]?.hasOwnProperty("endBet") &&
            data.data[1]?.hasOwnProperty("ownBets")
          ) {
            return true;
          }
          return false;
        },
        35000,
        gameName
      );

      // console.log(
      //   `📥 [${gameName}] Received bet response:`,
      //   JSON.stringify(betResponse, null, 2)
      // );

      const ownBets = betResponse.data?.[1]?.ownBets;

      if (ownBets) {
        // Bet successful - return immediately
        // console.log(`✅ [${gameName}] Bet successful on attempt ${attempt}`);
        return true;
      } else {
        // Bet failed - continue to next attempt
        console.log(
          `❌ [${gameName}] Bet failed on attempt ${attempt}, missing ownBets in response`
        );
        continue;
      }
    } catch (error) {
      console.log(`💥 [${gameName}] Error on attempt ${attempt}:`, error);
    }
  }

  return false;
}
