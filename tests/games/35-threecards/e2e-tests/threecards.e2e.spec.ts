import { ThreeCardsConfigs } from "../ThreeCards-configs";
import { E2EBases, Components } from "sc-automation-core";
import { ThreeCardsLocators } from "./ThreeCards-locators";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { expect } from "@playwright/test";

class ThreeCardsE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: ThreeCardsConfigs.choices,
      gameConfiguration: ThreeCardsConfigs,
      locators: ThreeCardsLocators,
      waitBetTimeout: 7500,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: ["red", "diamonds", "hearts", "spades", "clubs"],
      barItems: ["red","black"],       
      historyItems : {
        roundid: "phien",
        betamount: "black",
        betwin: "betwin"
    },
    };
    super(e2eOptions);
  }
  protected turnbackGame(): void {
  }
  protected returnGameLobby(): void {
  }
  protected jackPotBanner(): void {
  }
  protected multipleBetChoices() {
    Components.test("Verify player able to placebet multiple choices in 1 round @Settlement03", async () => {
        // Arrange
        Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
        this.game.attachSocketAndCaptureEvent(GameEvent.OwnBets);
        this.game.attachSocketAndCaptureEvent(GameEvent.Settlement);
        this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
        let betChoices: any = this.options.multiPlaceBetChoices;
        const amount = this.options.placeBetAmount ?? 1;
        await this.game.waitUntilPlaceBet();
        await this.game.waitForTimeout(3000);
        for (const iterator of betChoices) {
            await this.game.clickToChoice(iterator);
            await this.game.waitForTimeout(800);
        }

        // Act
        let ownBets = await this.game.latestCaptureEvent(GameEvent.OwnBets);

        const settledResults = await this.game.waitForSettlement();
        let calWinAmount = 0;
        // Assert
        for (const iterator of betChoices) {
            //tie refund rule only apply for main choices
            const bet =
                settledResults.settlementResult.tie === true && !this.options.gameConfiguration.hedgeBetGroups.includes(iterator)
                    ? { choice: iterator, amount: (this.options.placeBetAmount as number) / 2 ?? 0.5 }
                    : { choice: iterator, amount: this.options.placeBetAmount ?? 1 };
            expect(ownBets.ownBets[iterator]).toBe(amount);
            let odds = settledResults.settlementResult[iterator] ? settledResults.odds[iterator] : 0;
            calWinAmount += bet.amount * odds;
        }
        expect(calWinAmount).toBeCloseTo(settledResults.winAmount, 5);
    });
}
}

new ThreeCardsE2ESpec().start();

