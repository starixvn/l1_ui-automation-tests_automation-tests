import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { wukongsrevengeLocators } from "../wukongsrevenge-locators";
import { wukongsrevengeConfigs } from "../wukongsrevenge-configs";
import { SmokeBases, Components } from "sc-automation-core";

class wukongsrevengeSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [wukongsrevengeConfigs.choices[0]],
      gameConfiguration: wukongsrevengeConfigs,
      locators: wukongsrevengeLocators,
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
        choice: wukongsrevengeConfigs.choices[0],
        amount: this.options.placeBetAmount ?? 1,
      };
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

      // Act
      const placeBetResponse = await this.player.placeBet(
        bet.choice,
        bet.amount
      );

      await this.game.waitForSettlement();

      // Assert

      expect(placeBetResponse.endBet).toBe(bet.amount * parseFloat(bet.choice));
    });
  }

  protected inGameOddsTests(): void {
    Components.test("Ensure that the odds displayed for each bet choice are accurate.", async () => {
      await Components.test.step("Ensure that the odds displayed for each bet choice are accurate.", async () => {
        await this.game.waitForTimeout(2000)
          // Assert
          expect(this.game.odds).toStrictEqual(this.options.gameConfiguration.odds);
      });
  });
  }
}

new wukongsrevengeSmokeSpec().start();
