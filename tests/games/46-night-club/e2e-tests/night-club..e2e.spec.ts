import { NightClubConfigs } from "../night-club-configs";
import { E2EBases,Components } from "sc-automation-core";

class NightClubE2ESpec extends E2EBases.PortrailClassicGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [NightClubConfigs.choices[0], NightClubConfigs.choices[1]],
            gameConfiguration: NightClubConfigs,
            locators:  Components.Portrail_Classic_Locators            ,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
        };
        super(e2eOptions);
    }

}

new NightClubE2ESpec().start();
