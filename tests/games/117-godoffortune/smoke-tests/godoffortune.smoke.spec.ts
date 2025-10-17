import { GodOfFortuneConfigs } from "../godoffortune-configs";
import { SmokeBases , Components} from "sc-automation-core";

class GodOfFortuneSmokeSpec extends SmokeBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [GodOfFortuneConfigs.choices[0]],
      gameConfiguration: GodOfFortuneConfigs,
      locators: Components.BaseLocator.CascadingSlotLocatorsV3,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

}

new GodOfFortuneSmokeSpec().start();
