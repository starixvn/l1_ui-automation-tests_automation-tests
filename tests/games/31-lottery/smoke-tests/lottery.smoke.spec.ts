import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { LotteryLocators } from "../lottery-locators";
import { LotteryConfigs } from "../lottery-configs";
import { SmokeBases, Components } from "sc-automation-core";

class LotterySmokeSpec extends SmokeBases.TableGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [LotteryConfigs.choices[4],LotteryConfigs.choices[5]],
            gameConfiguration: LotteryConfigs,
            locators: LotteryLocators,
            waitBetTimeout: 9000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };

        super(smokeOptions);
    }
    protected inGameDealerTests(): void {
    }

    protected maxBetTests(): void {
        
    }

    protected placeBetAndSettleTests(): void {
        Components.test("THEN player able to place a bet and settle", async () => {
        Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
        await this.game.clickLocator("othersChoice")
        const bet = { choice: {group:'others',betchoice: 'big'} , amount: 1 };
        this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

        // Act
        const placeBetResponse = await this.player.placeBet(bet.choice.betchoice, bet.amount);
        const settledResults = await this.game.waitForSettlement();
            
        // Assert
        expect(placeBetResponse.endBet).toBe(bet.amount);
        expect(settledResults.settlementResult).toMatchBetOptions(this.options.gameConfiguration.choices);
        expect(await toMatchWinning(settledResults,bet)).toBeTruthy()
    });
}
}

new LotterySmokeSpec().start();


const toMatchWinning = async (settledResults: object, bet: object) => {
    const odds = settledResults.settlementResult[bet.choice.group][ bet.choice.betchoice] ? settledResults.odds[bet.choice.group] : 0;
    const expectedAmount = bet.amount * odds;
    
    if (expectedAmount === settledResults.winAmount) {
        return true
    }
    else {
        console.log( `failed. Expected ${expectedAmount} but received ${settledResults.winAmount}`);
        return false
    }
};
