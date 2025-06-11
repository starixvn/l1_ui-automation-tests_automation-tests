import { AladdinLocators} from "../aladdin-locators";
import * as gameconfig from"../aladdin-configs";
import { AdminBases } from "sc-automation-core";

class AladdinAdminSpec extends AdminBases.CascadingAdminBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.AladdinConfigs.choices[0]],
      gameConfiguration: gameconfig.AladdinConfigs,
      locators: AladdinLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
      gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

}

class AladdinAdminTDSpec extends AdminBases.CascadingBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.AladdinConfigs.choices[0]],
      gameConfiguration: gameconfig.AladdinConfigs,
      locators: AladdinLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

}

new AladdinAdminSpec().start();
new AladdinAdminTDSpec().start();



