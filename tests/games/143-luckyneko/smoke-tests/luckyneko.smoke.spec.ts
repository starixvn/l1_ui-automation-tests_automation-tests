import { luckynekoConfigs } from "../luckyneko-configs";
import { SmokeBases, Components } from "sc-automation-core";

class luckynekoSmokeSpec extends SmokeBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [luckynekoConfigs.choices[0]],
      gameConfiguration: luckynekoConfigs,
      locators: Components.BaseLocator.CascadingSlotLocatorsV3,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

}

new luckynekoSmokeSpec().start();
