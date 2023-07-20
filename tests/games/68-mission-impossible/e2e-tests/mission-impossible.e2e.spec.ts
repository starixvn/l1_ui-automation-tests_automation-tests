import { MissionImpossibleConfigs } from "../mission-impossible-configs";
import { E2EBases } from "sc-automation-core";
import {extMissionImpossibleLocators} from "./mission-impossible-locators" 


class MissionImpossibleE2ESpec extends E2EBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [MissionImpossibleConfigs.choices[0], MissionImpossibleConfigs.choices[1]],
            gameConfiguration: MissionImpossibleConfigs,
            locators: extMissionImpossibleLocators ,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
        };
        super(e2eOptions);
    }
}

new MissionImpossibleE2ESpec().start();
