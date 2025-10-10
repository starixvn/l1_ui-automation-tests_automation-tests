import { poseidonsrealmConfigs} from "../poseidonsrealm-configs";
import { E2EBases, Components } from "sc-automation-core";

class PortrailposeidonsrealmE2ESpec extends E2EBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [poseidonsrealmConfigs.choices[2]],
      gameConfiguration: poseidonsrealmConfigs,
      locators: Components.BaseLocator.CascadingSlotLocatorsV3,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }
  
}

new PortrailposeidonsrealmE2ESpec().start();
