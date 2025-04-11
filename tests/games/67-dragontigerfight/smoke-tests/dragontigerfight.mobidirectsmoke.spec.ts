import { L1MobiDirectLocators, L2MobiDirectLocators } from "../dragontigerfight-locators";
import { SmokeBases } from "sc-automation-core";
import { DragonTigerConfigs } from "../dragontigerfight-configs";

class DragonTigerFightSmokeSpec extends SmokeBases.MobiDirect {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: DragonTigerConfigs,
      locators: process.env.npm_config_project?.includes("l2") ? L2MobiDirectLocators : L1MobiDirectLocators,
      waitBetTimeout: 8000,
      placeBetChoices: process.env.npm_config_project?.includes("l2") ? ["l2dragon", "l2tiger"] : ["l1dragon", "l1tiger"],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1
    };

    super(smokeOptions);
  }

  protected gameGuideTests(): void {    
  }

}

new DragonTigerFightSmokeSpec().start();
