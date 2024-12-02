import { test, expect } from "@playwright/test";
import { allure }  from "allure-playwright";

const lobbyUrl = {
  l1local: "https://l1-info1.lumigame.com/category/allGames",
  l2local: "https://l2-info.lumigame.com/category/allGames",
  l1prod: "https://www.sabagames.io/category/allGames",
  l2prod: "https://www.sabagames.io/category/allGames",
};

test.describe.configure({ mode: "serial" });

test(`Check game list 1`, async ({ page }) => {
  await allure.suite("Play For Fun");
  const env = process.env.npm_config_project + process.env.npm_config_env;
  await page.goto(lobbyUrl[env]);
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(500);
  await page
    .locator('//*[@id="container-home"]/div[2]/section[2]/div[1]')
    .click();
  await page.waitForTimeout(100);
  for (let i = 0; i < 15; i++) {
    await page.keyboard.press("PageDown", { delay: 50 });
  }

  const totalGames = await page
    .locator(`//section[@class='container']/div`)
    .count();
  for (let i = 1; i < totalGames / 2; i++) {
    const gameName = await page
      .locator(`//section[@class='container']/div[${i}]/h2`)
      .innerText();
    const [newPage] = await Promise.all([
      page.waitForEvent("popup"), // Wait for the new tab to open
      page.locator(`//section[@class='container']/div[${i}]//button`).click(), // Click the button
    ]);
    await newPage.waitForLoadState();
    // await submitTestCurrency(newPage);
    await test.step(`Verify game ${gameName} load`, async () => {
      await verifyGameUiLoad(newPage, gameName);
    });
    await newPage.close(); // Close the new tab
  }
});

test(`Check game list 2`, async ({ page }) => {
  await allure.suite("Play For Fun");
  const env = process.env.npm_config_project + process.env.npm_config_env;
  await page.goto(lobbyUrl[env]);
  await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(500);
  await page
    .locator('//*[@id="container-home"]/div[2]/section[2]/div[1]')
    .click();
  await page.waitForTimeout(100);
  for (let i = 0; i < 15; i++) {
    await page.keyboard.press("PageDown", { delay: 50 });
  }

  const totalGames = await page
    .locator(`//section[@class='container']/div`)
    .count();
  for (let i = totalGames / 2; i <= totalGames; i++) {
    const gameName = await page
      .locator(`//section[@class='container']/div[${i}]/h2`)
      .innerText();
    const [newPage] = await Promise.all([
      page.waitForEvent("popup"), // Wait for the new tab to open
      page.locator(`//section[@class='container']/div[${i}]//button`).click(), // Click the button
    ]);
    await newPage.waitForLoadState();
    // await submitTestCurrency(newPage);
    await test.step(`Verify game ${gameName} load`, async () => {
      await verifyGameUiLoad(newPage, gameName);
    });
    await newPage.close(); // Close the new tab
  }
});

const submitTestCurrency = async (page: any) => {
  await page.locator("text=Submit").click();
  await page.waitForLoadState("domcontentloaded");
};

const verifyGameUiLoad = async (page: any, gameName: string) => {
  const waitRange = 1;
  let filterA: string[] = [];
  const searchString = "LoadScene";
  let gamename = gameName.replaceAll(" ", "");
  const gameNameMapping: { [key: string]: string } = {
    BigSmallCity: "LasVegas",
    NightclubLady: "NightClub",
    "TexasHold’em": "TexasHoldemPoker",
    "CasinoHold’em": "CasinoHoldemPoker",
    TheLegendofHeroes: "HeroesSlot",
    RNGLottery: "Lottery",
  };

  gamename = gameNameMapping[gamename] || gamename; // Use mapping or keep original
  page.on("console", (msg) => {
    if (
      msg.text().includes(searchString) &&
      !msg.text().includes("LoadScene Lobby")
    ) {
      console.log(msg.text());
      filterA.push(msg.text());
      expect(
        msg
          .text()
          .replaceAll(" ", "")
          .toLowerCase()
          .includes(gamename.toLowerCase()),
        msg.text() + " " + gamename
      ).toBeTruthy();
    }
  });

  while (filterA.length < waitRange) {
    await page.waitForTimeout(200);
  }
  await page.waitForTimeout(500);
};
