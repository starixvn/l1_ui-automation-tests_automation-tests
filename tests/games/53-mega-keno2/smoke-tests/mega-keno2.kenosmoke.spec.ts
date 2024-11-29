import { KenoLocators } from "../mega-keno2-locators";
import { KenoConfigs } from "../mega-keno2-configs";
import { SmokeBases ,Components} from "sc-automation-core";

let extConfigs = { ...KenoConfigs };
extConfigs.socketName = "gw";

class KenoSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: extConfigs,
      locators: KenoLocators,
      waitBetTimeout: 5000,
      placeBetChoices: extConfigs.choices,
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
          const iframe = await this.game.page.frameLocator("#frmGame");
          await iframe.locator("//div[contains(@class,'game-category_category')][text()='Mega Keno']").click()
          await this.game.waitForTimeout(3000)
          const disconnect = await iframe.locator(this.options.locators.disconectError).isVisible();
          if  (disconnect) {
            await iframe.locator(this.options.locators.reconnectButton).click();
            console.log("Reconnect");
            await this.game.waitForTimeout(3000)
          }
          await this.game.verifyFrameLocatorsVisible("#frmGame",this.options.locators.inGameUI);
      }else{
          await this.game.verifyLocatorsVisible(this.options.locators.inGameUI);
          await this.game.page.reload(); // L1 PRO issue only: need to be reload page for capturing web socket data, by default on framerecived do not have any channel
      }
  });
  }

}

new KenoSmokeSpec().start();
