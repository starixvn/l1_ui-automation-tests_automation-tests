import { MobiLocators } from "../bigsmall-locators";
import { BigSmallConfigs } from "../bigsmall-configs";
import { SmokeBases } from "sc-automation-core";

let extConfigs = { ...BigSmallConfigs };
extConfigs.betBoard = false;
extConfigs.socketName = "gw";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: extConfigs,
      locators: MobiLocators,
      waitBetTimeout: 5000,
      placeBetChoices: extConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project.includes("l2") ? 50 : 10
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
