import { BlackPinkConfigs } from "../black-pink-configs";
import { E2EBases, Components } from "sc-automation-core";


class BlackPinkE2ESpec extends E2EBases.PortrailClassicGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [BlackPinkConfigs.choices[0], BlackPinkConfigs.choices[1]],
            gameConfiguration: BlackPinkConfigs,
            locators: Components.Portrail_Classic_Locators ,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
        };
        super(e2eOptions);
    }
}

new BlackPinkE2ESpec().start();
