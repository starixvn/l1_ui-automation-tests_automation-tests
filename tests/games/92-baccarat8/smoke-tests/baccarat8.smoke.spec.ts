import { Baccarat8Locators } from "../baccarat8-locators";
import { Baccarat8Configs } from "../baccarat8-configs"
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "playwright/test";
import  verifyImage from "sc-automation-core/lib/expects/verify-image";


class Baccarat8SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [Baccarat8Configs.choices[0]],
      gameConfiguration: Baccarat8Configs,
      locators: Baccarat8Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 50 : 5,
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

new Baccarat8SmokeSpec().start();
