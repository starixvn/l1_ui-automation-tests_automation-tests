import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { CandyLandLocators } from "../candy-land-locators";
import { CandyLandConfigs } from "../candy-land-configs";
import { SmokeBases, Components } from "sc-automation-core";

class CandyLandSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [CandyLandConfigs.choices[0]],
      gameConfiguration: CandyLandConfigs,
      locators: CandyLandLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

  protected betStakeLevelTests(): void {
    // no test
  }

  protected placeBetAndSettleTests(): void {
    Components.test("THEN player able to place a bet and settle", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);

      const bet = {
        choice: CandyLandConfigs.choices[0],
        amount: this.options.placeBetAmount ?? 1,
      };
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

      // Act
      const placeBetResponse = await this.player.placeBet(
        bet.choice,
        bet.amount
      );

      await console.log(placeBetResponse);
      await this.game.waitForSettlement();

      // Assert

      expect(placeBetResponse.endBet).toBe(bet.amount * parseFloat(bet.choice));
    });
  }

  protected ticketHistoryTests(): void {
    Components.test("AND player could open history popup", async () => {
      // Arrange
      const historyPayload = await this.player.openHistory();

      // Act
      const historySnapshot = await this.game.captureHistory();

      // Assert
      expect(historyPayload.history.betLogs.length).toBeGreaterThan(0);
      expect(historySnapshot.image).toMatchSnapshot(historySnapshot.name);
      //Close history
      await this.game.clickOutSide();
      await this.game.clickGuide();
      await this.game.clickOutSide();

  });
  }
}

new CandyLandSmokeSpec().start();
