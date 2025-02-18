import { SpecialSedieLocators } from "../special-sedie-locators";
import * as gameconfig from "../special-sedie-configs";
import { AdminBases } from "sc-automation-core";

class SedieAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.SpecialSedieConfigs.choices[0]],
      gameConfiguration: gameconfig.SpecialSedieConfigs,
      locators: SpecialSedieLocators,
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

new SedieAdminSpec().start();

