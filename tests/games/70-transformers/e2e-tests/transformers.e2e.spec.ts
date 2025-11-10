import { transformersConfigs } from "../transformers-configs";
import { E2EBases, Components } from "sc-automation-core";


class transformersE2ESpec extends E2EBases.PortrailClassicGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [transformersConfigs.choices[0], transformersConfigs.choices[1]],
            gameConfiguration: transformersConfigs,
            locators: Components.Portrail_Classic_Locators ,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
        };
        super(e2eOptions);
    }
}

new transformersE2ESpec().start();
