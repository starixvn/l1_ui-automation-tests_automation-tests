import { MobiDirectLocators } from "../vip-fishprawncrab-locators";
import { SmokeBases, Components } from "sc-automation-core";
import { VIPFPCConfigs } from "../vip-fishprawncrab-configs";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { expect } from "@playwright/test";
class BaccaratSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: VIPFPCConfigs,
      locators: MobiDirectLocators,
      waitBetTimeout: 12000,
      placeBetChoices: [VIPFPCConfigs.choices[0]],
      snapshotFolderPath: __filename,
      placeBetAmount:   process.env.npm_config_project?.includes("l2") ? 50 : 10
    };

    super(smokeOptions);
  }

  protected hedgeBetTests(): void {
  }

  protected placeBetAndSettleTests(): void {
    Components.test("THEN player able to place a bet and settle", async () => {
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = {
        choice: this.options.placeBetChoices,
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

  protected gameGuideTests(): void {  
  }

}

new BaccaratSmokeSpec().start();
