import { FanTanLocators } from "../fantan-locators";
import * as gameconfig from "../fantan-configs";
import { AdminBases } from "sc-automation-core";

class FanTanAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["even"],
      gameConfiguration: gameconfig.FanTanConfigs,  
      locators: FanTanLocators,
      waitBetTimeout: 15000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

}

new FanTanAdminSpec().start();

