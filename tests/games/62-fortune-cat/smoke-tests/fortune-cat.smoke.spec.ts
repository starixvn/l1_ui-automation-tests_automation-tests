import { FortuneCatLocators } from "../fortune-cat-locators";
import { FortuneCatConfigs } from "../fortune-cat-configs";
import { SmokeBases, Components } from "sc-automation-core";

class FortuneCatSmokeSpec extends SmokeBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [FortuneCatConfigs.choices[0]],
            gameConfiguration: FortuneCatConfigs,
            locators: FortuneCatLocators,
            waitBetTimeout: 1000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };
        super(smokeOptions);
    }

}

new FortuneCatSmokeSpec().start();
