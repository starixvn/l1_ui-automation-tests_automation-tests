import { test, expect } from "@playwright/test";
import * as actions from "./autobot.funcs";
import { inputDataL2, RERL2 } from "../autobot/autobot.dataset";
const fs = require("fs");
let autobBetData ;

const gameType = "111";
const gameName = "HappyFishJackpot";

// const gameType = "64";
// const gameName = "MagicForest";

test.beforeAll(async ({}, testInfo) => {
  for (let key in inputDataL2) {
    inputDataL2[key].gameName = gameName;
  }
  autobBetData = await actions.setupBetData(inputDataL2,gameName);
  testInfo.snapshotPath = (gameName) => {
    const snapshotPath = __filename + "-snapshots/" + gameName;
    return snapshotPath;
  };
});

// // Run all the tests in the file concurrently using parallel workers.
// test.describe.configure({ mode: "parallel" });

test("Verify Retrieve End Round", async ({ page }) => {
  await actions.loginAdmin(page);
  let data = JSON.stringify(autobBetData);
  fs.writeFileSync("autobBetDataHFJP.json", data);
  await actions.verifyRetrieveEndRound(page, gameType, autobBetData, RERL2);
});

test("Verify Bet Ticket Detail", async ({ page, context }) => {
  test.setTimeout(150 * 1000);
  await actions.loginAdmin(page);
  const tcs = [
    "TC051",
    "TC052",
    "TC052",
    "TC053",
    "TC054",
    "TC055",
    "TC056",
    "TC057",
    "TC058",
    "TC059",
    "TC060",
    "TC061",
    "TC062",
    "TC063",
    "TC064",
    "TC065",
  ];

  for (const i of tcs) {
    let newTab = await actions.filterBetDetails(
      context,
      page,
      gameType,
      autobBetData[i].roundId,
      autobBetData[i].playerId
    );
    await newTab.waitForLoadState();
    let roundId = await newTab.locator(
      `//div[@id='game-ticket']/table[1]/tbody/tr/td[2]`
    );
    await expect(roundId).toContainText(autobBetData[i].roundId.toString());
    if (inputDataL2[i].freeSpin === true) {
      await expect(roundId).toContainText("Free Spins");
    }

    let payline = await newTab.locator('//*/table[@class="table-paylines"]');
    let detail = await newTab.locator('//*[@id="game-ticket"]/table[2]');
    await expect.soft(payline).toHaveScreenshot(`${gameName}-${i}_payline.png`);
    await expect.soft(detail, `${i}`).toHaveScreenshot(
      `${gameName}_${i}_details.png`,
      { maxDiffPixelRatio: 1 }
    );

    //check payline symbols
    const boardNumbers = inputDataL2[i].board.split(",");
    const paylineboard = {};
    boardNumbers.forEach((number) => {
      paylineboard[number] = (paylineboard[number] || 0) + 1; // Increment the count of the number
    });
    console.log(i, paylineboard);
    
    for (const [key, value] of Object.entries(paylineboard)) {
      let symbol = await newTab.$$(`//*/table[@class="table-paylines"]//img[contains(@src,"symbol-${key}.")]`)
      // console.log(i,"Key:", key,"Value:", value, symbol.length);
      expect(symbol.length).toBe(value)
    }

    await newTab.close();
  }
});

test.afterAll(async ({ browser }) => {
  await browser.close();
});
