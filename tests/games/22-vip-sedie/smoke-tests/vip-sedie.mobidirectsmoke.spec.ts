import {
  L1MobiDirectLocators,
  L2MobiDirectLocators,
} from "../vip-sedie-locators";
import { VipSedieConfigs } from "../vip-sedie-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "sc-automation-core/lib/expects";

class VipSedieSmokeSpec extends SmokeBases.MobiDirect {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: VipSedieConfigs,
      locators: process.env.npm_config_project?.includes("l2")
        ? L2MobiDirectLocators
        : L1MobiDirectLocators,
      waitBetTimeout: 9000,
      placeBetChoices: process.env.npm_config_project?.includes("l2") ? ["l2even", "l2odd"] : ["l1even", "l1odd"],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 50 : 10,
    };

    super(smokeOptions);
  }
  protected gameGuideTests(): void {  
  }
}

new VipSedieSmokeSpec().start();
