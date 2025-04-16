import { IsLocators } from "../bigsmall-locators";
import { BigSmallConfigs,Isconfigs } from "../bigsmall-configs";
import { SmokeBases } from "sc-automation-core";


class BigSmallSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    BigSmallConfigs.betBoard = false;
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: BigSmallConfigs,
      locators: IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: ["big"],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }
}

new BigSmallSmokeSpec().start();
