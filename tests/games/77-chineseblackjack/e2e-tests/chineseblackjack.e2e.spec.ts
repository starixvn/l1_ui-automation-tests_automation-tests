import { ChineseBlackjackConfigs } from "../chineseblackjack-configs";
import { E2EBases, Components } from "sc-automation-core";
import { ChineseBlackjackLocatorsLocators } from "./ChineseBlackjack-locators";
import { expect } from "sc-automation-core/lib/expects";

class ChineseBlackjackE2ESpec extends E2EBases.CardGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: ["lblChoice1"],
      gameConfiguration: ChineseBlackjackConfigs,
      locators: ChineseBlackjackLocatorsLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: ["lblChoice1", "lblChoice2", "lblChoice3"],
      indexTicketHistory: { totalbet: -2, isIdLink: false },
      gameLobbyNavigation: [
        Components.BaseLocator.baseLocatorNames.tabCardGames,
        Components.BaseLocator.baseLocatorNames.icoGame1,
      ],
    };
    super(e2eOptions);
  }
 
  protected runScenario(): void {
    super.runScenario();
  }
  
  protected async verifySetlementResults(settledResults: any, betdata: any) {
    var _a;

    console.log(settledResults.playerTotal + "player-dealer" + settledResults.dealerTotal);
        expect(settledResults.totalAmount).toBe(betdata.amount);
        const playerWins = settledResults.playerTotal <= 21 && settledResults.playerTotal >= 16 &&
            (settledResults.dealerTotal > 21 || settledResults.playerTotal >= settledResults.dealerTotal);
        if (playerWins) {
            expect(settledResults.betwin > 0).toBe(true);
        }
        else {
            expect(settledResults.betwin == 0).toBe(true);
        }
  }
}

new ChineseBlackjackE2ESpec().start();
