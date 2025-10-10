import { vivafiestaConfigs } from "../vivafiesta-configs";
import { SmokeBases, Components } from "sc-automation-core";

class vivafiestaSmokeSpec extends SmokeBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [vivafiestaConfigs.choices[0]],
      gameConfiguration: vivafiestaConfigs,
      locators: Components.BaseLocator.CascadingSlotLocatorsV3,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

}

new vivafiestaSmokeSpec().start();
