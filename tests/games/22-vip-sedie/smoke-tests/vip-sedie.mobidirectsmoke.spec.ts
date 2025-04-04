import {
  MobiDirectLocators,
  L2MobiDirectLocators,
} from "../vip-sedie-locators";
import { VipSedieConfigs } from "../vip-sedie-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "sc-automation-core/lib/expects";

class VipSedieSmokeSpec extends SmokeBases.MiniGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: VipSedieConfigs,
      locators: process.env.npm_config_project?.includes("l2")
        ? L2MobiDirectLocators
        : MobiDirectLocators,
      waitBetTimeout: 9000,
      placeBetChoices: ["odd", "even"],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 50 : 10,
    };

    super(smokeOptions);
  }
  protected inGameBetChoiceTests(): void {}

  protected gameGuideTests(): void {}

  protected ticketHistoryTests(): void {
    Components.test("Access the history popup.", async () => {
      // Arrange
      const historyPayload = await this.player.openHistory();

      // Act

      await Components.test.step(
        "Verify that the history popup is displayed correctly and contains accurate betting history information.",
        async () => {
          // Assert
          expect(historyPayload.history.betLogs.length).toBeGreaterThan(0);
          await this.game.clickOutSide(3000); //close popup
        }
      );
    });
  }
}

new VipSedieSmokeSpec().start();
