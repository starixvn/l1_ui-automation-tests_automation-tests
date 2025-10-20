
import { wukongsrevengeConfigs } from "../wukongsrevenge-configs";
import { SmokeBases, Components } from "sc-automation-core";

class wukongsrevengeSmokeSpec extends SmokeBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [wukongsrevengeConfigs.choices[0]],
      gameConfiguration: wukongsrevengeConfigs,
      locators: Components.Portrail_Cascading_Locators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

}

new wukongsrevengeSmokeSpec().start();
