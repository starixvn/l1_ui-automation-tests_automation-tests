import { BigSmallSicBoConfigs } from "../bigsmall-sicbo-configs";
import { E2EBases, Components, CustomExpect } from "sc-automation-core";
import { BigSmallSicBoLocators } from "./bigsmall-sicbo-locators";

class SedieE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: BigSmallSicBoConfigs.choices,
      gameConfiguration: BigSmallSicBoConfigs,
      locators: BigSmallSicBoLocators,
      waitBetTimeout: 13000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: BigSmallSicBoConfigs.choices.slice(2),
      indexTicketHistory: { totalbet: -2, isIdLink: false },
      gameLobbyNavigaion: [
        Components.BaseLocator.baseLocatorNames.tabBigSmall,
        Components.BaseLocator.baseLocatorNames.icoGame1,
      ],
    };
    super(e2eOptions);
  }
  protected maxbetTests(): void {
    Components.test("Verify maxbet", async () => {
      const bet = { choice: this.options.placeBetChoices[0], amount: [this.options.placeBetAmount ?? 1, 10] };

      // Act
      await this.player.placeMaxBet(bet.choice, bet.amount);
      const error = await this.game.captureErrorBetLimit();

      // Assert
      CustomExpect.expect(error.image).toMatchSnapshot(error.name,{maxDiffPixelRatio:0.3});

    });
  }

  protected ticketHistoryTests(): void {
    Components.test("Verify history and ticket detail", async () => {
      // Act 1
      await this.game.clickHistory(2000);
      const ticketdata = await getDataFistRowHistory(
        this.game,
        "lblHistoryFirstRow"
      );

      const winamount = ticketdata[ticketdata?.length - 1];
      const betChoiceAmount = ticketdata[ticketdata?.length - 2];
      const roundId = ticketdata[ticketdata?.length - 7];

      // Assert
      CustomExpect.expect(winamount.trim()).toEqual(global.settledata.betwin);
      CustomExpect.expect(betChoiceAmount).toEqual(global.settledata.bet);
      CustomExpect.expect(roundId).toEqual(global.settledata.roundID);

      //Post-Act
      await this.game.clickOutSide();
    });
  }

  protected multipleBetChoices(): void {
    Components.test("User able to placebet multiple choices", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      this.game.attachSocketAndCaptureEvent("ownBets");
      this.game.attachSocketAndCaptureEvent("finish");
      let betChoices: any = [
        "big",
        "anyTriple",
        "total4",
        "total5",
        "total6",
        "total7",
        "total8",
        "total9",
        "total10",
        "total11",
        "total12",
        "total13",
        "total14",
        "total15",
        "total16",
        "total17",
      ];
      const amount = this.options.placeBetAmount ?? 1;
      await this.game.waitUntilPlaceBet();
      await this.game.waitForTimeout(800);
      for (const iterator of betChoices) {
        await this.game.clickToChoice(iterator);
        await this.game.waitForTimeout(800);
      }

      // Act
      let ownBets = await this.game.latestCaptureEvent("ownBets");

      const settledResults = await this.game.waitForSettlement();
     
      let calWinAmount = 0;
      // Assert
      for (const iterator of betChoices) {
        const bet = { choice: iterator, amount: this.options.placeBetAmount ?? 1 };
        CustomExpect.expect(ownBets.ownBets[iterator]).toBe(amount);
        let odds = settledResults.settlementResult[iterator]
          ? settledResults.odds[iterator]
          : 0;
        calWinAmount += bet.amount * odds;
      }
     
      CustomExpect.expect(calWinAmount).toBe(settledResults.winAmount);

    });
  }
}

new SedieE2ESpec().start();

const getDataFistRowHistory = async (game: any, elementname: string) => {
  let tempdata = await game.getTextLocator(elementname);
  return tempdata?.split(" ") || "";
};
