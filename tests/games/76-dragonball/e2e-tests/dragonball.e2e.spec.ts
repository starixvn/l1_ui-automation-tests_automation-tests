import { dragonballConfigs } from "../dragonball-configs";
import { E2EBases } from "sc-automation-core";
import {extdragonballLocators} from "./dragonball-locators" 


class dragonballE2ESpec extends E2EBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [dragonballConfigs.choices[0], dragonballConfigs.choices[1]],
            gameConfiguration: dragonballConfigs,
            locators: extdragonballLocators ,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
        };
        super(e2eOptions);
    }
}

new dragonballE2ESpec().start();
