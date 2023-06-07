import { MagicForestLocators } from "../magic-forest-locators";
import { MagicForestConfigs } from "../magic-forest-configs";
import { SmokeBases } from "sc-automation-core";

class MagicForestGameGuideSpec extends SmokeBases.GameGuideBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: ["1", "25"],
            gameConfiguration: MagicForestConfigs,
            locators: MagicForestLocators,
            waitBetTimeout: 1000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };
        super(smokeOptions);
    }
}

new MagicForestGameGuideSpec().start();
