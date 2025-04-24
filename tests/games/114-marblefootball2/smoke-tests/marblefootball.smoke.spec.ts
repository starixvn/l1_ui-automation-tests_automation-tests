import { MarbleFootball2Locators } from "../marblefootball-locators";
import { MarbleFootball2Configs } from "../marblelfootball-configs";
import { Components, SmokeBases } from "sc-automation-core";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { expect } from "@playwright/test";

class MarbleFootBall2SmokeSpec extends SmokeBases.MarbleGameBase {
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["home","away","draw"],
      gameConfiguration: MarbleFootball2Configs,
      locators: MarbleFootball2Locators,
      waitBetTimeout: 30000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }
  protected inGameOddsTests(): void {
  }
  protected placeBetAndSettleTests() {
    Components.test("Place a bet on a valid bet choice.", async () => {
        // Arrange
        Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
        const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1 };
        this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
        this.game.attachSocketAndCaptureEvent(GameEvent.StartPlaceBet);

        await Components.test.step("Verify that the bet choices are displayed correctly on the screen.", async () => {
          await this.game.waitUntilPlaceBet()
            for (const placeBetChoice of this.options.placeBetChoices) {
                // Act
                const betChoice = await this.game.captureChoice(placeBetChoice);

                // Assert
                expect(betChoice.image).toMatchSnapshot(betChoice.name);
            }
        });
        const { placeBetResponse, settledResults } = await Components.test.step("Verify that the bet is successfully placed.", async () => {
            // Act
            const placeBetResponse = await this.player.placeBet(bet.choice, bet.amount);
            await this.game.waitForTimeout(this.options.waitBetTimeout)
            const settledResults = await this.game.waitForSettlement();
            return { placeBetResponse, settledResults };
        });
        await Components.test.step("Confirm that the bet is settled correctly.", async () => {
            // Assert
            expect(placeBetResponse.endBet).toBe(bet.amount);
        });
    });
  }

}

new MarbleFootBall2SmokeSpec().start();
