import { test, expect, type Page } from "@playwright/test";
import { allure } from "allure-playwright";

const envConfig = {
  l1prod: "https://www.viva88.net/b/vn?fromMode=1",
  l2prod: "https://www.nova88.com/b/vn",
  l1account: "supertestte120201001",
  l2account: "SUPERTESTIBCAge0246",
  l1pwd: "1234aa",
  l2pwd: "1q2w3e4r",
};

const l1locator = {
  lblLogin: "//div[@class='header']//a[@class='btn btn--secondary']",
  inputUserName: "#username",
  inputPwd: "#password",
  btnLogin: "//div[@class='login-form__item']//span[text()='Đăng nhập']",
  iconMode: "//div[@class='header-option']/div[1]",
  iconMobile: "//div[@class='header-option']/div[1]/div//span[text()='Mobile']",
  logoBet: "//div[@gtag='lobby_Casino']",
  iconGame: "//span[text()='Cổng Game SABA']",
  "Saba Club": {
    name: "Saba Club",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[4]//div[@data-name='Sảnh SABA.club']",
  },
  "Saba Mobi": {
    name: "Saba Mobi",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[5]//div[@data-name='Sảnh SABA.mobi']",
  },
  "Mega Keno": {
    name: "Mega Keno",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[6]//div[@data-name='Mega Keno']",
  },
  Sedie: {
    name: "Sedie",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[8]//div[@data-name='Xóc Đĩa']",
  },
  Baccarat: {
    name: "Baccarat",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[9]//div[@data-name='Cào Baccarat']",
  },
  Fourguardians: {
    name: "fourguardians",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[11]//div[@data-name='Long Lân Quy Phụng']",
  },
  Fishprawncrab: {
    name: "fishprawncrab",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[13]//div[@data-name='Bầu Cua']",
  },
  Blackjack: {
    name: "blackjack",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[10]//div[@data-name='Blackjack']",
  },
  BaccaratX: {
    name: "gateway",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[12]//div[@data-name='BaccaratX']",
  },
  Bigsmall: {
    name: "Tài Xỉu",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[7]//div[@data-name='Tài Xỉu']",
  },
};

const l1lstGames = [
  "Saba Club",
  "Saba Mobi",
  "Mega Keno",
  "Sedie",
  "Baccarat",
  "Fourguardians",
  "Fishprawncrab",
  "Blackjack",
  "BaccaratX",
  "Bigsmall",
];

const l2locator = {
  lblLogin: "//div[@class='header']//a[@class='btn btn--secondary']",
  inputUserName: "#username",
  inputPwd: "#password",
  btnLogin: "//div[@class='login-form__item']//span[text()='Đăng nhập']",
  iconMode: "//div[@class='header-option']/div[1]",
  iconMobile: "//div[@class='header-option']/div[1]/div//span[text()='Mobile']",
  logoBet: "//div[@gtag='lobby_Casino']",
  iconGame: "//span[text()='Vgaming']",
  "Cào Baccarat": {
    name: "Baccarat",
    xpath:
      "//div[@data-name='Cào Baccarat']",
  },
  "Bóng Xoáy": {
    name: "MarbleFootball",
    xpath:
      "//div[@data-name='Bóng Xoáy']",
  },
  "Sảnh Vgaming": {
    name: "Sảnh Vgaming",
    xpath:
      "//div[@data-name='Sảnh Vgaming']",
  },
  "Vgaming Mobi": {
    name: "Vgaming Mobi",
    xpath:
      "//div[@data-name='Vgaming Mobi']",
  },
  "Vgaming Keno": {
    name: "Vgaming Keno",
    xpath:
      "//div[@data-name='Vgaming Keno']",
  },
  "Tài Xỉu Sic Bo": {
    name: "SicBo",
    xpath:
      "//div[@data-name='Tài Xỉu Sic Bo']",
  },
  "Roulette": {
    name: "Roulette",
    xpath:
      "//div[@data-name='Roulette']",
  },
  "Texas Hold’em Poker": {
    name: "TexasHoldemPoker",
    xpath:
      "//div[@data-name='Texas Hold’em Poker']",
  },
  "Casino Hold’em Poker": {
    name: "CasinoHoldemPoker",
    xpath:
      "//div[@data-name='Casino Hold’em Poker']",
  },
  "Rồng Hổ": {
    name: "Rồng Hổ",
    xpath:
      "//div[@data-name='Rồng Hổ']",
  },
  "Bầu Cua": {
    name: "Bầu Cua",
    xpath:
      "//div[@data-name='Bầu Cua']",
  },
  "Xóc Đĩa": {
    name: "Xóc Đĩa",
    xpath:
      "//div[@data-name='Xóc Đĩa']",
  },
  "Keno Pro Max": {
    name: "Keno Pro Max",
    xpath:
      "//div[@data-name='Keno Pro Max']",
  },
  "Keno Mini": {
    name: "Keno Mini",
    xpath:
      "//div[@data-name='Keno Mini']"
    },
  "Blackjack": {
    name: "Blackjack",
    xpath:
      "//div[@data-name='Blackjack']"
  }
};

const l2lstGames = [
  "Cào Baccarat",
  "Vgaming Mobi",
  "Vgaming Keno",
  "Blackjack",
  "Tài Xỉu Sic Bo",
  "Roulette",
  "Texas Hold’em Poker",
  // "Casino Hold’em Poker",
  // "Rồng Hổ",
  // "Bầu Cua",
  // "Xóc Đĩa",
  // "Keno Pro Max",
  // "Keno Mini",
];


test(`Smoke Test Games Locations and navigation on Member Site`, async ({ browser }) => {
  const projectCode = process.env.npm_config_project?.includes("l1") ? "SG" : "VG";
  const locator = projectCode == "SG" ? l1locator : l2locator;
  const lstGames = projectCode == "SG" ? l1lstGames : l2lstGames;
  await allure.suite(`${projectCode}-Smoke Test Games Locations and navigation on Member Site`);
  console.log("projectCode", projectCode);
  const context = await browser.newContext();
  const page = await context.newPage();
  const env = process.env.npm_config_env;
  const project = process.env.npm_config_project;
  await page.goto(envConfig[`${project}${env}`]);
  const alertDialogSelector = "//div[@class='modal modal--alert']//div[1]/a";
  await page.waitForSelector(alertDialogSelector, { timeout: 5000 }).catch(() => {
      console.log("Alert dialog not found within the timeout period.");
  });
  const alertDialogExists = await page.$(alertDialogSelector);
  if (alertDialogExists) {
      await page.click(alertDialogSelector);
  }
  await page.click(locator.iconMode);
  await page.click(locator.iconMobile);
  await page.click(locator.lblLogin);
  await page.fill(locator.inputUserName, envConfig[`${project}account`]);
  await page.fill(locator.inputPwd, envConfig[`${project}pwd`]);
  await page.click(locator.btnLogin);
  await page.waitForLoadState();
  await page.waitForTimeout(5000);
  await test.step("Verify Logo is displayed at correct location", async () => {
    await page.click(locator.logoBet);
    expect(await page.isVisible(locator.iconGame)).toBeTruthy();
    await page.click(locator.iconGame);
  });
  await test.step("Verify All games load successfully", async () => {
    for (const element of lstGames) {
      console.log(`verify ${element}`);
      const [newtab] = await Promise.all([
        context.waitForEvent("page"),
        await page.click(locator[element]["xpath"]),
      ]);

      await verifyGameUiLoad(newtab, locator[element].name);
      await newtab.close();
    }
  });
});

const verifyGameUiLoad = async (page: any, gameName: string) => {
  const waitRange = 1;
  let filterA: string[] = [];
  const searchString = "LoadScene";
  if (
    gameName != "Saba Club" &&
    gameName != "Saba Mobi" &&
    gameName != "Mega Keno"
  ) {
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
            .includes(gameName.toLowerCase()),
          msg.text() + " " + gameName
        ).toBeTruthy();
      }
    });
  }
  if (gameName.includes("Mobi") || gameName.includes("Keno")) {
    await page.waitForTimeout(5000);
    const title = await page.title();
    expect(title).toContain(gameName);
    filterA.push(gameName);
  } else {
    page.on("console", (msg) => {
      if (msg.text().includes(searchString)) {
        filterA.push(msg.text());
      }
    });
  }

  while (filterA.length < waitRange) {
    await page.waitForTimeout(200);
  }
  await page.waitForTimeout(500);
};
