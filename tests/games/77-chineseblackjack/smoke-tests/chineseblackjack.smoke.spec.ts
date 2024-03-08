import { ChineseBlackjackLocators } from "../chineseblackjack-locators";
import { ChineseBlackjackConfigs } from "../chineseblackjack-configs";
import { SmokeBases, Components} from "sc-automation-core";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { expect } from "@playwright/test";

class ChineseBlackjackSmokeSpec extends SmokeBases.CardGameBase {
  /**
   *
   * 
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [
        ChineseBlackjackConfigs.choices[0],
        ChineseBlackjackConfigs.choices[1],
        ChineseBlackjackConfigs.choices[2],
      ],
      gameConfiguration: ChineseBlackjackConfigs,
      locators: ChineseBlackjackLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected placeBetAndSettleTests(): void {
    Components.test("THEN player able to place a bet and settle", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1 };
      this.game.attachSocketAndCaptureEvent(GameEvent.Deal);
      this.game.attachSocketAndCaptureEvent(GameEvent.Stand);

      // Act
      const placebetdeal = await this.player.placeBet(bet.choice, bet.amount);
      await this.game.waitForTimeout(6000);
      await this.game.clickLocator("standcard");
      await this.game.clickLocator("btnConfirmStand");
      const settledResults = await this.game.latestCaptureEvent(GameEvent.Stand);

      // Assert
      expect(settledResults.stand.pos).toBe(parseInt(bet.choice));
      expect(settledResults.stand.bet).toBe(bet.amount);
      expect(placebetdeal.deal.hands[0].bet).toBe(bet.amount);
      expect(placebetdeal.deal.hands[0].pos).toBe(parseInt(bet.choice));
  });
  }
}

new ChineseBlackjackSmokeSpec().start();
