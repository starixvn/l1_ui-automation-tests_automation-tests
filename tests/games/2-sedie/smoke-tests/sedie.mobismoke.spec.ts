import { MobiLocators } from "../sedie-locators";
import { SedieConfigs } from "../sedie-configs";
import { SmokeBases } from "sc-automation-core";

let extConfigs = { ...SedieConfigs };
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
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1,
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
