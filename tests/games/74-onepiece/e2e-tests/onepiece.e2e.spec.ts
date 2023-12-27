import { OnePieceConfigs } from "../onepiece-configs";
import { E2EBases } from "sc-automation-core";
import {extOnePieceLocators} from "./onepiece-locators" 


class OnePieceE2ESpec extends E2EBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [OnePieceConfigs.choices[0], OnePieceConfigs.choices[1]],
            gameConfiguration: OnePieceConfigs,
            locators: extOnePieceLocators ,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
        };
        super(e2eOptions);
    }
}

new OnePieceE2ESpec().start();
