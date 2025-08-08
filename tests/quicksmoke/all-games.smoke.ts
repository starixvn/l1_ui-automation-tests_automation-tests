import { test, expect, Browser } from "@playwright/test";
import {
  playGameRound,
  playGameSlot,
  playGameCrash,
  playGameTap,
  playGameCard,
  setupCredentialCapture,
  waitForCredentials,
} from "./socket-utils";
import {
  allGameConfigs,
  roundGames,
  slotGames,
  otherGames,
  cardCrashGames,
} from "./all-games-dataset";
import { getCurrentProjectConfig } from "./project-configs";

// Global shared credentials - setup once for all tests
let globalCredentials: any = null;
let globalUserAgent: string = "";
const projectConfig = getCurrentProjectConfig();

// Global setup - runs once before all tests
test.beforeAll(async ({ browser }) => {
  const page = await browser.newPage();
  let sessionId = "";
  let username = "";
  let connectionUrl = "";

  // Setup WebSocket listener for credential capture
  setupCredentialCapture(
    page,
    (sessionId_captured, username_captured, connectionUrl_captured) => {
      sessionId = sessionId_captured;
      username = username_captured;
      connectionUrl = connectionUrl_captured;
    }
  );
  // Use project-specific setup
  console.log(`🌐 Setting up credentials for project: ${projectConfig.name}`);
  await projectConfig.setupCredentials(page);

  const credentials = await waitForCredentials(() => {
    if (sessionId && username && connectionUrl) {
      return { sessionId, username, connectionUrl };
    }
    return null;
  });
  console.log("credentials", credentials);
  await page.waitForTimeout(2000);

  // Get browser user agent
  const userAgent = await page.evaluate(() => navigator.userAgent);

  // Cache credentials globally
  globalCredentials = credentials;
  globalUserAgent = userAgent;

  // Close the setup page
  await page.close();
  console.log(`✅ ${projectConfig.name} credentials setup completed`);
});

// Helper function to run games in batches
async function runGamesInBatches(
  games: string[],
  playFunction: any,
  credentials: any,
  userAgent: string,
  batchSize: number = 5,
  testType: string
) {
  // Helper function to chunk array
  const chunkArray = (array: string[], chunkSize: number): string[][] => {
    const chunks: string[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const gameBatches = chunkArray(games, batchSize);
  let allResults: any[] = [];

  // Process each batch sequentially
  for (let batchIndex = 0; batchIndex < gameBatches.length; batchIndex++) {
    const batch = gameBatches[batchIndex];

    // Play games in current batch in parallel
    const batchPromises = batch.map((gameName) =>
      playFunction(gameName, allGameConfigs[gameName], credentials, userAgent)
        .then(() => {
          console.log(`✅ ${gameName}: PASSED`);
          return { game: gameName, status: "success" };
        })
        .catch((error) => {
          console.log(`❌ ${gameName}: FAILED - ${error.message || error}`);
          return { game: gameName, status: "failed", error };
        })
    );

    // Wait for current batch to complete
    const batchResults = await Promise.allSettled(batchPromises);
    allResults = allResults.concat(batchResults);

    // Short delay between batches
    if (batchIndex < gameBatches.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  // Summary of results
  const successful = allResults.filter(
    (result) =>
      result.status === "fulfilled" && result.value.status === "success"
  );
  const failed = allResults.filter(
    (result) =>
      result.status === "rejected" ||
      (result.status === "fulfilled" && result.value.status === "failed")
  );

  console.log(
    `\n📊 ${testType}: ✅ ${successful.length}/${games.length} successful`
  );

  if (failed.length > 0) {
    const failedGames = failed.map((r) =>
      r.status === "fulfilled"
        ? (r as PromiseFulfilledResult<any>).value.game
        : "unknown"
    );
    console.log(`❌ Failed games: ${failedGames.join(", ")}`);
  }

  return {
    successful: successful.length,
    failed: failed.length,
    total: games.length,
  };
}

// Test 1: Round Games
test("Round Games - WebSocket connection with cached credentials", async () => {
  test.setTimeout(800 * 1000);

  await runGamesInBatches(
    roundGames,
    playGameRound,
    globalCredentials,
    globalUserAgent,
    5,
    "Round"
  );
});

// Test 2: Slot Games
test("Slot Games - WebSocket connection with cached credentials", async () => {
  test.setTimeout(800 * 1000);

  await runGamesInBatches(
    slotGames,
    playGameSlot,
    globalCredentials,
    globalUserAgent,
    10,
    "Slot"
  );
});

// Test 3: Other Games
test("Other Games - WebSocket connection with cached credentials", async () => {
  test.setTimeout(800 * 1000);

  await runGamesInBatches(
    otherGames,
    playGameRound,
    globalCredentials,
    globalUserAgent,
    5,
    "Other"
  );
});

// Test 4: Card & Crash Games
test("Card & Crash Games - WebSocket connection with cached credentials", async () => {
  test.setTimeout(800 * 1000);

  // Define games that need special handling
  const crashGames = ["spaceflight", "christmascrash", "rocketx"];
  const tapGames = ["coinmining"];
  const cardGames = ["blackjack", "chineseblackjack"];

  // Helper function to chunk array
  const chunkArray = (array: string[], chunkSize: number): string[][] => {
    const chunks: string[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const BATCH_SIZE = 5;
  const gameBatches = chunkArray(cardCrashGames, BATCH_SIZE);
  let allResults: any[] = [];

  // Process each batch sequentially
  for (let batchIndex = 0; batchIndex < gameBatches.length; batchIndex++) {
    const batch = gameBatches[batchIndex];

    // Play games in current batch in parallel with appropriate play functions
    const batchPromises = batch.map((gameName) => {
      let playFunction;

      if (crashGames.includes(gameName)) {
        playFunction = playGameCrash;
      } else if (tapGames.includes(gameName)) {
        playFunction = playGameTap;
      } else if (cardGames.includes(gameName)) {
        playFunction = playGameCard;
      } else {
        playFunction = playGameRound; // Default fallback
      }

      return playFunction(
        gameName,
        allGameConfigs[gameName],
        globalCredentials,
        globalUserAgent
      )
        .then(() => {
          console.log(`✅ ${gameName}: PASSED`);
          return { game: gameName, status: "success" };
        })
        .catch((error) => {
          console.log(`❌ ${gameName}: FAILED - ${error.message || error}`);
          return { game: gameName, status: "failed", error };
        });
    });

    // Wait for current batch to complete
    const batchResults = await Promise.allSettled(batchPromises);
    allResults = allResults.concat(batchResults);

    // Short delay between batches
    if (batchIndex < gameBatches.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  // Summary of results
  const successful = allResults.filter(
    (result) =>
      result.status === "fulfilled" && result.value.status === "success"
  );
  const failed = allResults.filter(
    (result) =>
      result.status === "rejected" ||
      (result.status === "fulfilled" && result.value.status === "failed")
  );

  console.log(
    `\n📊 Card & Crash: ✅ ${successful.length}/${cardCrashGames.length} successful`
  );

  if (failed.length > 0) {
    const failedGames = failed.map((r) =>
      r.status === "fulfilled"
        ? (r as PromiseFulfilledResult<any>).value.game
        : "unknown"
    );
    console.log(`❌ Failed games: ${failedGames.join(", ")}`);
  }
});
