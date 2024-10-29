import { dragonballLocators } from "../dragonball-locators";
import { dragonballConfigs } from "../dragonball-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect, Page } from "@playwright/test";
import { GuideLocator } from "sc-automation-core/lib/game-components/guides/guides-locators"
import verifyImage from "sc-automation-core/lib/expects/verify-image";
import { formatScreenshotFile } from "sc-automation-core/lib/_shared";
const isJackpot = true


class dragonballSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: dragonballConfigs,
      locators: dragonballLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      isJackpot : process.env.npm_config_project === "l2" ? true : false,
    };
    super(smokeOptions);
  }
  // protected gameGuideTests(): void {
  //   if (process.env.npm_config_project === "l2"){
  //     this.gameGuides.tests(this.options.gameConfiguration.maxTimeout);
  //   }
  //   else {
  //       Components.test(`Verify that player could open guide and clarify appropriate content @Guide`, async () => {
  //           // Arrange
  //           await Components.test.step("Open game guide", async () => {
  //               await this.game.clickGuide(10000, isJackpot);
  //           });

  //           // Act
  //           await Components.test.step("Verify guide content", async () => {
  //               await this.captureGuideContent();
  //           });

  //           //Post-Act
  //           await Components.test.step("Click outside to close game guide", async () => {
  //               await this.game.clickOutSide(2000);
  //           });
  //       });
  //   }
  // }
  protected runScenario(): void {
    this.gameGuideTests();
  }
  async captureGuideContent() {
    let guidepages = await this.game.getCountFrameLocator(GuideLocator.xpathItem);
    if (guidepages == 0){ //reopen guide if guide hasn't been load
        await this.game.clickOutSide(2000);
        await this.game.clickGuide(10000, isJackpot);
        guidepages = await this.game.getCountFrameLocator(GuideLocator.xpathItem);
    }
    expect(guidepages).toBeGreaterThan(0);
    for (let index = 1; index <= guidepages; index++) {
        const filename = isJackpot == true ? `guide-JP-${index}` : `guide-${index}`
        const element = `${GuideLocator.xpathItem}[${index}]`;
        await this.snapshot(this.game.page, filename, element);
        await verifyImage(this.game, filename, 0.03)
    }

  }

  async snapshot(page: Page, name : string, element: string) {
    //const imageName = formatName(name);
    let root:any = page;
    if (await page.frameLocator('#frmGame').frameLocator('#microsite').frameLocator('#webview').locator(`${GuideLocator.xpathItem}[1]`).isVisible()){
        root =  page.frameLocator('#frmGame').frameLocator('#microsite').frameLocator('#webview');
    } 
    else if (await page.frameLocator('#frmGame').frameLocator('iframe').locator(`${GuideLocator.xpathItem}[1]`).isVisible()){
        root = page.frameLocator('#frmGame').frameLocator('iframe');
    }          
    else if (await page.frameLocator("iframe").frameLocator("#webview").locator(`${GuideLocator.xpathItem}[1]`).isVisible()){
        root = page.frameLocator("iframe").frameLocator("#webview")
    }
    else {
        root = page.frameLocator("iframe")
    }
    await root.locator(element).screenshot({ path: formatScreenshotFile(name)});
}
}

new dragonballSmokeSpec().start();
