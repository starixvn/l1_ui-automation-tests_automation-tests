import { BlackJackConfigs } from "../blackjack-configs";
import { E2EBases, Components } from "sc-automation-core";
import { BlackjackLocators } from "./blackjack-locators";
import { expect } from "sc-automation-core/lib/expects";
import { triggerAsyncId } from "async_hooks";

class BlackjackE2ESpec extends E2EBases.CardGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: ["lblChoice1"],
      gameConfiguration: BlackJackConfigs,
      locators: BlackjackLocators,
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
  protected provablyFairTests(): void {
  }
  protected turnbackGame(): void {
  }
  protected returnGameLobby(): void {
    
  }

  protected async isDealer21(endDeal: any): Promise<boolean> {
    console.log(endDeal.dealer.length)
    if(endDeal.dealer.length >  1){
      return true
  }
  else{
      return false
  }
  }

   protected async verifySetlementResults(settledResults: any, betdata: any) {
    console.log(settledResults.playerTotal + "player-dealer" + settledResults.dealerTotal);
        expect(settledResults.totalAmount).toBe(betdata.amount);
        const playerWins = settledResults.playerTotal <= 21 && (settledResults.dealerTotal > 21 || settledResults.playerTotal >= settledResults.dealerTotal);
        console.log(playerWins + "ttt")
        if (playerWins) {
            expect(settledResults.betwin > 0).toBe(true);
        }
        else {
            expect(settledResults.betwin == 0).toBe(true);
        }
  }

}

new BlackjackE2ESpec().start();
