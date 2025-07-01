import { test, expect, type Page } from "@playwright/test";
import { allure } from "allure-playwright";
const projectCode = process.env.npm_config_project?.includes("l1")
  ? "SG"
  : "VG";

const envConfig = {
  l1prod: "https://www.viva88.net/b/vn?fromMode=1",
  l2prod: "https://www.nova88.com/b/vn",
  l1account: "supertestte120201001",
  l2account: "SUPERTESTIBCAge0246",
  l1pwd: "1234aa",
  l2pwd: "1q2w3e4r",
};

const cfgGameNames = {
  l1: [
    "Xóc Đĩa VIP",
    "Aladdin Và Cây Đèn Thần",
    "Xóc Đĩa",
    "Bóng Xoáy X",
    "Tài Xỉu",
    "Thần Tài Đến",
    "SABA.games",
    "Sảnh SABA.club",
    "Sảnh SABA.mobi",
    "SABA Keno",
    "Tên Lửa X",
    "BaccaratX",
    "Blackjack",
    "Long Lân Quy Phụng",
    "Bầu Cua",
    "Tung Xu Bóng Đá",
    "Dragon Tiger",
    "Keno Pro Max",
    "Roulette",
    "Christmas X",
    "Ngộ Không Báo Thù",
    "Rước Lộc Thần Tài",
    "Tay Súng Cừ Khôi",
    "Nông Trại Vui Vẻ",
    "Kho Báu Poseidon",
    "Mùa Hè Nóng Bỏng",
    "Kho Báu Ramses",
    "Ma Đồng Nổi Loạn",
    "Đảo Thiên Đường",
  ],

  l2: [
    "Cào Baccarat",
    "Aladdin Và Cây Đèn Thần",
    "Tài Xỉu Sic Bo",
    "Thần Tài Đến",
    "Blackjack",
    "Bóng Xoáy X",
    "Sảnh Vgaming",
    "Vgaming",
    "Vgaming Mobi",
    "Vgaming Keno",
    "BaccaratX",
    "Roulette",
    "Tên Lửa X",
    "Tung Xu Bóng Đá",
    "Đảo Châu Báu",
    "Xóc Đĩa",
    "Rồng Hổ",
    "Keno Pro Max",
    "Happy Fish",
    "Christmas X",
    "Ngộ Không Báo Thù",
    "Rước Lộc Thần Tài",
    "Tay Súng Cừ Khôi",
    "Nông Trại Vui Vẻ",
    "Kho Báu Poseidon",
    "Mùa Hè Nóng Bỏng",
    "Kho Báu Ramses",
    "Ma Đồng Nổi Loạn",
    "Đảo Thiên Đường",
  ],
};

const cfgLocator = {
  l1: {
    lblLogin: "//div[@class='header']//a[@class='btn btn--secondary']",
    inputUserName: "#username",
    inputPwd: "#password",
    btnLogin: "//div[@class='login-form__item']//span[text()='Đăng nhập']",
    iconMode: "//div[@class='header-option']/div[1]",
    iconMobile:
      "//div[@class='header-option']/div[1]/div//span[text()='Mobile']",
    logoBet: "//div[@gtag='lobby_Casino']",
    iconGame: "//span[text()='Cổng Game SABA']",
  },

  l2: {
    lblLogin: "//div[@class='header']//a[@class='btn btn--secondary']",
    inputUserName: "#username",
    inputPwd: "#password",
    btnLogin: "//div[@class='login-form__item']//span[text()='Đăng nhập']",
    iconMode: "//div[@class='header-option']/div[1]",
    iconMobile:
      "//div[@class='header-option']/div[1]/div//span[text()='Mobile']",
    logoBet: "//div[@gtag='lobby_Casino']",
    iconGame: "//span[text()='Vgaming']",
  },
};

test(`${projectCode} - Smoke Test Games Locations and navigation on Member Site`, async ({
  browser,
}) => {
  const locator = projectCode == "SG" ? cfgLocator.l1 : cfgLocator.l2;
  const lstGames = projectCode == "SG" ? cfgGameNames.l1 : cfgGameNames.l2;
  await allure.suite(
    `${projectCode}-Smoke Test Games Locations and navigation on Member Site`
  );
  const context = await browser.newContext();
  const page = await context.newPage();
  const project = process.env.npm_config_project ?? "l1";
  await goToGamePage(page, locator, envConfig, project);

  await test.step("Verify all games are displayed at correct location", async () => {
    const gameNames = await getGameNames(page);
    expect(gameNames).toEqual(lstGames);
  });

  await test.step("Verify All games load successfully", async () => {
    for (const element of lstGames) {
      if (element == "Vgaming" || element == "SABA.games") {
        continue;
      } else {
        console.log(`verify ${element}`);
        const [newtab] = await Promise.all([
          context.waitForEvent("page"),
          await page.click(
            `//div[@class='c-lobby-game-group__content']//div[@data-name='${element}']`
          ),
        ]);

        // New code to check for console errors
        const consoleMessages: string[] = [];
        newtab.on("console", (msg) => {
          consoleMessages.push(msg.text());
        });

        await newtab.waitForLoadState();
        await newtab.waitForTimeout(5000);

        // Check for errors in console messages
        const errorMessages = consoleMessages.filter((msg) =>
          msg.includes("Error")
        );
        expect(
          errorMessages.length,
          `Errors found in console: ${errorMessages.join(", ")}`
        ).toBe(0);

        await newtab.close();
      }
    }
  });
});

const getGameNames = async (page: Page) => {
  const count = await page
    .locator("//div[@class='c-lobby-game-group__content']/div")
    .count();
  const names: string[] = [];
  for (let i = 1; i <= count; i++) {
    const name = await page
      .locator(
        `//div[@class='c-lobby-game-group__content']/div[${i}]/div[1]/div[1]`
      )
      .getAttribute("data-name");
    console.log(i, name);
    names.push(name ?? "");
  }

  return names;
};

const goToGamePage = async (
  page: Page,
  locator: any,
  envConfig: any,
  project: string
) => {
  await page.goto(envConfig[`${project}prod`]);
  const alertDialogSelector = "//div[@class='modal modal--alert']//div[1]/a";
  await page
    .waitForSelector(alertDialogSelector, { timeout: 5000 })
    .catch(() => {
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
  await page.click(locator.logoBet);
  expect(await page.isVisible(locator.iconGame)).toBeTruthy();
  await page.click(locator.iconGame);
  await page.waitForTimeout(5000);
};
