import { fruitsamuraiConfigs} from "../fruitsamurai-configs";
import { E2EBases, Components } from "sc-automation-core";

class PortrailfruitsamuraiE2ESpec extends E2EBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [fruitsamuraiConfigs.choices[2]],
      gameConfiguration: fruitsamuraiConfigs,
      locators: Components.BaseLocator.CascadingSlotLocatorsV3,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }
  
}

new PortrailfruitsamuraiE2ESpec().start();
