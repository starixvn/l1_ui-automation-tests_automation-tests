import { VipBaccaratLocators } from "../vipbaccarat-locators";
import { VipBaccaratConfigs } from "../vipbaccarat-configs";
import { SmokeBases } from "sc-automation-core";

class VipBaccaratSmokeSpec extends SmokeBases.TableGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [VipBaccaratConfigs.choices[3]],
            gameConfiguration: VipBaccaratConfigs,
            placeBetAmount: process.env.npm_config_project === "vg"? 50 : 10 ,
            locators: VipBaccaratLocators,
            waitBetTimeout: 9000,
            snapshotFolderPath: __filename,
        };
        super(smokeOptions);
    }
}
new VipBaccaratSmokeSpec().start();
