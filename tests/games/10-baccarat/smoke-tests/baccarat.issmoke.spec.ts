import { L1IsLocators,L2IsLocators  } from "../baccarat-locators";
import { BaccaratConfigs,Isconfigs } from "../baccarat-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: BaccaratConfigs,
      locators: process.env.npm_config_project?.includes("l2") ? L2IsLocators : L1IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: BaccaratConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
