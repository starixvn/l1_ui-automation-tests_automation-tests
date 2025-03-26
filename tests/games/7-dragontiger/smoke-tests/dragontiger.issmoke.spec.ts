import { L1IsLocators,L2IsLocators  } from "../dragontiger-locators";
import { DragonTigerConfigs,Isconfigs } from "../dragontiger-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: DragonTigerConfigs,
      locators: process.env.npm_config_project?.includes("l2") ? L2IsLocators : L1IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: DragonTigerConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount:  process.env.npm_config_project?.includes("l2") ? 10 : 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
