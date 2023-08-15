import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { VIPFPCLocators } from "../vip-fishprawncrab-locators";
import { VIPFPCConfigs } from "../vip-fishprawncrab-configs";
import { SmokeBases, Components } from "sc-automation-core";

class VIPFPCSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [VIPFPCConfigs.choices[7]],
      gameConfiguration: VIPFPCConfigs,
<<<<<<< HEAD
      placeBetAmount: process.env.npm_config_project === "vg" ? 50 : 10,
=======
      placeBetAmount: process.env.npm_config_project === "l2" ? 50 : 10,
>>>>>>> master
      locators: VIPFPCLocators,
      waitBetTimeout: 12000,
      snapshotFolderPath: __filename,
    };

    super(smokeOptions);
  }

  protected placeBetAndSettleTests(): void {
    Components.test("THEN player able to place a bet and settle", async () => {
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = {
        choice: this.options.placeBetChoices[0],
        amount: this.options.placeBetAmount ?? 1,
      };
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

      // Act
      const placeBetResponse = await this.player.placeBet(
        bet.choice,
        bet.amount
      );
      const settledResults = await this.game.waitForSettlement();

      // Assert
      expect(placeBetResponse.endBet).toBe(bet.amount);
      expect(settledResults.settlementResult).toMatchBetOptions(
        this.options.gameConfiguration.choices
      );
    });
  }
}

new VIPFPCSmokeSpec().start();
