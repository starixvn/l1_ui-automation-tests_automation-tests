import { TurboOddEvenLocators } from "../turbo-oddeven-locators";
import { TurboOddEvenConfigs } from "../turbo-oddeven-configs";
import { SmokeBases } from "sc-automation-core";

class TurboBigSmallSmokeSpec extends SmokeBases.BalancedBettingGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [TurboOddEvenConfigs.choices[0]],
            gameConfiguration: TurboOddEvenConfigs,
            locators: TurboOddEvenLocators,
            snapshotFolderPath: __filename,
            waitBetTimeout: 9000,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };
        super(smokeOptions);
    }
}

new TurboBigSmallSmokeSpec().start();
