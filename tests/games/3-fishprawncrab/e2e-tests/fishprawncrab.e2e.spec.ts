import { FPCLocators } from "./fishprawncrab-locators";
import { FPCConfigs } from "../fishprawncrab-configs";
import { E2EBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import verifyImage from "sc-automation-core/lib/expects/verify-image";
import { baseLocatorNames } from "sc-automation-core/lib/components/base-game-locator";

class FPCE2ESpec extends E2EBases.MiniGameBase {
    constructor() {
        const E2EOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [FPCConfigs.choices[0], FPCConfigs.choices[1], FPCConfigs.choices[2], FPCConfigs.choices[3], FPCConfigs.choices[4], FPCConfigs.choices[5]],
            gameConfiguration: FPCConfigs,
            locators: FPCLocators,
            waitBetTimeout: 10000,
            snapshotFolderPath: __filename,
            uiChecklist : ['icoHistory', 'icoGuide', 'icoStatistic', 'icoCloseGame',  'imgStatistic1', 'imgStatistic2',], //`imgChipBar${process.env.npm_config_project}` 'icoCloseGame'
            isBalanceBettingGame : false,
            historyItems : {
                roundid: "phien",
                betamount: "gourd",
                betwin: "betwin"
            },
        };

        super(E2EOptions);
    }
    protected chipBoardTests(): void {
    }
    protected presetStakeTests(): void {
    }
    protected provablyFairTests(): void {
    }
    protected hedgeBetTests(): void {
    }
    protected placeBetAndSettleTests() {
        Components.test("Verify round id displayed on table is the same with round id in settle result @Settlement01", async () => {
            // Arrange
            let placeBetResponse, roundId, settledResults;
            const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1 };
            await Components.test.step(`Place bet and get round ID on game client`, async () => {
                Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
                this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
    
                // Act
                await this.game.waitUntilPlaceBet()
                placeBetResponse = await this.player.placeBet(bet.choice, bet.amount);
                roundId = await this.game.getTextLocator(baseLocatorNames.lblRoundIdOnTable, "#0123456789");
                settledResults = await this.game.waitForSettlement();
                
            });

            await Components.test.step(`Verify settled ticket`, async () => {
                verifyImage(this.game, bet.choice + `Ownbet${process.env.npm_config_project}`)
                expect(placeBetResponse.endBet).toBe(bet.amount);
                expect(settledResults.settlementResult).toMatchBetOptions(this.options.gameConfiguration.choices);
                expect(roundId.includes(settledResults.roundId)).toBe(true);
            });

        });

        Components.test("Verify that player able to place bet and return settlement data for comparing history ticket detail @Settlement02", async () => {
            // Arrange
            let placeBetResponse, settledResults;
            Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
            const bet = { choice: this.options.placeBetChoices[1], amount: this.options.placeBetAmount ?? 1 , refund: 0 };
            this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

            // Act
            await Components.test.step(`Place bet and wait for settlement`, async () => {
                await this.game.waitUntilPlaceBet()
                placeBetResponse = await this.player.placeBet(bet.choice, bet.amount);
                settledResults = await this.game.waitForSettlement();
    
                await this.game.waitUntilPlaceBet();
            });

            await Components.test.step(`Verify settlement result`, async () => {
                // Assert
                expect(placeBetResponse.endBet).toBe(bet.amount);
                expect(settledResults.settlementResult).toMatchBetOptions(this.options.gameConfiguration.choices);
            });

            // Post-Act
            const settledata = {
                betdate: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "numeric", year: "numeric" }),
                settledResults: settledResults.settlementResult,
                roundId: settledResults.roundId,
                betwin: (settledResults.winAmount - bet.refund),
                bet: bet.amount,
                choice: bet.choice,
            };
            global.settledata = settledata;
        });

    }

}


new FPCE2ESpec().start();
