import { MobiLocators } from "../bigsmall-locators";
import { BigSmallConfigs } from "../bigsmall-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    BigSmallConfigs.betBoard = false;
    BigSmallConfigs.socketName = "gw";
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: BigSmallConfigs,
      locators: MobiLocators,
      waitBetTimeout: 5000,
      placeBetChoices: BigSmallConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project.includes("l2") ? 50 : 10
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
