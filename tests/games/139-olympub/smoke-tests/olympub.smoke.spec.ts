import { olympubLocators } from "../olympub-locators";
import { olympubConfigs } from "../olympub-configs";
import { SmokeBases } from "sc-automation-core";

class olympubSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [olympubConfigs.choices[0]],
      
      gameConfiguration: olympubConfigs,
      locators: olympubLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

  protected betStakeLevelTests(): void {
    // no test
  }
}

new olympubSmokeSpec().start();
