import { test, expect } from "@playwright/test";

const domain = {
  taiSaBaURL : "https://www.taisaba.com/"
};
const timeout = 3000;
const locators = {
  androidTab : `[id$=tab-android]`
};

const start = () =>{
  test.beforeEach(async ({}, testInfo) => {
      testInfo.snapshotPath = (name: string) => {
          return `${__filename}-snapshots/${name}`;
      };
  });

  test.describe.parallel(`Tai Saba site testing`, () => {
      runScenario();
  });

  test.afterAll(async ({ browser }) => {
      await browser.close();
  });
};

const taiSabaTests = () => {
  test(`Verify that TaiSaba page was loaded successfully in iOS tab`, async ({ page }) =>   {
    await page.goto(domain.taiSaBaURL);
    await page.setViewportSize({
      width: 1084,
      height: 2000,
    });
    await page.waitForLoadState('load');
    await page.waitForTimeout(timeout);
    expect
      (await page.screenshot({ path: `screenshots/taiSabaIOS.png`, fullPage: true }))
      .toMatchSnapshot(`taiSabaIOS.png`, { maxDiffPixelRatio: 0.05 });

  });

  test(`Verify that TaiSaba page was loaded successfully in android tab`, async ({ page }) =>   {
    await page.goto(domain.taiSaBaURL);
    await page.setViewportSize({
      width: 1084,
      height: 2000,
    });
    await page.click(locators.androidTab);
    await page.waitForLoadState('load');
    await page.waitForTimeout(timeout);
    expect
      (await page.screenshot({ path: `screenshots/taiSabaAndroid.png`, fullPage: true }))
      .toMatchSnapshot(`taiSabaAndroid.png`, { maxDiffPixelRatio: 0.05 });

  });
};

const runScenario = async () => {
  taiSabaTests();
};

start();

