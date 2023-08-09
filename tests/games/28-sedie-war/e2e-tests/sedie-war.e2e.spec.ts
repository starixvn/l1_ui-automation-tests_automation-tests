import { SedieWarConfigs } from "../sedie-war-configs";
import { E2EBases, Components, CustomExpect } from "sc-automation-core";
import { SedieWarLocators } from "./sedie-war-locators";

class SedieWarE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: SedieWarConfigs.choices,
      gameConfiguration: SedieWarConfigs,
      locators: SedieWarLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(e2eOptions);
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
      const roundId = ticketdata[ticketdata?.length - 5];
      
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
      const timeout = 3000
          // Arrange
          Components.test.setTimeout(this.options.gameConfiguration.maxTimeout+10000);
          this.game.attachSocketAndCaptureEvent("ownBets");
          this.game.attachSocketAndCaptureEvent("finish");
          let betChoices = [
            "player",
            "tie",
            "odd",
            "playerOdd",
            "playerRed3",
            "playerRed4",
            "playerWhite3",
            "playerWhite4",
            "bankerEven",
            "bankerRed3",
            "bankerRed4",
            "bankerWhite3",
            "bankerWhite4",
          ]
          const amount = this.options.placeBetAmount ?? 1;
          await this.game.waitUntilPlaceBet();
          await this.game.waitForTimeout(timeout / 4);
          for (const iterator of betChoices) {
              await this.game.clickToChoice(iterator);
              await this.game.waitForTimeout(500);
          }
          // Act
          let ownBets = await this.game.latestCaptureEvent("ownBets");
          const settledResults = await this.game.waitForSettlement();
          let calWinAmount = 0;
          // Assert
          for (const iterator of betChoices) {
              const bet = settledResults.tie === true
              ? { choice: iterator, amount: (this.options.placeBetAmount as number) / 2 ?? 0.5 }
              : { choice: iterator, amount: this.options.placeBetAmount ?? 1 };
                  CustomExpect.expect(ownBets.ownBets[iterator]).toBe(amount);
              let odds = settledResults.settlementResult[iterator] ? settledResults.odds[iterator] : 0;
              calWinAmount += bet.amount * odds;
          }
          CustomExpect.expect(calWinAmount.toFixed(2)).toBe(settledResults.winAmount.toFixed(2));
      });
  }

  protected returnGameLobby(): void {
    Components.test("Verify user able to return game lobby by clicking on home icon", async () => {
    await this.game.waitForTimeout(2000);
    await this.game.clickLocator("hamburgerMenu");
    await this.game.clickLocator("btnHome");
    await this.game.waitUntilGameLobbyUiLoad();
    const gamelobby = await this.game.capture(`imgGameLobby${process.env.npm_config_project}`);
    CustomExpect.expect(gamelobby.image).toMatchSnapshot(gamelobby.name);
  }
)
  }
}

new SedieWarE2ESpec().start();

const getDataFistRowHistory = async (game: any, elementname: string) => {
  let tempdata = await game.getTextLocator(elementname);
  return tempdata?.split(" ") || "";
};
