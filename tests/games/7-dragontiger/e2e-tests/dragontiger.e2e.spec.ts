import { DragonTigerLocators } from "./dragontiger-locators";
import { DragonTigerConfigs } from "../dragontiger-configs";
import { E2EBases } from "sc-automation-core";

class DragonTigerE2ESpec extends E2EBases.MiniGameBase {
    constructor() {
        const E2EOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [DragonTigerConfigs.choices[0], DragonTigerConfigs.choices[1]],
            gameConfiguration: DragonTigerConfigs,
            locators: DragonTigerLocators,
            waitBetTimeout: 10000,
            snapshotFolderPath: __filename,
            uiChecklist : ['icoHistory', 'icoGuide', 'icoStatistic', 'icoGuide', 'imgStatistic'],
            isBalanceBettingGame : false,
        };

        super(E2EOptions);
    }

    protected chipBoardTests(): void {
    }
    protected presetStakeTests(): void {
    }
    protected provablyFairTests(): void {
    }

}


new DragonTigerE2ESpec().start();
