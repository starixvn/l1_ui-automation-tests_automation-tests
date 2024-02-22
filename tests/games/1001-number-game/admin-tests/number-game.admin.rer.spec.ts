import { numbergameLocators } from "../number-game-locators";
import * as gameconfig from "../number-game-configs";
import { AdminBases } from "sc-automation-core";

class NGAdminSpec extends AdminBases.RERGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.numbergameConfigs.choices[1]],
      gameConfiguration: gameconfig.numbergameConfigs,
      locators: numbergameLocators,
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

new NGAdminSpec().start();

