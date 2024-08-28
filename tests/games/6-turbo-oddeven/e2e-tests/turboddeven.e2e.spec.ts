import { TurboOddEvenLocators } from "./turbooddeven-locators";
import { TurboOddEvenConfigs } from "../turbo-oddeven-configs";
import { E2EBases } from "sc-automation-core";

class TurboOddEvenE2ESpec extends E2EBases.MiniGameBase {
    constructor() {
        const E2EOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [TurboOddEvenConfigs.choices[0], TurboOddEvenConfigs.choices[1]],
            gameConfiguration: TurboOddEvenConfigs,
            locators: TurboOddEvenLocators,
            waitBetTimeout: 10000,
            snapshotFolderPath: __filename,
            uiChecklist : ['icoHistory', 'icoGuide', 'btnPresetStake'],
            isBalanceBettingGame : true,
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


new TurboOddEvenE2ESpec().start();
