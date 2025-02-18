import { VIPFPCLocators } from "../vip-fishprawncrab-locators";
import * as gameconfig from "../vip-fishprawncrab-configs";
import { AdminBases } from "sc-automation-core";

class VipBaccaratAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["stag"],
      gameConfiguration: gameconfig.VIPFPCConfigs,  
      locators: VIPFPCLocators,
      waitBetTimeout: 13000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 100 : 10, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

}

new VipBaccaratAdminSpec().start();

