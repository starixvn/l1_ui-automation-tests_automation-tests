import { PusoyLocators } from "../Pusoy-locators";
import { PusoyConfigs } from "../Pusoy-configs";
import { SmokeBases, Components } from "sc-automation-core";
import  verifyImage from "sc-automation-core/lib/expects/verify-image";

class PusoySmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: PusoyConfigs,
      locators: PusoyLocators,
      waitBetTimeout: 7000,
      placeBetChoices: [PusoyConfigs.choices[0]],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }
  protected runScenario(): void {
    this.joinGameTests();
    this.gameGuideTests();
  }

  protected joinGameTests() {
    Components.test("Verify introduce section", async () => {
      await verifyImage(this.game, `popIntroduce`);
      await this.game.clickLocator(`btnOkAndDontShowAgain`)
    });

    Components.test("Verify that cards are dealed", async () => {
        // Arrange
        Components.test.setTimeout(this.options.gameConfiguration.maxTimeout*2);
        await this.game.waitForEvent(`startDeal`);
    });

    Components.test("Verify main UI of game", async () => {
      // Arrange
      await this.game.waitForTimeout(5000); //wait for deal cards
      await verifyImage(this.game, `btnSwitch`)
      await verifyImage(this.game, `btnReady`)
      await this.game.clickLocator(`btnReady`)
      await verifyImage(this.game, `lblPlayForFun`)
      // await this.game.clickLocator(`btnReal`)
      // await verifyImage(this.game, `popPlayForFun`)
      // await this.game.clickLocator(`btnOK`)
      // await verifyImage(this.game, `lblPlayForFun`)
  });

}
}

new PusoySmokeSpec().start();
