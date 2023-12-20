import { BandarQiuQiuConfigs } from "../bandar-qiu-qiu-configs";
import { E2EBases, Components } from "sc-automation-core";
import { bandarQiuQiuLocators } from "./bandar-qiu-qiu-locators";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
const timeout = 3000
class BandarQiuQiuE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: BandarQiuQiuConfigs.choices,
      gameConfiguration: BandarQiuQiuConfigs,
      locators: bandarQiuQiuLocators,
      waitBetTimeout: 10000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: BandarQiuQiuConfigs.choices,
      indexTicketHistory: { totalbet: -2, isIdLink: true },
      gameLobbyNavigation: [
        Components.BaseLocator.baseLocatorNames.tabCardGames,
        Components.BaseLocator.baseLocatorNames.icoGame1,
      ],
      barItems: ["player","banker","tie"]
    };
    super(e2eOptions);
  }

  protected placeBetAndSettleTests(): void {
    Components.test("Verify the roundId displayed on table is the same in round settle result", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      await this.game.waitUntilNextRound();
      const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1 };
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

      // Act
      const placeBetResponse = await this.player.placeBet(bet.choice, bet.amount);
      const betChoice = await this.game.capture(bet.choice + `Ownbet${process.env.npm_config_project}`);
      const roundId = await this.game.getTextLocator("lblRoundIdOnTable", "#0123456789");
      const settledResults = await waitForSettlement(this.game);

      // Assert
      await toMatchWinning(settledResults,bet,this.options.gameConfiguration.odds)
      expect(betChoice.image).toMatchSnapshot(betChoice.name);
      expect(placeBetResponse.endBet).toBe(bet.amount);
      expect(settledResults.settlementResult).toMatchBetOptions(this.options.gameConfiguration.choices);
      expect(roundId.includes(settledResults.roundId)).toBe(true);
  });

  Components.test("Verify that player able to place bet and return settlement data for comparing history ticket detail", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      await this.game.waitUntilNextRound();
      const bet = { choice: this.options.placeBetChoices[0], amount: process.env.npm_config_project === "l2" ? 10 : 50};
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

      // Act
      await this.game.clickStake(bet.amount);
      const placeBetResponse = await this.player.placeBet(bet.choice, bet.amount);
      
      const settledResults = await waitForSettlement(this.game);
      // Assert
      expect(placeBetResponse.endBet).toBe(bet.amount);
      expect(settledResults.settlementResult).toMatchBetOptions(this.options.gameConfiguration.choices);
      // Post-Act
      const settledata = {
          settledResults: settledResults.settlementResult,
          roundId: settledResults.roundId.toString(),
          betwin: settledResults.winAmount.toString(),
          bet: bet.amount.toString(),
          choice: bet.choice,
      };
      global.settledata = settledata;
  });

  }

  protected ticketHistoryTests(): void {
    Components.test("Verify data of history of above round", async () => {
      // Act 1
      await this.game.clickHistory(timeout);
      const ticketdata = await getDataFistRowHistory(this.game);

      const indexHistory: any = this.options.indexTicketHistory;

      const winamount = ticketdata[ticketdata?.length - 1];
      const totalbet = ticketdata[ticketdata?.length + indexHistory.totalbet];
      const dateIndex = ticketdata.findIndex((value) => {
          return value.includes("/");
      });

      // Assert
      expect(parseFloat(winamount)).toBeCloseTo(parseFloat(global.settledata.betwin), -1);
      expect(totalbet).toEqual(global.settledata.bet);

      // Act 2
      if (indexHistory.isIdLink) {
          await this.game.clickLocator("locHistoryRoundId", 1500);
          const roundID = await this.game.getTextLocator("lblHistoryDetailRoundId", "0123456789");
          // Assert 2
          expect(parseInt(roundID)).toEqual(parseInt(global.settledata.roundId));
      }

      //Post-Act
      await this.game.clickOutSide();
      await this.game.clickOutSide();
  });
  }

  protected multipleBetChoices(): void {
    Components.test("Verify player able to placebet multiple choices in 1 round", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      this.game.attachSocketAndCaptureEvent(GameEvent.OwnBets);
      this.game.attachSocketAndCaptureEvent(GameEvent.Settlement);
      let betChoices: any = this.options.multiPlaceBetChoices;
      const amount = this.options.placeBetAmount ?? 1;
      await this.game.waitUntilPlaceBet();
      await this.game.waitForTimeout(timeout / 4);
      for (const iterator of betChoices) {
          await this.game.clickToChoice(iterator);
          await this.game.waitForTimeout(800);
      }

      // Act
      await this.game.latestCaptureEvent(GameEvent.OwnBets);

      const settledResults = await waitForSettlement(this.game);
      let calWinAmount = 0;
      // Assert
      for (const iterator of betChoices) {
        const bet = {choice:iterator, amount: amount}
        const isTie = settledResults.settlementResult[bet.choice] ===2? true:false
        const isWin = settledResults.settlementResult[bet.choice] ===1? true:false
        
        if (isWin) {
          if (isTie) {
            expect(settledResults.winAmount).toBe(bet.amount);
          }
          else{
            expect(settledResults.settlementResult[bet.choice]).toBe(1); 
            const handRanking = await returnHandRanking(settledResults.result,bet.choice)
            const odds = this.options.gameConfiguration.odds[handRanking]
            console.log('handRanking',handRanking,bet.amount*odds);
            calWinAmount += bet.amount*odds;
          }
        }

      }
      expect(calWinAmount.toFixed(2)).toBe(settledResults.winAmount.toFixed(2));
  });
  }

  protected reBet(): void {
    Components.test("Verify player able to place bet other choice then get data for next rebet", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = { choice: this.options.placeBetChoices[1], amount: this.options.placeBetAmount ?? 1 };
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

      // Act
      await this.game.clickStake(bet.amount);
      const placeBetResponse = await this.player.placeBet(bet.choice, bet.amount);     
      const settledResults =  await waitForSettlement(this.game);

      // Assert
      expect(placeBetResponse.endBet).toBe(bet.amount);
      expect(settledResults.settlementResult).toMatchBetOptions(this.options.gameConfiguration.choices);
  });
  Components.test("Verify player can rebet all bet choice and amount of previous placebet", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = { choice: this.options.placeBetChoices[1], amount: this.options.placeBetAmount ?? 1 };
      await this.game.waitUntilPlaceBet();
      await this.game.clickLocator("btnRebet");

      // Act
      const settledResults = await waitForSettlement(this.game);
      
      // Assert
      expect(settledResults.settlementResult).toMatchBetOptions(this.options.gameConfiguration.choices);

  });
  }
  
  protected LedBarTests(): void {
    Components.test("Verify the latest result in bar should be displayed correctly", async () => {
      // Act 1
      const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1 };
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

      // Act
      await this.player.placeBet(bet.choice, bet.amount);
      const settledResults = await waitForSettlement(this.game);
      await this.game.waitForTimeout(5000)
      console.log(settledResults.settlementResult,settledResults.settlementResult["spade"]);
      
      const resultbar = settledResults.settlementResult["spade"] === 0 ? "banker" :
      settledResults.settlementResult["spade"] === 1 ? "player" :"tie";

      const barLed = await this.game.capture("spade" + resultbar);
      const boardLed = await this.game.capture("barspade" + resultbar);
      

      // Assert
      expect(barLed.image).toMatchSnapshot(barLed.name, { maxDiffPixelRatio: 0.3 });
      expect(boardLed.image).toMatchSnapshot(boardLed.name, { maxDiffPixelRatio: 0.3 });

  });
  }

  protected turnbackGame(): void {
    Components.test("Verify player able to go back game by clicking on game icon", async () => {
      // Act 1.
      await this.game.clickLocator("tabCardGames")
      let pathLobbyImg = this.options.snapshotFolderPath+ "-snapshots/" +"lobby.png"
      const pathGameIcon = this.options.snapshotFolderPath+ "-snapshots/" +"gameIcon.png"
      await this.game.page.screenshot({ path: pathLobbyImg, fullPage: true })
      let gameicon = await this.game.detectImageLocation(pathLobbyImg,pathGameIcon)
      console.log(gameicon);
      if (gameicon==null) {
        await this.game.page.mouse.click(1258, 365)
        await this.game.waitForTimeout(timeout);
        pathLobbyImg = this.options.snapshotFolderPath+ "-snapshots/" +"lobby.png"
        gameicon = await this.game.detectImageLocation(pathLobbyImg,pathGameIcon,40)
        if (gameicon==null) {
          await this.game.page.mouse.click(921, 258)
        }
        else{
          await this.game.page.mouse.click(gameicon.x, gameicon.y)
        }
      }
      else{
        await this.game.page.mouse.click(gameicon.x, gameicon.y)
      }
        await this.game.waitForTimeout(timeout*2)
        const dealerSnapshot = await this.game.capture("imgdealer");
        // Assert
        expect(dealerSnapshot.image).toMatchSnapshot(dealerSnapshot.name, { maxDiffPixelRatio: 0.3 });

  });
  }


}

new BandarQiuQiuE2ESpec().start();


const getDataFistRowHistory = async (game: any, elementname: string = "lblHistoryFirstRow") => {
  let tempdata = await game.getTextLocator(elementname, "0123456789:/., ", "history");
  return tempdata?.split(" ") || "";
};

const toMatchWinning = async (settledResults:any,bet:{choice:string, amount:number},odds:any) => {
  const isTie = settledResults.settlementResult[bet.choice] ===2? true:false
  const isWin = settledResults.winStatus
 
  if (isWin) {
    if (isTie) {
      expect(settledResults.winAmount).toBe(bet.amount);
    }
    else{
      expect(settledResults.settlementResult[bet.choice]).toBe(1); 
      const handRanking = await returnHandRanking(settledResults.result,bet.choice)
      console.log('handRanking',handRanking,bet.amount*odds[handRanking]);
      expect((bet.amount*odds[handRanking]).toFixed(2)).toBe(settledResults.winAmount.toFixed(2)); 
    }
  }
  else{
    expect(settledResults.winAmount).toBe(0);  }
};

const waitForSettlement= async (game: any) =>{
  const message = await game.waitForEvent(GameEvent.Settlement);
  await game.waitForTimeout(500); // add sleep due to feature Publish round result prior to settlement
  const winningByChoice = game.latestCaptureEvent(GameEvent.WinStatus);

  let settledResults = {
      settlementResult: message?.finish?.settlementResult,
      winStatus: typeof winningByChoice == "object" ? winningByChoice.status.win : "",
      roundId: message.finish.roundId || 0,
      winAmount: winningByChoice.status.win ? winningByChoice.status.bet : 0,
      result: message?.finish?.result

  };
  return settledResults;
}

const returnHandRanking= async (result:any,choice:string) => {
  const resultArray = result[choice].dominoes.map((item) => item.split("").map(Number));
  console.log(resultArray);
  
const sixDevil = resultArray.every(([a, b]) => a + b === 6);
const small = resultArray.reduce((sum, [a, b]) => sum + a + b, 0) <= 9;
const big = resultArray.reduce((sum, [a, b]) => sum + a + b, 0)>=39;
const twin = resultArray.every(([a, b]) => a === b);
const qiuQiu = (((resultArray[0][0] + resultArray[0][1]+ resultArray[1][0] + resultArray[1][1])===9)&&((resultArray[2][0] + resultArray[2][1] +resultArray[3][0] + resultArray[3][1])===9));
const ordinaryCard = (sixDevil === false&& small=== false && big=== false &&twin=== false && qiuQiu === false)? true:false

const variables = [
  { name: 'sixDevil', value: sixDevil },
  { name: 'small', value: small },
  { name: 'big', value: big },
  { name: 'twin', value: twin },
  { name: 'qiuQiu', value: qiuQiu },
  { name: 'ordinaryCard', value: ordinaryCard }
];

const trueVariables = variables.filter(variable => variable.value === true);
const trueVariableNames = trueVariables.map(variable => variable.name);

return trueVariableNames[0]
};
