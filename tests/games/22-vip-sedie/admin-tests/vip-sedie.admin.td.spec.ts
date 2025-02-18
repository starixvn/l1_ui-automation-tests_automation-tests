import { VipSedieLocators } from "../vip-sedie-locators";
import * as gameconfig from "../vip-sedie-configs";
import { AdminBases } from "sc-automation-core";

class SedieAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.VipSedieConfigs.choices[0]],
      gameConfiguration: gameconfig.VipSedieConfigs,
      locators: VipSedieLocators,
      waitBetTimeout: 10000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

}

new SedieAdminSpec().start();

