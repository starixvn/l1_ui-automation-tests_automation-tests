import { KenoLocators } from "../keno-power-locators";
import { KenoSoccerConfigs } from "../keno-power-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";

let extConfigs = { ...KenoSoccerConfigs };
extConfigs.socketName = "kenopower";

class KenoSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: extConfigs,
      locators: KenoLocators,
      waitBetTimeout: 5000,
      placeBetChoices: ["blue","red"],
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
  
  protected hedgeBetTests() {
    Components.test("Attempt to place a bet that would result in a hedged position.", async () => {
        // Arrange
        Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
        const hedgeBetLocators = [
            this.options.locators.betchoices[this.options.placeBetChoices[1]],
            this.options.locators.betchoices[this.options.placeBetChoices[0]],
        ];
        // Act
        await this.player.mbPlaceHedgeBet(hedgeBetLocators, this.options.placeBetAmount ?? 1);
        const hedgeBetError = this.options.locators.hedgeBetError;
        await Components.test.step("Verify that an error message is displayed to prevent the bet from being placed.", async () => {
            const isFrame = await this.game.page.$("#frmGame");
            if (isFrame) {
                const framelocator = this.game.page.frameLocator("#frmGame");
                await expect(framelocator.locator(Object.keys(hedgeBetError).toString())).toContainText(Object.values(hedgeBetError));
            } else {
                await expect(this.game.page.locator(Object.keys(hedgeBetError).toString())).toContainText(Object.values(hedgeBetError));
            }
        });
    });
}

}

new KenoSmokeSpec().start();
