import { VipBaccaratLocators } from "../vipbaccarat-locators";
import * as gameconfig from "../vipbaccarat-configs";
import { AdminBases } from "sc-automation-core";

class VipBaccaratAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["player"],
      gameConfiguration: gameconfig.VipBaccaratConfigs,
      locators: VipBaccaratLocators,
      waitBetTimeout: 15000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 50 : 10, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

}

new VipBaccaratAdminSpec().start();

