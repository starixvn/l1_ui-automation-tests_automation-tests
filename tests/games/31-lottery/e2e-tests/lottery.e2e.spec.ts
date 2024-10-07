import { LotteryConfigs } from "../lottery-configs";
import { E2EBases, Components } from "sc-automation-core";
import { LotteryLocators } from "./lottery-locators";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { expect } from "@playwright/test";

class LotteryE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: ["4Sets",
      "special",
      "head",
      "tail",
      "27Sets",
      "others"],
      gameConfiguration: LotteryConfigs,
      locators: LotteryLocators,
      waitBetTimeout: 7500,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: ["small", "even"],     
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
  protected jackPotBanner(): void {
  }
  protected LedBarTests(): void {
  }
  protected maxBetTests(): void {
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
            //expect(ownBets.ownBets[iterator]).toBe(amount);
            console.log(settledResults);
            
            let odds = settledResults.settlementResult.others[iterator] ? 1.96 : 0;
            calWinAmount += bet.amount * odds;
        }
        expect(calWinAmount).toBeCloseTo(settledResults.winAmount, 5);
    });
  }
  protected placeBetAndSettleTests() {
    Components.test("Verify the roundId displayed on table is the same in round settle result @Settlement01", async () => {
        // Arrange
        Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
        await this.game.clickLocator('othersChoice')
        const bet = { choice: { group: "others", betchoice: "big" }, amount: this.options.placeBetAmount };
        this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

        // Act
        const placeBetResponse = await this.player.placeBet(
          bet.choice.betchoice,
          bet.amount
        );
        await this.game.waitForTimeout(2000);
        const betChoice = await this.game.capture(bet.choice.betchoice + `Ownbet${process.env.npm_config_project}`);
        const roundId = await this.game.getTextLocator(`lblRoundIdOnTable`, "#0123456789");
        const settledResults = await this.game.waitForSettlement();

        // Assert
        expect(betChoice.image).toMatchSnapshot(betChoice.name);
        expect(placeBetResponse.endBet).toBe(bet.amount);
        expect(settledResults.settlementResult).toMatchBetOptions(this.options.gameConfiguration.choices);
        expect(await toMatchWinning(settledResults, bet)).toBeTruthy();
        expect(roundId.includes(settledResults.roundId)).toBe(true);
    });

    Components.test("Verify that player able to place bet and return settlement data for comparing history ticket detail @Settlement02", async () => {
        // Arrange
        Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
        const bet = { choice: { group: "others", betchoice: "small" }, amount: this.options.placeBetAmount };
        this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

        // Act
        const placeBetResponse = await this.player.placeBet(
          bet.choice.betchoice,
          bet.amount
        );
        const settledResults = await this.game.waitForSettlement();

        // Assert
        expect(placeBetResponse.endBet).toBe(bet.amount);
        expect(settledResults.settlementResult).toMatchBetOptions(this.options.gameConfiguration.choices);
        expect(await toMatchWinning(settledResults, bet)).toBeTruthy();

        // Post-Act
        const settledata = {
            settledResults: settledResults.settlementResult,
            roundId: settledResults.roundId,
            betwin: settledResults.winAmount,
            bet: bet.amount,
            choice: bet.choice,
        };
        global.settledata = settledata;
    });
}
}

new LotteryE2ESpec().start();

const toMatchWinning = async (settledResults: object, bet: object) => {
  const odds = settledResults.settlementResult[bet.choice.group][
    bet.choice.betchoice
  ]
    ? settledResults.odds[bet.choice.group]
    : 0;
  const expectedAmount = bet.amount * odds;

  if (expectedAmount === settledResults.winAmount) {
    return true;
  } else {
    console.log(
      `failed. Expected ${expectedAmount} but received ${settledResults.winAmount}`
    );
    return false;
  }
};

