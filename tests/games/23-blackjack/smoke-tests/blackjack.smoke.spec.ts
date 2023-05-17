import { BlackJackLocators } from "../blackjack-locators";
import { BlackJackConfigs } from "../blackjack-configs";
import { SmokeBases } from "sc-automation-core";

class BlackJackSmokeSpec extends SmokeBases.CardGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [BlackJackConfigs.choices[0],BlackJackConfigs.choices[1],BlackJackConfigs.choices[2]],
            gameConfiguration: BlackJackConfigs,
            locators: BlackJackLocators,
            waitBetTimeout: 1000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };

        super(smokeOptions);
    }

}


new BlackJackSmokeSpec().start();
