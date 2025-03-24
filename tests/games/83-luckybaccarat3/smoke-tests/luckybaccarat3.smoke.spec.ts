import { LuckyBaccarat3Locators } from "../luckybaccarat3-locators";
import { LuckyBaccarat3Configs } from "../luckybaccarat3-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "playwright/test";
import  verifyImage from "sc-automation-core/lib/expects/verify-image";

class LuckyBaccarat3SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [LuckyBaccarat3Configs.choices[0]],
      gameConfiguration: LuckyBaccarat3Configs,
      locators: LuckyBaccarat3Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 30 : 3,
    };
    super(smokeOptions);
  }
  protected inGameDealerTests() {
    Components.test("Ensure player joined game and saw dealer", async () => {
        // Act
        verifyImage(this.game, "imgDealer", 0.05)
    });
  }

  protected ticketHistoryTests() {
    Components.test("Access the history popup.", async () => {
        // Arrange
        const historyPayload = await this.player.openHistory();

        // Act
        const historySnapshot = await this.game.captureHistory();

        await Components.test.step("Verify that the history popup is displayed correctly", async () => {
            // Assert
            expect(historySnapshot.image).toMatchSnapshot(historySnapshot.name);
            await this.game.clickOutSide(3000); //close popup
        });
    });
  }
  protected runScenario(): void {
    this.inGameDealerTests();
    this.ticketHistoryTests();
    this.gameGuideTests();
  }
}

new LuckyBaccarat3SmokeSpec().start();
