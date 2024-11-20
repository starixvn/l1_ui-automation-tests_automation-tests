import { SevenUpDownLocators } from "./SevenUpDown-locators";
import { SevenUpDownConfigs } from "../sevenupdown-configs";
import { E2EBases, Components} from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import  verifyImage from "sc-automation-core/lib/expects/verify-image";
import { baseLocatorNames } from "sc-automation-core/lib/components/base-game-locator";


class SevenUpDownE2ESpec extends E2EBases.MiniGameBase {
    constructor() {
        const E2EOptions: E2EBases.IBaseOptions = {
            placeBetChoices: SevenUpDownConfigs.choices,
            gameConfiguration: SevenUpDownConfigs,
            locators: SevenUpDownLocators,
            waitBetTimeout: 10000,
            snapshotFolderPath: __filename,
            uiChecklist : ['icoHistory', 'icoGuide', 'icoStatistic', 'icoGuide', 'imgStatistic812' , 'imgStatistic7', 'imgStatistic26'],
            isBalanceBettingGame : false,
            historyItems : {
                roundid: "phien",
                betamount: "totalAmount",
                betwin: "betwin"
            },
        };

        super(E2EOptions);
    }
    protected presetStakeTests(): void {
    }
    protected provablyFairTests(): void {
    }
    protected chipBoardTests(): void {
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
                await verifyImage(this.game, bet.choice + `Ownbet${process.env.npm_config_project}`);
                settledResults = await this.waitForSettlement();
            });

            await Components.test.step(`Verify settled ticket`, async () => {
                expect(placeBetResponse.endBet).toBe(bet.amount);
                expect(settledResults.settlementResult).toMatchBetOptions(this.options.gameConfiguration.choices);
                expect(roundId.includes(settledResults.roundId)).toBe(true);
                expect(bet).toMatchWinning(settledResults);
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
                settledResults = await this.waitForSettlement();
    
                await this.game.waitUntilPlaceBet();
            });

            await Components.test.step(`Verify settlement result`, async () => {
                // Assert
                expect(placeBetResponse.endBet).toBe(bet.amount);
                expect(settledResults.settlementResult).toMatchBetOptions(this.options.gameConfiguration.choices);
                expect(bet).toMatchWinning(settledResults);
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

    async waitForSettlement(subGameName?: string): Promise<any> {
        const message = await this.game.waitForEvent(GameEvent.Settlement, subGameName);
        await this.game.waitForTimeout(500); // add sleep due to feature Publish round result prior to settlement
        const winningByChoice = this.game.latestCaptureEvent(GameEvent.WinStatus);
    
        let settledResults = {
            settlementResult: message?.finish?.settlementResult,
            odds: { 
              up: message.finish.result.multiplier?.choice == "up" ? (this.game.odds.up-1)*message.finish.result.multiplier.value + 1 : this.game.odds.up,
              down: message.finish.result.multiplier?.choice == "down" ? (this.game.odds.down - 1) * message.finish.result.multiplier.value + 1 : this.game.odds.down,
              seven: message.finish.result.multiplier?.choice == "seven" ? (this.game.odds.seven - 1) * message.finish.result.multiplier.value + 1 : this.game.odds.seven
            },
            winStatus: typeof winningByChoice == "object" ? winningByChoice.status.win : "",
            roundId: message.finish.roundId || 0,
        };
          settledResults["winAmount"] = winningByChoice.status.win ? winningByChoice.status.bet : 0;
          console.log(settledResults);
          
    
        return settledResults;
    }

}


new SevenUpDownE2ESpec().start();
