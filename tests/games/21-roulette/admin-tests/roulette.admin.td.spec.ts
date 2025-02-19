import { RouletteLocators } from "../roulette-locators";
import * as gameconfig from "../roulette-configs";
import { AdminBases } from "sc-automation-core";

class VipBaccaratAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["even"],
      gameConfiguration: gameconfig.RouletteConfigs,  
      locators: RouletteLocators,
      waitBetTimeout: 7000,
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

