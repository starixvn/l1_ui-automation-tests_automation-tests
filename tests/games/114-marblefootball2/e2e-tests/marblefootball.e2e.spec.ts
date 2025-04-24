import { MarblelFootBallLocators } from "./marblelfootball-locators";
import { MarbleFootball2Configs } from "../marblelfootball-configs";
import { E2EBases, Components} from "sc-automation-core";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { expect } from "@playwright/test";
import  verifyImage from "sc-automation-core/lib/expects/verify-image";

class MarbleFootball2E2ESpec extends E2EBases.MarbleGameBase {
    constructor() {
        const E2EOptions: E2EBases.IBaseOptions = {
            placeBetChoices: MarbleFootball2Configs.choices,
            gameConfiguration: MarbleFootball2Configs,
            locators: MarblelFootBallLocators,
            waitBetTimeout: 60000,
            snapshotFolderPath: __filename,
            multiPlaceBetChoices: ["home","draw","over","odd"],
            historyItems : {
                roundid: "roundId",
                betamount: "amount",
                betwin: "betwin"
            },
            gameLobbyNavigation: [
                Components.BaseLocator.baseLocatorNames.tabAll,
                Components.BaseLocator.baseLocatorNames.icoGame1,
              ],
        };
        super(E2EOptions);
    }

    protected gameFlowTests() {
        Components.test("Verify that player place prematch bet and get error when they reach max bet @MaxBet", async () => {
            // Arrange
            Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
            this.game.attachSocketAndCaptureEvent(GameEvent.Settlement);
            this.game.attachSocketAndCaptureEvent(`odds`);
            let betChoices: any = this.options.multiPlaceBetChoices;
            const oddsMessage = await this.game.waitForEvent(`odds`);
            if (oddsMessage.odds.homeLive > 0) {
                await this.game.waitForEvent(`odds`);          
            }
            await this.game.waitForTimeout(3000)
            await verifyImage(this.game, `txtPrematch`)
            for (const iterator of betChoices) {
                await this.game.clickToChoice(iterator);
                await this.game.waitForTimeout(800);
            }
            let i: number = 0,
                j: number = 0;
            while (i < 10) {
                await this.game.clickLocator("btnRightArrow", 100);
                i++;
            }

            for (const iterator of betChoices) {
                this.game.attachSocketAndCaptureEvent(GameEvent.EndBet);
                await this.game.clickToChoice(iterator);
                await this.game.waitForTimeout(1000);
                const endBetMsg = await this.game.latestCaptureEvent(GameEvent.EndBet);
                // Assert
                expect(endBetMsg).toMatchObject({ endBet: -1, betChoice: iterator });
            }
            // post Act
            while (j < 10) {
                await this.game.clickLocator("btnLeftArrow", 100);
                j++;
            }
        });

        Components.test("Verify opening bet area when video 1H is playing", async () => {
            // Arrange
            Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
            await this.game.waitForTimeout(10000)
            await this.game.clickLocator('btnView', 1000)

            //Assert
            let betChoices: any = this.options.multiPlaceBetChoices;
            for (const iterator of betChoices) {
                await verifyImage(this.game, `${iterator}OwnBet`)
            }
            await verifyImage(this.game, `txtPrematch`)
        });

        Components.test("Verify that player place live bet and get error when they reach max bet", async () => {
           // Arrange
           Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
           this.game.attachSocketAndCaptureEvent(GameEvent.Settlement);
           this.game.attachSocketAndCaptureEvent(`odds`);
           let betChoices: any = ["awayLive","drawLive","underLive","evenLive"];
           await this.game.waitForEvent(`odds`);
           await this.game.waitForTimeout(3000)
           await verifyImage(this.game, `txtLive`)
           for (const iterator of betChoices) {
               await this.game.clickToChoice(iterator);
               await this.game.waitForTimeout(800);
           }
           let i: number = 0
           while (i < 10) {
               await this.game.clickLocator("btnRightArrow", 100);
               i++;
           }

           for (const iterator of betChoices) {
               this.game.attachSocketAndCaptureEvent(GameEvent.EndBet);
               await this.game.clickToChoice(iterator);
               await this.game.waitForTimeout(1000);
               const endBetMsg = await this.game.latestCaptureEvent(GameEvent.EndBet);
               // Assert
               expect(endBetMsg).toMatchObject({ endBet: -1, betChoice: iterator });
           }
        });

        Components.test("Verify switching to prematch bet area in live placing bet time", async () => {
            // Arrange
            Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
            await this.game.clickLocator('btnSwitch', 3000)

            //Assert
            await verifyImage(this.game, `txtPrematch`)
            let betChoices: any = this.options.multiPlaceBetChoices;
            for (const iterator of betChoices) {
                await verifyImage(this.game, `${iterator}OwnBet`)
            }
        });

        Components.test("Verify opening bet area when video 2H is playing", async () => {
            // Arrange
            Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
            await this.game.waitForTimeout(10000)
            await this.game.clickLocator('btnView', 1500)

            //Assert
            await verifyImage(this.game, `txtLive`)
            let betChoices: any = ["awayLive", "drawLive", "underLive","evenLive"]
            for (const iterator of betChoices) {
                await verifyImage(this.game, `${iterator}OwnBet`)
            }
        });

        Components.test("VVerify switching to prematch bet area in live placing bet time", async () => {
            // Arrange
            Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
            await this.game.clickLocator('btnSwitch', 1500)

            //Assert
            await verifyImage(this.game, `txtPrematch`)
            let betChoices: any = this.options.multiPlaceBetChoices;
            for (const iterator of betChoices) {
                await verifyImage(this.game, `${iterator}OwnBet`)
            }
        });
    }

    protected runScenario(): void {
        this.gameFlowTests();

    }

}

new MarbleFootball2E2ESpec().start();
