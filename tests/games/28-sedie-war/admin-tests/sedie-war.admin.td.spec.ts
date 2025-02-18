import { SedieWarLocators } from "../sedie-war-locators";
import * as gameconfig from "../sedie-war-configs";
import { AdminBases } from "sc-automation-core";

class SedieAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["playerEven"],
      gameConfiguration: gameconfig.SedieWarConfigs,
      locators: SedieWarLocators,
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

