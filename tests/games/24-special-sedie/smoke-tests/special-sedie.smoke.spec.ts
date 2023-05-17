import { SpecialSedieLocators } from "../special-sedie-locators";
import { SpecialSedieConfigs } from "../special-sedie-configs";
import { SmokeBases } from "sc-automation-core";

class SpecialSedieSmokeSpec extends SmokeBases.BalancedBettingGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            gameConfiguration: SpecialSedieConfigs,
            locators: SpecialSedieLocators,
            waitBetTimeout: 6000,
            placeBetChoices: [SpecialSedieConfigs.choices[0]],
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };

        super(smokeOptions);
    }
}

new SpecialSedieSmokeSpec().start();
