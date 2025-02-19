import { BigSmallSicBoLocators } from "../bigsmall-sicbo-locators";
import * as gameconfig from "../bigsmall-sicbo-configs";
import { AdminBases } from "sc-automation-core";

class VipBaccaratAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["small"],
      gameConfiguration: gameconfig.BigSmallSicBoConfigs,  
      locators: BigSmallSicBoLocators,
      waitBetTimeout: 12000,
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

