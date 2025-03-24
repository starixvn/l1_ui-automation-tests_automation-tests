import { LuckyBaccaratLocators } from "../luckybaccarat-locators";
import { LuckyBaccaratConfigs } from "../luckybaccarat-configs";
import { Components, SmokeBases } from "sc-automation-core";
import { expect } from "playwright/test";
import  verifyImage from "sc-automation-core/lib/expects/verify-image";

class LuckyBaccaratSmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [LuckyBaccaratConfigs.choices[0]],
      gameConfiguration: LuckyBaccaratConfigs,
      locators: LuckyBaccaratLocators,
      waitBetTimeout: 15000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
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

new LuckyBaccaratSmokeSpec().start();

