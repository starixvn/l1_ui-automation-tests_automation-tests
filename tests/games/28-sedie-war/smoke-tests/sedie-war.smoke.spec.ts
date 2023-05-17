import { SedieWarLocators } from "../sedie-war-locators";
import { SedieWarConfigs } from "../sedie-war-configs";
import { SmokeBases } from "sc-automation-core";

class SedieWarSmokeSpec extends SmokeBases.TableGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            gameConfiguration: SedieWarConfigs,
            locators: SedieWarLocators,
            waitBetTimeout: 10000,
            placeBetChoices: [SedieWarConfigs.choices[0]],
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };

        super(smokeOptions);
    }
    protected inGameDealerTests(): void {}
}

new SedieWarSmokeSpec().start();
