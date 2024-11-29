import { MobiLocators } from "../threecards-locators";
import { ThreeCardsConfigs } from "../threecards-configs";
import { SmokeBases } from "sc-automation-core";

let extConfigs = { ...ThreeCardsConfigs };
extConfigs.socketName = "gw";

class SmokeSpec extends SmokeBases.MobiGameBase {
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

new SmokeSpec().start();
