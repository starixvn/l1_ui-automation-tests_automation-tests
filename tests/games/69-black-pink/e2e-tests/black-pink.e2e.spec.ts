import { BlackPinkConfigs } from "../black-pink-configs";
import { E2EBases } from "sc-automation-core";
import {extBlackPinkLocators} from "./black-pink-locators" 


class BlackPinkE2ESpec extends E2EBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [BlackPinkConfigs.choices[0], BlackPinkConfigs.choices[1]],
            gameConfiguration: BlackPinkConfigs,
            locators: extBlackPinkLocators ,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
        };
        super(e2eOptions);
    }
}

new BlackPinkE2ESpec().start();
