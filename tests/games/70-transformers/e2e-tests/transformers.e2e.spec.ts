import { transformersConfigs } from "../transformers-configs";
import { E2EBases } from "sc-automation-core";
import {exttransformersLocators} from "./transformers-locators" 


class transformersE2ESpec extends E2EBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [transformersConfigs.choices[0], transformersConfigs.choices[1]],
            gameConfiguration: transformersConfigs,
            locators: exttransformersLocators ,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
        };
        super(e2eOptions);
    }
}

new transformersE2ESpec().start();
