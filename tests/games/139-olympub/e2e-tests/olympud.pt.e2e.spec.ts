import { olympubConfigs} from "../olympub-configs";
import { E2EBases, Components } from "sc-automation-core";

class PortrailOlympubE2ESpec extends E2EBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [olympubConfigs.choices[2]],
      gameConfiguration: olympubConfigs,
      locators: Components.BaseLocator.CascadingSlotLocatorsV3,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }
  
}

new PortrailOlympubE2ESpec().start();
