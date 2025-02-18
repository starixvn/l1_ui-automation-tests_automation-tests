import { SedieLocators } from "../sedie-locators";
import * as gameconfig from "../sedie-configs";
import { AdminBases } from "sc-automation-core";

class SedieAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.SedieConfigs.choices[1]],
      gameConfiguration: gameconfig.SedieConfigs,
      locators: SedieLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: ["even", "red4"],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

}

new SedieAdminSpec().start();

