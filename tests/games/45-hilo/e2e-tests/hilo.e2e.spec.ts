import { HiLoConfigs } from "../hilo-configs";
import { E2EBases, Components } from "sc-automation-core";
import { HiloLocatorsLocators } from "./hilo-locators";
import { expect } from "sc-automation-core/lib/expects";
import  verifyImage from "sc-automation-core/lib/expects/verify-image";
import { GameEvent } from "sc-automation-core/lib/_shared";

class TexasHoldemPokerE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: ["hi"],
      gameConfiguration: HiLoConfigs,
      locators: HiloLocatorsLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: [],
      historyItems : {
        roundid: "id",
        betamount: "amount",
        betwin: "betwin"
    },
    };
    super(e2eOptions);
  }
  
  protected inGameUiTests(): void {
    Components.test("Verify UI of table game @UI01", async () => {
      await verifyImage(this.game, 'imgGameUI')
      await verifyImage(this.game, 'imgStart', 0.08)
      await verifyImage(this.game, 'icoHistory')
      await verifyImage(this.game, 'icoCloseGame')
      await verifyImage(this.game, 'icoGameGuide')
      await verifyImage(this.game, `imgDefaultChipBar${process.env.npm_config_project}`)
      await this.game.clickLocator("startbet",2000);
      await verifyImage(this.game, 'btnCollectDisable')
      await this.game.clickLocator("hiChoice");
      await this.game.clickLocator("loChoice", 2000);
      await this.game.clickLocator("collect", 2000);
      await verifyImage(this.game, 'imgGameUI')
  });
  }

  protected placeBetAndSettleTests(): void {
    Components.test("Verify that player able to place a bet and settle", async () => {
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = {
        choice: this.options.placeBetChoices[0],
        amount: this.options.placeBetAmount ?? 1,
      };

      // Act
      const settledResults = await placeBethilo(
        this.game,
        bet.choice,
        bet.amount
      );
      
      // // Assert
      expect(settledResults.endBet).toBe(bet.amount);

      const settledata = {
        roundId: settledResults.roundId,
        betwin: settledResults.winAmount,
        bet: bet.amount
      };
      global.settledata = settledata;
    });
  }
  protected runScenario(): void {
    this.inGameUiTests();
    this.placeBetAndSettleTests();
    this.betHistory.tests();
    this.gameGuides.tests(this.options.gameConfiguration.maxTimeout);
  }
}

new TexasHoldemPokerE2ESpec().start();

const placeBethilo = async (game: any, choice: string, amount: number) => {
  await game.attachSocketAndCaptureEvent(GameEvent.EndDeal);
  await game.clickLocator("stake" + amount);
  await game.clickLocator("startbet",2000);
  await game.clickLocator(choice + "Choice",1000);
  await game.clickLocator('lo' + "Choice",2000); // click multiple choices aim to handle case first card is A
  await game.clickLocator("collect");
  let message = await game.latestCaptureEvent(GameEvent.EndDeal);
  let settledResults = {
    roundId : message?.result?.roundId,
    settlementResult: message?.result?.settlementResult,
    endBet: message?.result?.amount,
    winAmount: message?.result?.betwin,
  };
  return settledResults;
};


