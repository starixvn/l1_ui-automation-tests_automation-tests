import { FootballCointossLocators } from "./footballcointoss-locators";
import { FootballCointossConfigs } from "../footballcointoss-configs";
import { E2EBases } from "sc-automation-core";

class FootballCointossE2ESpec extends E2EBases.MiniGameBase {
    constructor() {
        const E2EOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [FootballCointossConfigs.choices[0], FootballCointossConfigs.choices[1]],
            gameConfiguration: FootballCointossConfigs,
            locators: FootballCointossLocators,
            waitBetTimeout: 10000,
            snapshotFolderPath: __filename,
            uiChecklist : ['icoHistory', 'icoGuide', 'icoStatistic', 'icoGuide',], //`imgChipBar${process.env.npm_config_project}` 'icoCloseGame'
            isBalanceBettingGame : false,
            historyItems : {
                roundid: "phien",
                betamount: "totalAmount",
                betwin: "betwin"
            },
        };

        super(E2EOptions);
    }
    protected chipBoardTests(): void {
    }
    protected presetStakeTests(): void {
    }

}


new FootballCointossE2ESpec().start();
