import { MissionImpossibleConfigs } from "../mission-impossible-configs";
import { E2EBases, Components } from "sc-automation-core";


class MissionImpossibleE2ESpec extends E2EBases.PortrailClassicGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [MissionImpossibleConfigs.choices[0], MissionImpossibleConfigs.choices[1]],
            gameConfiguration: MissionImpossibleConfigs,
            locators: Components.Portrail_Classic_Locators ,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
        };
        super(e2eOptions);
    }
}

new MissionImpossibleE2ESpec().start();
