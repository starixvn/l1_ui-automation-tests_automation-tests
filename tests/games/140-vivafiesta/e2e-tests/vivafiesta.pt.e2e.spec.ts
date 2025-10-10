import { vivafiestaConfigs } from "../vivafiesta-configs.js";
import { E2EBases, Components } from "sc-automation-core";

class PortrailvivafiestaE2ESpec extends E2EBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [vivafiestaConfigs.choices[2]],
      gameConfiguration: vivafiestaConfigs,
      locators: Components.BaseLocator.CascadingSlotLocatorsV3,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }
  
}

new PortrailvivafiestaE2ESpec().start();
