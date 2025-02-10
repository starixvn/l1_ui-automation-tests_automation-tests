import { test, expect, type Page } from "@playwright/test";
import { allure } from "allure-playwright";

const envConfig = {
  l1prod: "https://www.viva88.net/b/vn?fromMode=1",
  l2prod: "https://www.nova88.com/b/vn?fromMode=1",
  l1account: "supertestte120201001",
  l2account: "SUPERTESTIBCAge0233",
  l1pwd: "1234aa",
  l2pwd: "1234AAaa",
};

const locator = {
  lblLogin: "//div[@class='header']//a[@class='btn btn--secondary']",
  inputUserName: "#username",
  inputPwd: "#password",
  btnLogin: "//div[@class='login-form__item']//span[text()='Đăng nhập']",
  iconMode: "//div[@class='header-option']/div[1]",
  iconMobile: "//div[@class='header-option']/div[1]/div//span[text()='Mobile']",
  logoBet: "//div[@gtag='lobby_Casino']",
  iconSaba: "//div[2]/span[text()='Cổng Game SABA']",
  "Saba Club": {
    name: "Saba Club",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[1]//div[@data-name='Sảnh SABA.club']",
  },
  "Saba Mobi": {
    name: "Saba Mobi",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[2]//div[@data-name='Sảnh SABA.mobi']",
  },
  "Mega Keno": {
    name: "Mega Keno",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[3]//div[@data-name='Mega Keno']",
  },
  Sedie: {
    name: "Sedie",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[4]//div[@data-name='Xóc Đĩa']",
  },
  Baccarat: {
    name: "Baccarat",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[6]//div[@data-name='Cào Baccarat']",
  },
  Fourguardians: {
    name: "fourguardians",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[8]//div[@data-name='Long Lân Quy Phụng']",
  },
  Fishprawncrab: {
    name: "fishprawncrab",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[10]//div[@data-name='Bầu Cua']",
  },
  Blackjack: {
    name: "blackjack",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[7]//div[@data-name='Blackjack']",
  },
  BaccaratX: {
    name: "gateway",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[9]//div[@data-name='BaccaratX']",
  },
  Bigsmall: {
    name: "Tài Xỉu",
    xpath:
      "//div[@class='c-lobby-game-group__content']/div[11]//div[@data-name='Tài Xỉu']",
  },
};

const lstGames = [
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

test(`Smoke Test Games Locations and navigation on Member Site`, async ({ browser }) => {
  await allure.suite("Smoke Test Games Locations and navigation on Member Site");
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
  await test.step("Verify Logo is displayed at correct location", async () => {
    await page.click(locator.logoBet);
    await page.click(locator.iconSaba);
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
  if (gameName == "Saba Mobi" || gameName == "Mega Keno") {
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
