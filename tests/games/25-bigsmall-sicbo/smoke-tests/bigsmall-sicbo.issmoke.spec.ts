import { L1IsLocators,L2IsLocators  } from "../bigsmall-sicbo-locators";
import { BigSmallSicBoConfigs,Isconfigs } from "../bigsmall-sicbo-configs";
import { SmokeBases } from "sc-automation-core";

class SicBoSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: BigSmallSicBoConfigs,
      locators: process.env.npm_config_project?.includes("l2") ? L2IsLocators : L1IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: ["big"],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }
  
}

new SicBoSmokeSpec().start();
