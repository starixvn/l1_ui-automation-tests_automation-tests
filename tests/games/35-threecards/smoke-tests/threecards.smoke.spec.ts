import { ThreeCardsLocators } from "../threecards-locators";
import { ThreeCardsConfigs } from "../threecards-configs";
import { SmokeBases } from "sc-automation-core";

class ThreeCardsSmokeSpec extends SmokeBases.TableGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [ThreeCardsConfigs.choices[0]],
            gameConfiguration: ThreeCardsConfigs,
            locators: ThreeCardsLocators,
            waitBetTimeout: 7000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };

        super(smokeOptions);
    }
}

new ThreeCardsSmokeSpec().start();
