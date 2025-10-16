import { test, expect } from "@playwright/test";
import * as msgpack from "msgpack-lite";
import WebSocket from "ws";

// Define credentials interface
interface Credentials {
  sessionId: string;
  username: string;
  connectionUrl: string;
}

// Define message interfaces
interface BufferData {
  type: "Buffer";
  data: number[];
}

interface InitialMessage {
  type: number;
  data: {
    buffer: BufferData;
    type: number;
  };
  nsp: string;
}

interface SignInData {
  isAuthenticated: true;
  ss: string;
  username: string;
  language: string;
  system: 1;
  time: string;
}

interface AuthMessage {
  type: number;
  data: ["signin", SignInData];
  options: {
    compress: boolean;
  };
  nsp: string;
}

interface InGameMessage {
  type: number;
  data: ["inGame"];
  options: {
    compress: boolean;
  };
  nsp: string;
}

interface BetMessage {
  type: number;
  data: ["bet", any];
  options: {
    compress: boolean;
  };
  nsp: string;
}

interface GameConfig {
  url: string;
  namespace: string;
  origin: string;
  betChoice: string;
  betAmount: number;
  responseName: string;
}

// Game configuration
const gameConfigs = {
  dragontiger: {
    url: "wss://proxy.sabagame.com/dragontiger/socket.io/?EIO=4&transport=websocket",
    namespace: "/user/dragontiger",
    origin: "proxy.sabagame.com",
    betChoice: "dragon", // Options: "dragon", "tiger", "tie"
    betAmount: 1,
    responseName: "DragonTiger",
  },
  bigsmall: {
    url: "wss://proxy.sabagame.com/bigsmall/socket.io/?EIO=4&transport=websocket",
    namespace: "/user/bigsmall",
    origin: "proxy.sabagame.com",
    betChoice: "big",
    betAmount: 1,
    responseName: "bigsmall", // TODO: Verify response name
  },
};

// Function to play a single game
async function playGame(
  gameName: string,
  credentials: Credentials,
  userAgent: string
): Promise<void> {
  const gameConfig: GameConfig = gameConfigs[gameName];
  if (!gameConfig) {
    throw new Error(`Game configuration not found for: ${gameName}`);
  }

  console.log(`\n🎮 Starting game: ${gameName.toUpperCase()}`);
  console.log(`🔗 Connection URL: ${gameConfig.url}`);

  // Initialize WebSocket client with browser user agent
  const socket = new WebSocket(gameConfig.url, {
    headers: {
      "User-Agent": userAgent,
      Origin: gameConfig.origin,
      "Sec-WebSocket-Extensions": "permessage-deflate; client_max_window_bits",
      "Sec-WebSocket-Version": "13",
    },
  });

  // Function to send MessagePack encoded message
  const sendMessage = (message: any): Promise<void> => {
    return new Promise((resolve) => {
      const encodedMessage = msgpack.encode(message);
      socket.send(encodedMessage);
      resolve();
    });
  };

  try {
    // Wait for connection
    await new Promise<void>((resolve, reject) => {
      socket.onopen = () => {
        console.log(`✅ Connected to ${gameName} server`);
        resolve();
      };
      socket.onerror = (error: Event) => {
        console.error(`❌ ${gameName} connection error:`, error);
        reject(error);
      };
    });

    // Wait for handshake
    await new Promise<void>((resolve) => {
      socket.onmessage = (event: MessageEvent) => {
        console.log(
          `📨 ${gameName} received message:`,
          typeof event.data === "string" ? event.data : "binary data"
        );
        if (typeof event.data === "string" && event.data.startsWith("0")) {
          const handshakeData = JSON.parse(event.data.slice(1));
          console.log(`🤝 ${gameName} handshake received:`, handshakeData);
          resolve();
        }
      };

      // Add timeout for debugging
      setTimeout(() => {
        console.log(`⏰ ${gameName} handshake timeout after 10 seconds`);
        resolve();
      }, 10000);
    });

    // Send initial connect message
    const initialMessage: InitialMessage = {
      type: 0,
      data: { buffer: { type: "Buffer", data: [0] }, type: 0 },
      nsp: gameConfig.namespace,
    };
    console.log(`📤 Sending ${gameName} initial message`);
    await sendMessage(initialMessage);

    // Wait for connection acknowledgment
    await new Promise<any>((resolve) => {
      socket.onmessage = (event: MessageEvent) => {
        try {
          const decodedData = msgpack.decode(event.data);
          console.log(`📥 ${gameName} connection response:`, decodedData);
          if (decodedData.type === 0 && decodedData.data?.sid) {
            console.log(
              `✅ ${gameName} connection acknowledged with SID:`,
              decodedData.data.sid
            );
            resolve(decodedData);
          }
        } catch (error) {
          console.log(
            `⚠️ ${gameName} failed to decode connection response:`,
            error.message
          );
        }
      };

      // Add timeout for debugging
      setTimeout(() => {
        console.log(
          `⏰ ${gameName} connection acknowledgment timeout after 15 seconds`
        );
        resolve(null);
      }, 15000);
    });

    // Send authentication message
    const authMessage: AuthMessage = {
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
    };
    console.log(`📤 Sending ${gameName} authentication`);
    await sendMessage(authMessage);

    // Wait for authentication response
    const authResponse = await new Promise<any>((resolve) => {
      socket.onmessage = (event: MessageEvent) => {
        try {
          const decodedData = msgpack.decode(event.data);
          if (decodedData.type === 2 && Array.isArray(decodedData.data)) {
            if (decodedData.data[0] === "signedIn") {
              console.log(`✅ ${gameName} authentication successful!`);
            }
            resolve(decodedData);
          }
        } catch (error) {
          console.warn(`Error decoding ${gameName} auth response:`, error);
        }
      };
    });

    // Check authentication
    if (authResponse.data?.[1]?.unauthorized) {
      console.log(`❌ ${gameName} authentication failed`);
      return;
    }

    // Send in-game message
    const inGameMessage: InGameMessage = {
      type: 2,
      data: ["inGame"],
      options: { compress: true },
      nsp: gameConfig.namespace,
    };
    console.log(`📤 Sending ${gameName} in-game message`);
    await sendMessage(inGameMessage);

    // Wait for in-game response
    await new Promise<void>((resolve) => {
      socket.onmessage = (event: MessageEvent) => {
        try {
          const decodedData = msgpack.decode(event.data);
          resolve();
        } catch (error) {
          resolve();
        }
      };
    });

    // Bet logic with retry
    let betSuccess = false;
    let retryCount = 0;
    const maxRetries = 30;

    while (!betSuccess && retryCount < maxRetries) {
      console.log(`🔄 ${gameName} bet attempt ${retryCount + 1}/${maxRetries}`);
      console.log(
        `💰 Betting: ${gameConfig.betAmount} on ${gameConfig.betChoice}`
      );

      if (retryCount > 0) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      const betMessage: BetMessage = {
        type: 2,
        data: [
          "bet",
          {
            amount: gameConfig.betAmount,
            username: "Sentry74147",
            m: "1",
            betChoice: gameConfig.betChoice,
          },
        ],
        options: { compress: true },
        nsp: gameConfig.namespace,
      };

      await sendMessage(betMessage);

      // Wait for bet response
      const betResponse = await new Promise<any>((resolve) => {
        let resolved = false;
        const messageHandler = (event: MessageEvent) => {
          try {
            const decodedData = msgpack.decode(event.data);
            console.log("betResponse", decodedData);

            if (
              !resolved &&
              decodedData.type === 2 &&
              decodedData.data[1]?.hasOwnProperty("ownBets")
            ) {
              resolved = true;
              socket.removeEventListener("message", messageHandler);
              resolve(decodedData);
            }
          } catch (error) {
            if (!resolved) {
              resolved = true;
              socket.removeEventListener("message", messageHandler);
              resolve(null);
            }
          }
        };

        socket.addEventListener("message", messageHandler);
        setTimeout(() => {
          if (!resolved) {
            resolved = true;
            socket.removeEventListener("message", messageHandler);
            resolve(null);
          }
        }, 30000);
      });

      // Check bet response
      if (betResponse?.data?.[1]) {
        const ownBets = betResponse.data[1].ownBets;

        if (ownBets) {
          console.log(`✅ ${gameName} bet successful!`);
          betSuccess = true;
        } else {
          retryCount++;
          console.log(`❌ ${gameName} bet failed! No ownBets.`);
          if (retryCount < maxRetries) {
            console.log(`⏰ Retrying in 60 seconds...`);
            await new Promise((resolve) => setTimeout(resolve, 30000));
          }
        }
      } else {
        retryCount++;
        console.log(`⚠️ ${gameName} invalid bet response`);
        if (retryCount < maxRetries) {
          await new Promise((resolve) => setTimeout(resolve, 30000));
        }
      }
    }

    if (!betSuccess) {
      console.log(`❌ ${gameName} failed after ${maxRetries} attempts`);
    } else {
      console.log(`🎉 ${gameName} completed successfully!`);
    }
  } finally {
    socket.close();
  }
}

test("test WebSocket connection with captured credentials", async ({
  page,
}) => {
  let sessionId = "";
  let username = "";
  let firstConnectionUrl = "";

  // Helper function to wait for credentials
  const waitForCredentials = (): Promise<Credentials> => {
    return new Promise((resolve) => {
      const checkCredentials = () => {
        if (sessionId && username && firstConnectionUrl) {
          resolve({ sessionId, username, connectionUrl: firstConnectionUrl });
        } else {
          setTimeout(checkCredentials, 100);
        }
      };
      checkCredentials();
    });
  };

  // Helper function to log WebSocket frames
  const logFrame = (direction: "sent" | "received", url: string, data: any) => {
    console.log("URL:", url);
    console.log("Data:", JSON.stringify(data, null, 2).replace(/\\n/g, ""));
  };

  // Listen to WebSocket frames and capture credentials
  page.on("websocket", (ws) => {
    if (ws.url().includes("notification")) return;

    console.log("\n🌐 WebSocket connected:", ws.url());

    const frameHandler = (frame: any, direction: "sent" | "received") => {
      try {
        const payload = frame.payload;
        let decodedData;

        if (typeof payload === "string") {
          if (payload.startsWith("0")) {
            decodedData = JSON.parse(payload.slice(1));
          } else {
            return;
          }
        } else {
          decodedData = msgpack.decode(Buffer.from(payload));
        }

        if (direction === "sent") {
          logFrame(direction, ws.url(), decodedData);
        }

        if (
          direction === "sent" &&
          decodedData.type === 2 &&
          decodedData.data?.[0] === "signin" &&
          decodedData.data?.[1]?.ss &&
          decodedData.data?.[1]?.username
        ) {
          sessionId = decodedData.data[1].ss;
          username = decodedData.data[1].username;
          firstConnectionUrl = ws.url();
        }
      } catch (error) {
        console.warn("Error decoding frame:", error);
      }
    };

    ws.on("framesent", (frame: any) => frameHandler(frame, "sent"));
    ws.on("framereceived", (frame: any) => frameHandler(frame, "received"));
  });

  // Navigate and get credentials
  await page.goto("https://m.viva88.net/#Sports/s=1_0&d=l");
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(5000);
  await page.addStyleTag({
    content: `#dialogMessage {display: none !important;}
    div[class*="promo"] {display: none !important;}
    a[class*="c-btn c-btn--bot"] {display: none !important;}`,
  });
  await page.locator("div[style*='1130_1636_Saba_SicBo_96']").click();

  console.log("\n⏳ Waiting for credentials from game...");
  const credentials = await waitForCredentials();
  console.log("\n✅ Credentials captured:", {
    sessionId: credentials.sessionId,
    username: credentials.username,
    connectionUrl: credentials.connectionUrl,
  });
  await page.waitForTimeout(1000);

  // Get browser user agent
  const userAgent = await page.evaluate(() => navigator.userAgent);
  console.log("🔍 Browser User Agent:", userAgent);

  // List of games to play
  const games = ["dragontiger", "bigsmall"];

  console.log(`🚀 Starting ${games.length} games in parallel...`);

  // Play all games in parallel
  const gamePromises = games.map((gameName) =>
    playGame(gameName, credentials, userAgent)
      .then(() => {
        console.log(`✅ ${gameName} completed successfully`);
        return { game: gameName, status: "success" };
      })
      .catch((error) => {
        console.error(`❌ Error playing ${gameName}:`, error);
        return { game: gameName, status: "failed", error };
      })
  );

  // Wait for all games to complete (whether success or failure)
  const results = await Promise.allSettled(gamePromises);

  // Summary of results
  console.log("\n📊 Game Results Summary:");
  const successful = results.filter(
    (result) =>
      result.status === "fulfilled" && result.value.status === "success"
  );
  const failed = results.filter(
    (result) =>
      result.status === "rejected" ||
      (result.status === "fulfilled" && result.value.status === "failed")
  );

  console.log(`✅ Successful: ${successful.length}/${games.length}`);
  console.log(`❌ Failed: ${failed.length}/${games.length}`);

  if (successful.length > 0) {
    const successfulGames = successful
      .filter((r) => r.status === "fulfilled")
      .map((r) => (r as PromiseFulfilledResult<any>).value.game);
    console.log(`🎉 Successful games: ${successfulGames.join(", ")}`);
  }
  if (failed.length > 0) {
    const failedGames = failed.map((r) =>
      r.status === "fulfilled"
        ? (r as PromiseFulfilledResult<any>).value.game
        : "unknown"
    );
    console.log(`💀 Failed games: ${failedGames.join(", ")}`);
  }

  console.log("🎉 All games completed!");
});
