import { CoinTossLocators } from "./cointoss-locators";
import { CoinTossConfigs } from "../cointoss-configs";
import { E2EBases } from "sc-automation-core";

class CoinTossE2ESpec extends E2EBases.MiniGameBase {
    constructor() {
        const E2EOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [CoinTossConfigs.choices[0], CoinTossConfigs.choices[1]],
            gameConfiguration: CoinTossConfigs,
            locators: CoinTossLocators,
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


new CoinTossE2ESpec().start();
