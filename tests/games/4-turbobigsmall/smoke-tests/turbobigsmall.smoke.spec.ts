import { TurboBigSmallLocators } from "../turbobigsmall-locators";
import { TurboBigSmallConfigs } from "../turbobigsmall-configs";
import { SmokeBases } from "sc-automation-core";

class TurboBigSmallSmokeSpec extends SmokeBases.BalancedBettingGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [TurboBigSmallConfigs.choices[0]],
            gameConfiguration: TurboBigSmallConfigs,
            locators: TurboBigSmallLocators,
            snapshotFolderPath: __filename,
            waitBetTimeout: 5000,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };
        super(smokeOptions);
    }
}

new TurboBigSmallSmokeSpec().start();
