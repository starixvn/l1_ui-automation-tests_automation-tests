import { VipBaccaratLocators } from "../vipbaccarat-locators";
import { VipBaccaratConfigs } from "../vipbaccarat-configs";
import { SmokeBases } from "sc-automation-core";

class VipBaccaratSmokeSpec extends SmokeBases.TableGameBase {
<<<<<<< HEAD
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
=======
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [VipBaccaratConfigs.choices[3]],
      gameConfiguration: VipBaccaratConfigs,
      placeBetAmount: process.env.npm_config_project === "l2" ? 50 : 10,
      locators: VipBaccaratLocators,
      waitBetTimeout: 9000,
      snapshotFolderPath: __filename,
    };
    super(smokeOptions);
  }
>>>>>>> master
}
new VipBaccaratSmokeSpec().start();
