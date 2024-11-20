import { CasinoHoldemPokerConfigs } from "../casino-holdem-poker-configs";
import { E2EBases, Components } from "sc-automation-core";
import { CasinoHoldemPokerLocatorsLocators } from "./casino-holdem-poker-locators";
import { expect } from "sc-automation-core/lib/expects";
import  verifyImage from "sc-automation-core/lib/expects/verify-image";
import { GameEvent } from "sc-automation-core/lib/_shared";

class CasinoHoldemPokerE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: ["ante", "AA", "call"],
      gameConfiguration: CasinoHoldemPokerConfigs,
      locators: CasinoHoldemPokerLocatorsLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: [],
      historyItems : {
        roundid: "roundId",
        betamount: "stake",
        betwin: "betWin"
    },
    };
    super(e2eOptions);
  }
  
  protected inGameUiTests(): void {
    Components.test("Verify UI of table game", async () => {
      await verifyImage(this.game, 'imgMessage')
      await verifyImage(this.game, 'imgAnte')
      await verifyImage(this.game, 'imgAA')
      await verifyImage(this.game, 'imgBetChoices')
      await verifyImage(this.game, 'imgMD5')
      await verifyImage(this.game, `imgDefaultChipBar${process.env.npm_config_project}`)
  });
  }
  protected gamePlayButtonsTests() {
    Components.test("Verify button Deal and Cancel @UI04", async () => {
        // Act
        await this.game.clickLocator('anteChoice'),
        //Assert
        await verifyImage(this.game, 'btnCancel')
        await verifyImage(this.game, 'btnDeal')
        await verifyImage(this.game, 'btnDouble')
    });

    Components.test("Verify button swap cards and hold cards @UI05", async () => {
        // Act
        await this.game.clickLocator('btnDeal', 8000)
        //Assert
        await verifyImage(this.game, 'btnSwapCards');
        await verifyImage(this.game, 'btnHoldCards');
    });
    
    Components.test("Verify button Call and Fold @UI06", async () => {
        //Assert
        await this.game.clickLocator('btnHoldCards', 5000)
        await verifyImage(this.game, 'btnCall');
        await verifyImage(this.game, 'btnFold');
    });

    Components.test("Verify button Rebet and New Bet @UI07", async () => {
        // Act
        await this.game.clickLocator('btnCall', 10000); 
        await verifyImage(this.game, 'btnRebet');
        await verifyImage(this.game, 'btnNewbet');
        await this.game.clickLocator('btnNewbet', 3000); 
    });
  }

  protected placeBetAndSettleTests(): void {
    Components.test("THEN player able to place a bet Ante and settle", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = {
        choice: this.options.placeBetChoices[0],
        amount: this.options.placeBetAmount ?? 1,
      };
      this.game.attachSocketAndCaptureEvent(GameEvent.Deal);

      // Act
      const placebetdeal = await this.player.placeBet(bet.choice, bet.amount)
      
      
      let result = await followCardAndSettle(this.game);
      

      // Assert
      expect(placebetdeal.deal.totalAmount).toBe(bet.amount);
      expect(placebetdeal.deal.choices[bet.choice]).toBe(bet.amount);
      expect(result.endBet).toBe(bet.amount * 3);
      expect(result.choices[bet.choice]).toBe(bet.amount);
      const settlementResult = await this.game.latestCaptureEvent(GameEvent.Settlement);

      const settledata = {
        roundId: placebetdeal.deal.roundId,
        betwin: settlementResult.finish.settlementResult.ante + settlementResult.finish.settlementResult.call,
        bet: bet.amount * 3,
    };
    global.settledata = settledata;
      
    });
  }
  protected runScenario(): void {
    this.inGameUiTests();
    this.gamePlayButtonsTests();
    this.placeBetAndSettleTests();
    this.betHistory.tests();
    this.gameGuides.tests(this.options.gameConfiguration.maxTimeout);
  }
}

new CasinoHoldemPokerE2ESpec().start();

const followCardAndSettle = async (game: any) => {
  await game.attachSocketAndCaptureEvent(GameEvent.EndBet);
  await game.attachSocketAndCaptureEvent(GameEvent.Settlement);
  await game.waitForTimeout(8000);
  await game.clickLocator("standcard",10000);
  await game.clickLocator("followcard",5000);
  await game.waitForTimeout();
  let endbet = await game.latestCaptureEvent(GameEvent.EndBet);
  let settledResults = {
    endBet: endbet?.call.totalAmount,
    choices: endbet?.call.choices,
  };

  return settledResults;
};


