import { DragonTigerConfigs } from "../dragontigerfight-configs";
import { E2EBases } from "sc-automation-core";
import { extDragonTigerFightLocators } from "./dragontigerfight-locators";


class DragonTigerFightE2ESpec extends E2EBases.TableGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: E2EBases.IBaseOptions = {
            placeBetChoices: DragonTigerConfigs.choices,
            gameConfiguration: DragonTigerConfigs,
            locators: extDragonTigerFightLocators ,
            waitBetTimeout: 8000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
        };
        super(e2eOptions);
    }
}

new DragonTigerFightE2ESpec().start();
