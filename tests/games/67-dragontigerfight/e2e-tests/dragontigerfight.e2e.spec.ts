import { DragonTigerConfigs } from "../dragontigerfight-configs";
import { E2EBases, Components } from "sc-automation-core";
import { DragonTigerFightLocators } from "./dragontigerfight-locators";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";

class DragonTigerFightE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: DragonTigerConfigs.choices,
      gameConfiguration: DragonTigerConfigs,
      locators: DragonTigerFightLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: DragonTigerConfigs.choices.slice(2),
      indexTicketHistory: { totalbet: -2, isIdLink: true },
      gameLobbyNavigation: [
        Components.BaseLocator.baseLocatorNames.tabCardGames,
        Components.BaseLocator.baseLocatorNames.icoGame1,
      ],
      barItems: ["dragon","tiger","tie"],          
      historyItems : {
        roundid: "phien",
        betamount: "totalAmount",
        betwin: "betwin"
    },
    };
    super(e2eOptions);
  }
  protected returnGameLobby(): void {
  }
  protected turnbackGame(): void {
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
            const bet = { choice: iterator, amount: this.options.placeBetAmount ?? 1 };
            expect(ownBets.ownBets[iterator]).toBe(amount);
            let odds = settledResults.settlementResult[iterator] ? settledResults.odds[iterator] : 0;
            calWinAmount += bet.amount * odds;
        }
        expect(calWinAmount).toBe(settledResults.winAmount);
    });
}

}

new DragonTigerFightE2ESpec().start();
