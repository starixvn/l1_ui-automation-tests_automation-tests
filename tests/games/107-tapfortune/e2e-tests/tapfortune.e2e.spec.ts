import { E2EBases } from "sc-automation-core";
import { tapfortuneLocators } from "./tapfortune-locators";
import { tapfortuneConfigs } from "../tapfortune-configs";

class tapfortuneE2ESpec extends E2EBases.TapGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [""],
            gameConfiguration: tapfortuneConfigs,
            locators: tapfortuneLocators ,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
        };
        super(e2eOptions);
    }
}

new tapfortuneE2ESpec().start();
