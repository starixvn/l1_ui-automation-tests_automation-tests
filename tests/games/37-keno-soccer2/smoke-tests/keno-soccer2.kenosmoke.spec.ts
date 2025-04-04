import { KenoLocators } from "../keno-soccer2-locators";
import { KenoSoccer2Configs } from "../keno-soccer2-configs";
import { SmokeBases, Components } from "sc-automation-core";

let extConfigs = { ...KenoSoccer2Configs };
extConfigs.socketName = "kenomatch";

class KenoSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: extConfigs,
      locators: KenoLocators,
      waitBetTimeout: 5000,
      placeBetChoices: ["over"],
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
          await this.game.page.frameLocator("#frmGame").locator("//div[contains(@class,'game-category_category')][text()='Power Keno']").click()
          await this.game.waitForTimeout(3000)
          const iframe = await this.game.page.frameLocator("#frmGame");
          const disconnect = await iframe.locator(this.options.locators.disconectError).isVisible();
          if  (disconnect) {
            await iframe.locator(this.options.locators.reconnectButton).click();
            await this.game.waitForTimeout(3000)
          }
          await this.game.verifyFrameLocatorsVisible("#frmGame",this.options.locators.inGameUI);
      }else{
        await this.game.page.locator("//div[contains(@class,'game-category_category')][text()='Power Keno']").click()
        await this.game.waitForTimeout(4000)
          await this.game.verifyLocatorsVisible(this.options.locators.inGameUI);
          await this.game.page.reload(); // L1 PRO issue only: need to be reload page for capturing web socket data, by default on framerecived do not have any channel
      }
  });
  }
  protected hedgeBetTests(): void {
  }
}

new KenoSmokeSpec().start();
