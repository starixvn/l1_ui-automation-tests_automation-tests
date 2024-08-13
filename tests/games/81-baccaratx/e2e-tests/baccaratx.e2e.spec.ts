import { BaccaratXConfigs } from "../baccaratx-configs";
import { E2EBases, Components } from "sc-automation-core";
import { BaccaratXLocators } from "./baccaratx-locators";
import { baseLocatorNames } from "sc-automation-core/lib/components/base-game-locator";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { expect } from "sc-automation-core/lib/expects";
import  verifyImage from "sc-automation-core/lib/expects/verify-image";
import { BaseGame } from "sc-automation-core/lib/components";
const extraRate = 0.2;

class BaccaratXE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: BaccaratXConfigs.choices,
      gameConfiguration: BaccaratXConfigs,
      locators: BaccaratXLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: [BaccaratXConfigs.choices[1], BaccaratXConfigs.choices[4], BaccaratXConfigs.choices[3], BaccaratXConfigs.choices[2]],
      indexTicketHistory: { totalbet: -2, isIdLink: false },
      gameLobbyNavigation: [
        Components.BaseLocator.baseLocatorNames.tabOthers,
        Components.BaseLocator.baseLocatorNames.icoGame1,
      ],
    };
    super(e2eOptions);
  }

  protected inGameUiTests(): void {
    Components.test("Verify all bet choices display correctly", async () => {
        await this.game.waitForEvent(GameEvent.Settlement)
        await this.game.waitForTimeout(14500);
        for (const iterator of this.options.placeBetChoices) {
          await verifyImage(this.game, `${iterator}Choice`, 0.05)
        }
    });


    Components.test("Verify main UI of game", async () => {
      await this.game.waitForEvent(GameEvent.StartPlaceBet)
      await Components.test.step("Verify UI of dealer", async () => {
        await verifyImage(this.game, "imgDealer", 0.1)
      });

      await Components.test.step("Verify default state of chip bar", async () => {
        //await verifyImage(this.game, `defaultChipBar${process.env.npm_config_project}`, 0.02);
      });

      await Components.test.step("Verify rebet button is disable", async () => {
        await verifyImage(this.game, `btnRebetDisable`);
      });

      await Components.test.step("Verify table name, min max bet and Extra fee", async () => {
       // await verifyImage(this.game, `imgTableName${process.env.npm_config_project}`);
      });

      await Components.test.step("Verify dealed cards are correct", async () => {
        await this.game.waitForTimeout(2000);
        await verifyImage(this.game, `imgPlayerCards`);
        await verifyImage(this.game, `imgDealerCards`);
        await verifyImage(this.game, `imgCard56`);
      });
      
      // await Components.test.step("Verify UI of card deck", async () => {
      //   await verifyImage(this.game, `imgCardDeck`);
      // });

      await Components.test.step("Verify UI percentage icons", async () => {
        await verifyImage(this.game, `icoPercentagePlayer`);
        await verifyImage(this.game, `icoPercentageBanker`);
        await verifyImage(this.game, `icoPercentageTie`);
      });
    });
    
    Components.test("Verify statistic board", async () => {
      await Components.test.step(`Verify UI of all bet choices in statistic`, async () => {
        for (const iterator of this.options.placeBetChoices) {
          await verifyImage(this.game, `img${iterator}Statiscic`)
        }
      });

      await Components.test.step(`Verify UI of icon expand`, async () => {
        await verifyImage(this.game, `icoExpand`)
      });

      await Components.test.step(`Click on expand icon and verify that the icon switch to collapse`, async () => {
        await this.game.clickLocator(`icoExpand`)
        await verifyImage(this.game, `icoCollapse`)
      });

      await Components.test.step(`Verify UI of icon expand`, async () => {
        await verifyImage(this.game, `txtPlayerExpand`);
        await verifyImage(this.game, `txtBankerExpand`)
      });

      await Components.test.step(`Click on collapse icon and verify that the icon switch to expand`, async () => {
        await this.game.clickLocator(`icoCollapse`)
        await verifyImage(this.game, `icoExpand`)
      });

    });

  }

  protected placeBetAndSettleTests(): void {
    Components.test("Verify that player be able to bet on Player choice", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1 };
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
      let placeBetResponse, roundId, settledResults
      await Components.test.step(`Wait for new round start and place bet`, async () => {
        // Act
        await this.game.waitUntilPlaceBet();
        
        placeBetResponse = await this.player.placeBet(bet.choice, bet.amount);
        roundId = await this.game.getTextLocator(baseLocatorNames.lblRoundIdOnTable, "#0123456789");
      });

      await Components.test.step("Verify own bet and wait for settlement", async () => {
        //await verifyImage(this.game, bet.choice + `Ownbet${process.env.npm_config_project}`)
        settledResults = await this.game.waitForSettlement();
      });

      // Assert
      await Components.test.step("Verify round id, bet amount and settlement result", async () => {
        expect(placeBetResponse.endBet).toBe(bet.amount*(1 + extraRate));
      //handle tie: true
      if (settledResults.settlementResult.tie) {
          expect(settledResults.winAmount).toEqual(bet.amount);
        } else if (settledResults.winStatus){
            expect(settledResults.winAmount).toBeGreaterThanOrEqual(bet.amount*settledResults.odds[bet.choice]);
        } else {
          expect(settledResults.winAmount).toEqual(0);
        }
      expect(roundId.includes(settledResults.roundId)).toBe(true);
      });
  });

  Components.test("Verify that player able to place bet on Banker choice and return settlement data for comparing history ticket detail", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = { choice: this.options.placeBetChoices[1], amount: this.options.placeBetAmount ?? 1 };
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

      // Act
      let placeBetResponse, roundId, settledResults
      await Components.test.step(`Wait for new round start and place bet`, async () => {
        await this.game.waitUntilPlaceBet();
        placeBetResponse = await this.player.placeBet(bet.choice, bet.amount);
        roundId = await this.game.getTextLocator(baseLocatorNames.lblRoundIdOnTable, "#0123456789");
      });

      await Components.test.step("Verify own bet and wait for settlement", async () => {
        await verifyImage(this.game, bet.choice + `Ownbet${process.env.npm_config_project}`)
        settledResults = await this.game.waitForSettlement();
      });

      // Assert
      await Components.test.step("Verify round id, bet amount and settlement result", async () => {
        expect(placeBetResponse.endBet).toBe(bet.amount*(1 + extraRate));
      //handle tie: true
      if (settledResults.settlementResult.tie) {
          expect(settledResults.winAmount).toEqual(bet.amount);
        } else if (settledResults.winStatus === true){
            expect(settledResults.winAmount).toBeGreaterThanOrEqual(bet.amount*settledResults.odds[bet.choice]);
        } else {
            expect(settledResults.winAmount).toEqual(0);
        }
      expect(roundId.includes(settledResults.roundId)).toBe(true);
      });

      // Post-Act
      const settledata = {
          roundId: settledResults.roundId,
          betwin: settledResults.winAmount,
          bet: bet.amount,
          choice: bet.choice
      };
      global.settledata = settledata;
      console.log(settledata);
      
      
  });
  }

  protected ticketHistoryTests(): void {
    this.betHistory.tests();
  }

  protected multipleBetChoices(): void {
    const betAmount = this.options.placeBetAmount ?? 1 
    Components.test("Verify player able to placebet multiple choices in 1 round", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      this.game.attachSocketAndCaptureEvent(GameEvent.OwnBets);
      this.game.attachSocketAndCaptureEvent(GameEvent.Settlement);
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
      let betChoices: any = this.options.multiPlaceBetChoices;
      const amount = this.options.placeBetAmount ?? 1 * (extraRate) ;
      await this.game.waitUntilPlaceBet();
      for (const iterator of betChoices) {
          await this.game.clickToChoice(iterator);
          await this.game.waitForTimeout(800);
      }

      // Act
      let ownBets = await this.game.latestCaptureEvent(GameEvent.OwnBets);
      // Assert
      for (const iterator of betChoices) {
          expect(ownBets.ownBets[iterator]).toBe(amount);
      }
  });
  }

  protected reBet(): void {
    Components.test("Verify that player can rebet all bet choice and amount of previous placebet", async () => {
        // Arrange
        Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
        this.game.attachSocketAndCaptureEvent(GameEvent.OwnBets);
        await this.game.waitUntilPlaceBet();
        await this.game.clickLocator(baseLocatorNames.btnRebet);
        let betChoices: any = this.options.multiPlaceBetChoices;
        const amount = this.options.placeBetAmount ?? 1 * (extraRate) ;
              // Act
        let ownBets = await this.game.latestCaptureEvent(GameEvent.OwnBets);
        // Assert
        for (const iterator of betChoices) {
            expect(ownBets.ownBets[iterator]).toBe(amount);
        }

    });
  }
  protected runScenario(): void {
      this.inGameUiTests();
      this.placeBetAndSettleTests();
      this.ticketHistoryTests();
      this.multipleBetChoices();
      this.reBet();
      this.gameGuides.tests(this.options.gameConfiguration.maxTimeout);
  }
}

// const getDataFistRowHistory = async (game: BaseGame) => {
//   let betdate = await game.getTextLocator(baseLocatorNames.locHistoryBetDate);
//   let roundId = await game.getTextLocator(baseLocatorNames.locHistoryRoundId);
//   let totalstake = await game.getTextLocator(baseLocatorNames.locHistoryTotalStake);
//   let betwin = await game.getTextLocator(baseLocatorNames.locHistoryBetWin);
//   return {
//       betdate: betdate!.toString().replace(/[^0-9.]/g, ""),
//       roundId: roundId!.toString().replace(/[^0-9.]/g, ""),
//       totalstake: totalstake!.toString().replace(/[^0-9.]/g, "").replace("'.'", ""),
//       betwin: betwin!.toString().replace(/[^0-9.]/g, "").replace("'.'", ""),
//   };
// };

new BaccaratXE2ESpec().start();
