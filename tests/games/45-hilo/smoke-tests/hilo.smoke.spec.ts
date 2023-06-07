import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { HiLoLocators } from "../hilo-locators";
import { HiLoConfigs } from "../hilo-configs";
import { SmokeBases, Components } from "sc-automation-core";

class HiLoSmokeSpec extends SmokeBases.MiniGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [HiLoConfigs.choices[0], HiLoConfigs.choices[1]],
            gameConfiguration: HiLoConfigs,
            locators: HiLoLocators,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };

        super(smokeOptions);
    }

    protected hedgeBetTests(): void {}

    protected inGameBetChoiceTests(): void {
        Components.test("AND bet choices should be displayed on table", async () => {
            // Arrange
            await this.game.waitForTimeout(this.options.waitBetTimeout);

            for (const placeBetChoice of this.options.placeBetChoices) {
                // Act
                const betChoice = await this.game.captureChoice(placeBetChoice);

                // Assert
                expect(betChoice.image).toMatchSnapshot(betChoice.name);
            }
        });
    }

    protected placeBetAndSettleTests(): void {
        Components.test("THEN player able to place a bet and settle", async () => {
            Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
            const bet = { choice: this.options.placeBetChoices[0], amount:this.options.placeBetAmount??1 };

            // Act
            const settledResults = await placeBethilo(this.game, bet.choice, bet.amount);

            // // Assert
            expect(settledResults.endBet).toBe(bet.amount);
        });
    }

    protected maxBetTests(): void {
        'no bet limit test for this game'
    }
}

new HiLoSmokeSpec().start();

const placeBethilo = async (game: any, choice: string, amount: number) => {
    await game.attachSocketAndCaptureEvent(GameEvent.EndDeal);
    await game.clickLocator("stake" + amount);
    await game.clickLocator("startbet");
    await game.waitForTimeout(2000);
    await game.clickLocator(choice + "Choice");
    await game.waitForTimeout(2000);
    await game.clickLocator("loChoice");
    await game.waitForTimeout(2000);
    await game.clickLocator("collect");
    await game.waitForTimeout(500);
    let message = await game.latestCaptureEvent(GameEvent.EndDeal);
    let settledResults = {
        settlementResult: message?.result?.settlementResult,
        endBet: message?.result?.amount,
        winAmount: message?.result?.betwin,
    };
    return settledResults;
};
