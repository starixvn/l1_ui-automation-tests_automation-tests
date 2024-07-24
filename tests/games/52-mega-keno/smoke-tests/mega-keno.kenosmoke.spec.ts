import { KenoLocators } from "../mega-keno-locators";
import { MegaKenoConfigs } from "../mega-keno-configs";
import { SmokeBases, Components } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: MegaKenoConfigs,
      locators: KenoLocators,
      waitBetTimeout: 1000,
      placeBetChoices: MegaKenoConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }

  protected inGameUITests(): void {
    Components.test("Verify Game Name and Bet Locators", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      await this.game.waitForTimeout(this.options.waitBetTimeout);
      const isFrame = await this.game.page.$("#frmGame")
      if (isFrame) {
          await this.game.page.frameLocator("#frmGame").locator("//div[contains(@class,'game-category_category')][text()='Mega Keno']").click()
          await this.game.waitForTimeout(3000)
          await this.game.verifyFrameLocatorsVisible("#frmGame",this.options.locators.inGameUI);
      }else{
          await this.game.verifyLocatorsVisible(this.options.locators.inGameUI);
          await this.game.page.reload(); // L1 PRO issue only: need to be reload page for capturing web socket data, by default on framerecived do not have any channel
      }
  });
  }
}

new SedieSmokeSpec().start();
