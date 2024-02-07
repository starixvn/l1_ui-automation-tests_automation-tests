import { test, expect } from "@playwright/test";
const timeout = 3000;

const domainList = [
  {
    domainName: "taisaba",
    url: "https://www.taisaba.com/",
    imagesCheck: [{control: "[id$=tab-ios]", imageName: "taiSabaIOS.png"},
    {control: "[id$=tab-android]", imageName: "taiSabaAndroid.png"}]
  }
];

const start = () => {
  test.beforeEach(async ({}, testInfo) => {
    testInfo.snapshotPath = (name: string) => {
      return `${__filename}-snapshots/${name}`;
    };
  });

  test.describe.parallel(`Health Checking`, () => {
    runScenario();
  });

  test.afterAll(async ({ browser }) => {
    await browser.close();
  });
};

const healthCheck = (domain: any) => {
  test(`Verify that ${domain.domainName} page was loaded successfully @TC_01`, async ({
    page,
  }) => {
    await page.goto(domain.url);
    await page.setViewportSize({width: 1084,height: 2000});
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(timeout);
    for (const iterator of domain.imagesCheck) {
      await page.click(iterator.control)
      await page.waitForLoadState("domcontentloaded");
      expect(await page.screenshot({ path: `screenshots/${iterator.imageName}`, fullPage: true })).toMatchSnapshot(iterator.imageName, { maxDiffPixelRatio: 0.05 });
    }
  });
};

const runScenario = async () => {
  domainList.forEach((domain) => {
    healthCheck(domain);
  });
};

start();
