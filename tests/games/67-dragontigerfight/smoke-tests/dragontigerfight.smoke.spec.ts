import { DragonTigerLocators } from "../dragontigerfight-locators";
import { DragonTigerConfigs } from "../dragontigerfight-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { expect } from "@playwright/test";

class DragonTigerSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [DragonTigerConfigs.choices[0]],
      gameConfiguration: DragonTigerConfigs,
      locators: DragonTigerLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected placeBetAndSettleTests(): void {
    Components.test("THEN player able to place a bet and settle", async () => {
      const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1 };
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

      // Act
      await this.player.placeBet(bet.choice, bet.amount);
      const settledResults = await this.game.waitForSettlement();

      // Assert
      expect(settledResults.settlementResult).toMatchBetOptions(this.options.gameConfiguration.choices);
      expect(bet).toMatchWinning(settledResults);
    });
  }

}


new DragonTigerSmokeSpec().start();
