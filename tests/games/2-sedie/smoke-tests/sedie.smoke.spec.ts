import { SedieLocators } from "../sedie-locators";
import { SedieConfigs } from "../sedie-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.TableGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            gameConfiguration: SedieConfigs,
            locators: SedieLocators,
            waitBetTimeout: 8000,
            placeBetChoices: [SedieConfigs.choices[0]],
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };

        super(smokeOptions);
    }
}

new SedieSmokeSpec().start();
