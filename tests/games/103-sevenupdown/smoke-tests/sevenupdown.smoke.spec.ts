import { SevenUpDownLocators } from "../SevenUpDown-locators";
import { SevenUpDownConfigs } from "../sevenupdown-configs";
import { Components, SmokeBases } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";

class SevenUpDownSmokeSpec extends SmokeBases.MiniGameBase {
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [SevenUpDownConfigs.choices[0]],
      gameConfiguration: SevenUpDownConfigs,
      locators: SevenUpDownLocators,
      waitBetTimeout: 16000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }
  protected ticketHistoryTests(): void {
    Components.test("AND player could open history popup", async () => {
      // Arrange
      await this.player.openHistory();

      // Act
      const historySnapshot = await this.game.captureHistory();

      // Assert
      expect(historySnapshot.image).toMatchSnapshot(historySnapshot.name);

      await this.game.clickOutSide(2000);
  });
  }

  protected placeBetAndSettleTests() {
    Components.test("THEN player able to place a bet and settle", async () => {
        // Arrange
        Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
        const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1 };
        this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

        // Act
        const placeBetResponse = await this.player.placeBet(bet.choice, bet.amount);
        const settledResults = await this.waitForSettlement();
        // Assert
        expect(placeBetResponse.endBet).toBe(bet.amount);
        expect(settledResults.settlementResult).toMatchBetOptions(this.options.gameConfiguration.choices);
        expect(bet).toMatchWinning(settledResults);
    });
}
  // protected runScenario(): void {
  //   this.placeBetAndSettleTests();
  // }

  async waitForSettlement(subGameName?: string): Promise<any> {
    const message = await this.game.waitForEvent(GameEvent.Settlement, subGameName);
    await this.game.waitForTimeout(500); // add sleep due to feature Publish round result prior to settlement
    const winningByChoice = this.game.latestCaptureEvent(GameEvent.WinStatus);

    let settledResults = {
        settlementResult: message?.finish?.settlementResult,
        odds: { 
          up: message.finish.result.multiplier?.choice == "up" ? (this.game.odds.up - 1)*message.finish.result.multiplier.value + 1 : this.game.odds.up,
          down: message.finish.result.multiplier?.choice == "down" ? (this.game.odds.down - 1) * message.finish.result.multiplier.value + 1 : this.game.odds.down,
          seven: message.finish.result.multiplier?.choice == "seven" ? (this.game.odds.seven - 1) * message.finish.result.multiplier.value + 1 : this.game.odds.seven
        },
        winStatus: typeof winningByChoice == "object" ? winningByChoice.status.win : "",
        roundId: message.finish.roundId || 0,
    };
      settledResults["winAmount"] = winningByChoice.status.win ? winningByChoice.status.bet : 0;

    return settledResults;
}

}

new SevenUpDownSmokeSpec().start();
