import { bigbassfishingConfigs } from "../bigbassfishing-configs";
import { SmokeBases, Components } from "sc-automation-core";

class bigbassfishingSmokeSpec extends SmokeBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [bigbassfishingConfigs.choices[0]],
      gameConfiguration: bigbassfishingConfigs,
      locators: Components.Portrail_Cascading_Locators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

}

new bigbassfishingSmokeSpec().start();
