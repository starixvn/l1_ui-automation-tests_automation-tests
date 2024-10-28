import { BigSmallLocators } from "../bigsmall-locators";
import { BigSmallConfigs } from "../bigsmall-configs";
import { SmokeBases, Components} from "sc-automation-core";
import { expect, Page } from "@playwright/test";

import { formatScreenshotFile } from "sc-automation-core/lib/_shared";

import  verifyImage from "sc-automation-core/lib/expects/verify-image";

import { GuideLocator } from "sc-automation-core/lib/game-components/guides/guides-locators";

const projectCode = process.env.npm_config_project ?? "l1"

const isJackpot = process.env.npm_config_jackpot ? true : false
const xpathItem = "xpath=//*[@id='container-guide']//li[@class='guide-item']"

class BigSmallSmokeSpec extends SmokeBases.BalancedBettingGameBase {
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [BigSmallConfigs.choices[0]],
      gameConfiguration: BigSmallConfigs,
      locators: BigSmallLocators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected gameGuideTests(): void {
    Components.test(`Verify that player could open guide and clarify appropriate content @Guide`, async () => {
      // Arrange
      await Components.test.step("Open game guide", async () => {
          await this.game.clickGuide(10000);
      });

      // Act
      await Components.test.step("Verify guide content", async () => {
        await this.captureGuideContent();
    });

      //Post-Act
      await Components.test.step("Click outside to close game guide", async () => {
          await this.game.clickOutSide(2000);
      });
  });

  
  }

  async captureGuideContent() {
    let guidepages = await this.game.getCountFrameLocator(xpathItem);
    if (guidepages == 0){ //reopen guide if guide hasn't been load
        await this.game.clickOutSide(2000);
        await this.game.clickGuide(10000, isJackpot);
        guidepages = await this.game.getCountFrameLocator(xpathItem);
    }
    expect(guidepages).toBeGreaterThan(0);
    for (let index = 1; index <= guidepages; index++) {
        const filename = isJackpot == true ? `guide-JP-${index}` : `guide${projectCode}-${index}`
        const element = `${xpathItem}[${index}]`;
        await this.snapshot(this.game.page, filename, element);
        await verifyImage(this.game, filename, 0.03)
    }

}

  async snapshot(page: Page, name : string, element: string) {
    //const imageName = formatName(name);
    let root:any = page;
    if (await page.frameLocator('#frmGame').frameLocator('#microsite').frameLocator('#webview').locator(`${xpathItem}[1]`).isVisible()){
        root =  page.frameLocator('#frmGame').frameLocator('#microsite').frameLocator('#webview');
    } 
    else if (await page.frameLocator('#frmGame').frameLocator('iframe').locator(`${xpathItem}[1]`).isVisible()){
        root = page.frameLocator('#frmGame').frameLocator('iframe');
    }          
    else if (await page.frameLocator("iframe").frameLocator("#webview").locator(`${xpathItem}[1]`).isVisible()){
        root = page.frameLocator("iframe").frameLocator("#webview")
    }
    else {
        root = page.frameLocator("iframe")
    }
    await root.locator(element).screenshot({ path: formatScreenshotFile(name)});
}

}
new BigSmallSmokeSpec().start();


