import { bigbassfishingConfigs } from "../bigbassfishing-configs.js";
import { E2EBases, Components } from "sc-automation-core";

class PortrailbigbassfishingE2ESpec extends E2EBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [bigbassfishingConfigs.choices[2]],
      gameConfiguration: bigbassfishingConfigs,
      locators: Components.BaseLocator.CascadingSlotLocatorsV3,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }
  
}

new PortrailbigbassfishingE2ESpec().start();
