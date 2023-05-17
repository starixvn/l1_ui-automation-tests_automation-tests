import { FourGuardiansLocators } from "./four-guardians-locators";
import { FourGuardiansConfigs } from "../four-guardians-configs";
import { SmokeBases } from "sc-automation-core";

class FourGuardiansSmokeSpec extends SmokeBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: ["1","25"],
            gameConfiguration: FourGuardiansConfigs,
            locators: FourGuardiansLocators,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };
        super(smokeOptions);
    }

}

new FourGuardiansSmokeSpec().start();
