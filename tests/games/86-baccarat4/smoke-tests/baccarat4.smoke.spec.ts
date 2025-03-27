import { Baccarat4Locators } from "../baccarat4-locators";
import { Baccarat4Configs } from "../baccarat4-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "playwright/test";
import  verifyImage from "sc-automation-core/lib/expects/verify-image";

class Baccarat4SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [Baccarat4Configs.choices[0]],
      gameConfiguration: Baccarat4Configs,
      locators: Baccarat4Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 50 : 5,
    };
    super(smokeOptions);
  }
  protected inGameDealerTests() {
    Components.test("Ensure player joined game and saw dealer", async () => {
        // Act
        await this.game.waitForTimeout(5000)
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

new Baccarat4SmokeSpec().start();
