import { luckythreeLocators } from "../lucky-three-locators";
import * as gameconfig  from "../lucky-three-configs";
import { AdminBases } from "sc-automation-core";

class NGAdminSpec extends AdminBases.NumberRERGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["odd", "even", "red2", "red3", "red4", "blue3", "blue4"],
      gameConfiguration:  gameconfig.luckythreeConfigs,
      locators: luckythreeLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: 10, 
      multiPlaceBetChoices: ["odd", "red4"],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }

}

new NGAdminSpec().start();

