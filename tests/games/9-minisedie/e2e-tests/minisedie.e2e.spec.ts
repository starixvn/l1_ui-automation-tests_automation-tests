import { MiniSedieLocators } from "./minisedie-locators";
import { MiniSedie1Configs } from "../minisedie-configs";
import { Components, E2EBases } from "sc-automation-core";
import verifyImage from "sc-automation-core/lib/expects/verify-image";

class MiniSedieE2ESpec extends E2EBases.MiniGameBase {
    constructor() {
        const E2EOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [MiniSedie1Configs.choices[0], MiniSedie1Configs.choices[1]],
            gameConfiguration: MiniSedie1Configs,
            locators: MiniSedieLocators,
            waitBetTimeout: 10000,
            placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
            snapshotFolderPath: __filename,
            uiChecklist : ['icoHistory', 'icoGuide', 'icoHistory', 'icoStatistic', 'icoColapse', 'imgStatistic', 'imgSeDieMini2', 'imgSeDieMini3', 'imgSeDieMini4', 'imgSeDieMini', 'icoSwitch1', 'icoSwitch2', 'icoSwitch3'],
            historyItems : {
                roundid: "phien",
                betamount: "even",
                betwin: "betwin"
            },
            isBalanceBettingGame : false,
        };
        super(E2EOptions);
    }
    protected provablyFairTests(): void {
    }
    protected presetStakeTests(): void {
    }
    protected chipBoardTests(): void {
    }
    protected inGameUITests() {
        Components.test("Verify introduction section of the game", async () => {
            await Components.test.step(`Verify image of introduction section`, async () => {
                await this.game.waitForTimeout(3000);
                await verifyImage(this.game, `imgIntroduction`);
            });

            await Components.test.step(`Close introduction`, async () => {
                await this.game.clickLocator('lblDontShow', 2000)
            });
        });
        Components.test("Verify all bet choices are displayed on table @UI01", async () => {
            // Arrange
            await Components.test.step(`Wait for new round start`, async () => {
                Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
                await this.game.waitUntilPlaceBet();
            });
            await Components.test.step(`Verify image of all bet choices`, async () => {
                for (const placeBetChoice of this.options.placeBetChoices) {
                    // Act
                    await verifyImage(this.game, `${placeBetChoice}Choice`);
                }
            });
        });

        Components.test("Verify main UI of the game @UI02", async () => {
            await Components.test.step(`Verify image of UI items checklist`, async () => {
                const uiChecklist = this.options.uiChecklist ?? [];
                for (const uiItem of uiChecklist) {
                    // Act
                    await verifyImage(this.game, uiItem, 0.02);
                }
            });
        });

    }


}


new MiniSedieE2ESpec().start();
