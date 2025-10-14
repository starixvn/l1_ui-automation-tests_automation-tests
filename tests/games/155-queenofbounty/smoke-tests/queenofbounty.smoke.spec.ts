import { queenofbountyConfigs } from "../queenofbounty-configs";
import { SmokeBases, Components } from "sc-automation-core";

class queenofbountySmokeSpec extends SmokeBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [queenofbountyConfigs.choices[0]],
      gameConfiguration: queenofbountyConfigs,
      locators: Components.BaseLocator.CascadingSlotLocatorsV3,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

}

new queenofbountySmokeSpec().start();
