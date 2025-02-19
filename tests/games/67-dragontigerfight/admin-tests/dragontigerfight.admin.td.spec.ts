import { DragonTigerLocators } from "../dragontigerfight-locators";
import * as gameconfig from "../dragontigerfight-configs";
import { AdminBases } from "sc-automation-core";

class VipBaccaratAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["dragon"],
      gameConfiguration: gameconfig.DragonTigerConfigs,  
      locators: DragonTigerLocators,
      waitBetTimeout: 13000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

}

new VipBaccaratAdminSpec().start();

