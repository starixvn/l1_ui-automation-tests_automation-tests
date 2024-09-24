import { BlackJackLocators } from "../blackjack-locators";
import { BlackJackConfigs } from "../blackjack-configs";
import { SmokeBases,Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";

class BlackJackSmokeSpec extends SmokeBases.CardGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [
        BlackJackConfigs.choices[0],
        BlackJackConfigs.choices[1],
        BlackJackConfigs.choices[2],
      ],
      gameConfiguration: BlackJackConfigs,
      locators: BlackJackLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected inGameBetChoiceTests(): void {
    Components.test("AND bet choices should be displayed on table", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      await this.game.waitForTimeout(this.options.waitBetTimeout);
      await this.game.clickLocator("cancelbet",5000)
      await this.game.clickLocator("cancelbet",5000)
      for (const placeBetChoice of this.options.placeBetChoices) {
          // Act
          const betChoice = await this.game.captureChoice(placeBetChoice);

          // Assert
          expect(betChoice.image).toMatchSnapshot(betChoice.name);
      }
  });
  }

  protected placeBetAndSettleTests() {
    Components.test("THEN player able to place a bet and settle", async () => {
        // Arrange
        Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
        const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1 };
        this.game.attachSocketAndCaptureEvent(GameEvent.Deal);

        // Act
        const placebetdeal = await this.player.placeBet(bet.choice, bet.amount);
        let endDeal = await this.game.latestCaptureEvent(GameEvent.Deal).deal;
        const isDealerBlackjack = endDeal.dealer.length == 1 ? false : true;
        const playertotal = Math.max(endDeal.hands[0].total[0], endDeal.hands[0].total[1] ?? 0);

        // Assert
        expect(placebetdeal.deal.hands[0].bet).toBe(bet.amount);
        expect(placebetdeal.deal.hands[0].pos).toBe(parseInt(bet.choice));
      
        if (isDealerBlackjack == false && playertotal < 21){
            const settledResults = await this.player.standCard();
            expect(settledResults.stand.pos).toBe(parseInt(bet.choice));
            expect(settledResults.stand.bet).toBe(bet.amount);
        }
    });
}
}

new BlackJackSmokeSpec().start();
