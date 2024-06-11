import { FootballSpinLocators } from "../footballspin-locators";
import { FootballSpinConfigs } from "../footballspin-configs";
import { Components, SmokeBases } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";

class FootballSpinSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: FootballSpinConfigs,
      placeBetChoices: [FootballSpinConfigs.choices[0]],
      waitBetTimeout: 22000,
      locators: FootballSpinLocators,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }
  protected override inGameDealerTests(): void {}

  protected placeBetAndSettleTests(): void {
    Components.test("THEN player able to place a bet and settle", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1};
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
           
      // Act 
      await this.game.waitUntilPlaceBet()
      await this.game.waitForTimeout(this.options.gameConfiguration.durations.wholeRound - this.options.gameConfiguration.durations.placingBets )
      const placeBetResponse = await this.player.betOn(bet.choice, bet.amount);
      const settledResults = await this.game.waitForSettlement();

      // Assert
      expect(placeBetResponse.endBet).toBe(bet.amount);
      expect(settledResults.settlementResult).toMatchBetOptions(this.options.gameConfiguration.choices);
      expect(bet).toMatchWinning(settledResults);

    });
  }

  protected hedgeBetTests(): void {
    Components.test("THEN player should get error when they hedge their bets", async () => {
      // Arrange
      const { maxTimeout, hedgeBetGroups,durations } = this.options.gameConfiguration;
      Components.test.setTimeout(maxTimeout);

      // Act
      await this.game.waitUntilNextRound()
      await this.game.waitForTimeout(durations.wholeRound - durations.placingBets )
      await this.game.waitForTimeout(3000)

      await this.player.betOn(hedgeBetGroups[0][0], this.options.placeBetAmount ?? 1);
      await this.player.betOn(hedgeBetGroups[0][1], this.options.placeBetAmount ?? 1);
      const error = await this.game.captureErrorMessage();

      // Assert
      expect(error.image).toMatchSnapshot(error.name, { maxDiffPixelRatio: 0.3 });
  });
  }


}

new FootballSpinSmokeSpec().start();
