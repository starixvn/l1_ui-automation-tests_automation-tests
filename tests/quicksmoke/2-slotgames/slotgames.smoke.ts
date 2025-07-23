import { test } from "@playwright/test";
import {
  playGameSlot,
  setupCredentialCapture,
  waitForCredentials,
} from "../socket-utils";
import { gameConfigs } from "./dataset";

test("test WebSocket connection with captured credentials", async ({
  page,
}) => {
  test.setTimeout(800 * 1000);
  let sessionId = "";
  let username = "";
  let connectionUrl = "";

  const games: string[] = [
      "fortunecat",
      "waytogoal",
      "magicforest",
      "happyfish",
      "nightclub",
      "heroesslot",
      "fourguardians",
      "djclub",
      "missionimpossible",
      "blackpink",
      "transformers",
      "onepiece",
      "dragonball",
      "templeofcaishen",
      "nezhasrebellion",
      "ramseslosttomb",
      "onedayinparadise",
      "poseidonsrealm",
      "aladdinswishes",
      "godoffortune",
      "candyland",
      "olympub",
      "bigbassfishing",
      "aztecprincess",
      "fruitsamurai",
      "wildwestmostwanted",
      "happyfarm",
      "mahjongwins",
      "summerheat",
      "wukongsrevenge",
  ];

  // Setup WebSocket listener for credential capture
  setupCredentialCapture(
    page,
    (sessionId_captured, username_captured, connectionUrl_captured) => {
      sessionId = sessionId_captured;
      username = username_captured;
      connectionUrl = connectionUrl_captured;
    }
  );

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
  const credentials = await waitForCredentials(() => {
    if (sessionId && username && connectionUrl) {
      return { sessionId, username, connectionUrl };
    }
    return null;
  });

  await page.waitForTimeout(1000);

  // Get browser user agent
  const userAgent = await page.evaluate(() => navigator.userAgent);

  // Helper function to chunk array
  const chunkArray = (array: string[], chunkSize: number): string[][] => {
    const chunks: string[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Split games into batches
  const BATCH_SIZE = 10;
  const gameBatches = chunkArray(games, BATCH_SIZE);

  console.log(
    `🚀 Starting ${games.length} games in ${gameBatches.length} batches (max ${BATCH_SIZE} parallel connections)...`
  );

  let allResults: any[] = [];

  // Process each batch sequentially
  for (let batchIndex = 0; batchIndex < gameBatches.length; batchIndex++) {
    const batch = gameBatches[batchIndex];
    console.log(
      `\n📦 Processing batch ${batchIndex + 1}/${gameBatches.length}: ${batch.join(", ")}`
    );

    // Play games in current batch in parallel
    const batchPromises = batch.map((gameName) =>
      playGameSlot(gameName, gameConfigs[gameName], credentials, userAgent)
        .then(() => {
          console.log(`✅ ${gameName} completed successfully`);
          return { game: gameName, status: "success" };
        })
        .catch((error) => {
          console.error(`❌ Error playing ${gameName}:`, error);
          return { game: gameName, status: "failed", error };
        })
    );

    // Wait for current batch to complete
    const batchResults = await Promise.allSettled(batchPromises);
    allResults = allResults.concat(batchResults);

    // Short delay between batches to avoid overwhelming the server
    if (batchIndex < gameBatches.length - 1) {
      console.log(`⏳ Waiting 2 seconds before next batch...`);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  const results = allResults;

  // Summary of results
  console.log(
    "\n📊 Verify games services are working and place bets successfully"
  );
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
    const successfulGames = successful.map(
      (r) => (r as PromiseFulfilledResult<any>).value.game
    );
    console.log(`🎉 Successful games:`);
    successfulGames.forEach((game, index) => {
      const gameIndex = games.indexOf(game);
      console.log(`  ${gameIndex}: ${game}`);
    });
  }
  if (failed.length > 0) {
    const failedGames = failed.map((r) =>
      r.status === "fulfilled"
        ? (r as PromiseFulfilledResult<any>).value.game
        : "unknown"
    );
    console.log(`❌ Failed games:`);
    failedGames.forEach((game, index) => {
      const gameIndex = games.indexOf(game);
      console.log(`  ${gameIndex}: ${game}`);
    });
  }
});
