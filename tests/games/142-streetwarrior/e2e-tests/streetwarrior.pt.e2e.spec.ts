import { streetwarriorConfigs } from "../streetwarrior-configs.js";
import { E2EBases, Components } from "sc-automation-core";

class PortrailstreetwarriorE2ESpec extends E2EBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [streetwarriorConfigs.choices[2]],
      gameConfiguration: streetwarriorConfigs,
      locators: Components.BaseLocator.CascadingSlotLocatorsV3,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }
  
}

new PortrailstreetwarriorE2ESpec().start();
