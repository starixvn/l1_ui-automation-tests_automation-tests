import { LuckyBaccarat4Locators } from "../LuckyBaccarat4-locators";
import { LuckyBaccarat4Configs } from "../LuckyBaccarat4-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import verifyImage from "sc-automation-core/lib/expects/verify-image";
const extraRate = 0.2;

class LuckyBaccarat4SmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [LuckyBaccarat4Configs.choices[0]],
      gameConfiguration: LuckyBaccarat4Configs,
      locators: LuckyBaccarat4Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 20 : 2,
    };
    super(smokeOptions);
  }
  protected inGameOddsTests(): void {
    Components.test("AND odds should be correct", async () => {
      // Assert
      await this.game.waitUntilGameUiLoad();
      expect(this.game.odds).toStrictEqual(this.options.gameConfiguration.odds);
  });
  }
  protected inGameDealerTests(): void {
  }
  protected placeBetAndSettleTests(): void {
    Components.test("THEN player able to place a bet and settle", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1};
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
             
      // Act 
      await this.game.waitUntilPlaceBet();
      await this.game.waitForTimeout(2000)
      const placeBetResponse = await this.player.betOn(bet.choice, bet.amount);
      const settledResults = await this.game.waitForSettlement();

      // Assert
      expect(placeBetResponse.endBet).toBe(bet.amount*(1 + extraRate));
      if (settledResults.settlementResult.tie) {
        expect(settledResults.winAmount).toEqual(bet.amount);
      } else if (settledResults.winStatus){
          expect(settledResults.winAmount).toBeGreaterThanOrEqual(bet.amount*settledResults.odds[bet.choice]);
      } else {
        expect(settledResults.winAmount).toEqual(0);
      }

    });
  }
}

new LuckyBaccarat4SmokeSpec().start();
