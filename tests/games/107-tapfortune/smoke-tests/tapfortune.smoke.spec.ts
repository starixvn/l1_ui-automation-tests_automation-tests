import { tapfortuneLocators } from "../tapfortune-locators";
import { tapfortuneConfigs } from "../tapfortune-configs";
import { SmokeBases } from "sc-automation-core";

class tapfortuneSmokeSpec extends SmokeBases.TapGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [""],
      gameConfiguration: tapfortuneConfigs,
      locators: tapfortuneLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 20 : 1,
    };
    super(smokeOptions);
  }
}
new tapfortuneSmokeSpec().start();
