import { wukongsrevengeConfigs} from "../wukongsrevenge-configs";
import { E2EBases ,Components} from "sc-automation-core";

class PortrailwukongsrevengeE2ESpec extends E2EBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [wukongsrevengeConfigs.choices[2]],
      gameConfiguration: wukongsrevengeConfigs,
      locators: Components.BaseLocator.CascadingSlotLocatorsV3,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }
  
}

new PortrailwukongsrevengeE2ESpec().start();
