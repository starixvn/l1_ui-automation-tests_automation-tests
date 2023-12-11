import { BandarQiuQiuLocators } from "../bandar-qiu-qiu-locators";
import { BandarQiuQiuConfigs } from "../bandar-qiu-qiu-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";

class BandarQiuQiuSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [BandarQiuQiuConfigs.choices[0]],
      gameConfiguration: BandarQiuQiuConfigs,
      locators: BandarQiuQiuLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected inGameDealerTests(): void {
    Components.test("GIVEN player joined game and saw dealer", async () => {
      // Arrange
      const dealerSnapshot = await this.game.captureDealer();

      // Assert
      expect(dealerSnapshot.image).toMatchSnapshot(dealerSnapshot.name,{ maxDiffPixelRatio: 0.3 });
    });
  }

  protected hedgeBetTests(): void {
      //no hedgebet 
  }

  protected placeBetAndSettleTests(): void {
    Components.test("THEN player able to place a bet and settle", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = { choice: "spade", amount: this.options.placeBetAmount ?? 1};
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
      
      // Act 
      await this.game.waitUntilPlaceBet()
      const placeBetResponse = await this.player.betOn(bet.choice, bet.amount);
      console.log('done placebet',placeBetResponse);

      const betChoice = await this.game.capture(bet.choice + `Ownbet${process.env.npm_config_project}`);
      const settledResults = await waitForSettlement(this.game);

      // Assert
      await toMatchWinning(settledResults,bet,this.options.gameConfiguration.odds)
      expect(betChoice.image).toMatchSnapshot(betChoice.name,{ maxDiffPixelRatio: 0.3 });
      expect(placeBetResponse.endBet).toBe(bet.amount);
      expect(settledResults.settlementResult).toMatchBetOptions(this.options.gameConfiguration.choices);
  });
  }

}

new BandarQiuQiuSmokeSpec().start();

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
      expect(bet.amount*odds[handRanking]).toBe(settledResults.winAmount); 
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
