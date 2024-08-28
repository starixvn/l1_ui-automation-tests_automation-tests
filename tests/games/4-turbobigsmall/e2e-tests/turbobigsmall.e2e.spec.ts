import { TurboBigSmallLocators } from "./turbobigsmall-locators";
import { TurboBigSmallConfigs } from "../turbobigsmall-configs";
import { E2EBases } from "sc-automation-core";

class TurboBigSmallE2ESpec extends E2EBases.MiniGameBase {
    constructor() {
        const E2EOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [TurboBigSmallConfigs.choices[0], TurboBigSmallConfigs.choices[1]],
            gameConfiguration: TurboBigSmallConfigs,
            locators: TurboBigSmallLocators,
            waitBetTimeout: 10000,
            isBalanceBettingGame: true,
            snapshotFolderPath: __filename,
            uiChecklist : ['icoHistory', 'icoGuide', 'btnPresetStake'],
            historyItems : {
                roundid: "phien",
                betamount: "totalAmount",
                betwin: "baseBetWin"
            }
        };
        super(E2EOptions);
    }
    protected provablyFairTests(): void {
    }
}


new TurboBigSmallE2ESpec().start();
