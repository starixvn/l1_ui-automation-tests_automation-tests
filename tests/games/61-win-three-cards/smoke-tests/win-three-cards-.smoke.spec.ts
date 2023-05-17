import { winthreecardsLocators } from "../win-three-cards-locators";
import { winthreecardsConfigs } from "../win-three-cards-configs";
import { SmokeBases } from "sc-automation-core";

class winthreecardsSmokeSpec extends SmokeBases.TableGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            gameConfiguration: winthreecardsConfigs,
            placeBetChoices: [winthreecardsConfigs.choices[0], winthreecardsConfigs.choices[1]],
            waitBetTimeout: 10000,
            locators: winthreecardsLocators,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };

        super(smokeOptions);
    }
    // protected override inGameDealerTests(): void {}

}

new winthreecardsSmokeSpec().start();
