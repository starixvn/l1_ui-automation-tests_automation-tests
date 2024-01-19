import { dragonballLocators } from "../dragonball-locators";
import { dragonballConfigs } from "../dragonball-configs";
import { SmokeBases } from "sc-automation-core";

class dragonballSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["1", "25"],
      gameConfiguration: dragonballConfigs,
      locators: dragonballLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }
}

new dragonballSmokeSpec().start();
