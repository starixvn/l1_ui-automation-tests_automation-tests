import { BigSmallLocators } from "./bigsmall-locators";
import { BigSmallConfigs } from "../bigsmall-configs";
import { E2EBases } from "sc-automation-core";

class BigSmallE2ESpec extends E2EBases.MiniGameBase {
    constructor() {
        const E2EOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [BigSmallConfigs.choices[0], BigSmallConfigs.choices[1]],
            gameConfiguration: BigSmallConfigs,
            locators: BigSmallLocators,
            waitBetTimeout: 10000,
            snapshotFolderPath: __filename,
            uiChecklist : ['icoHistory', 'icoGuide', 'btnPresetStake'],
            historyItems : {
                roundid: "phien",
                betamount: "totalAmount",
                betwin: "baseBetWin"
            },
            isBalanceBettingGame : true,
        };
        super(E2EOptions);
    }
    protected provablyFairTests(): void {
    }

}


new BigSmallE2ESpec().start();
