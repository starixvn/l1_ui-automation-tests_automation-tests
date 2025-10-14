import { fruitsamuraiConfigs} from "../fruitsamurai-configs";
import { SmokeBases, Components } from "sc-automation-core";

class fruitsamuraiSmokeSpec extends SmokeBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [fruitsamuraiConfigs.choices[0]],
      gameConfiguration: fruitsamuraiConfigs,
      locators: Components.BaseLocator.CascadingSlotLocatorsV3,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

}

new fruitsamuraiSmokeSpec().start();
