import { seballLocators } from "../seball-locators";
import * as gameconfig  from "../seball-configs";
import { AdminBases } from "sc-automation-core";

class NGAdminSpec extends AdminBases.NumberTicketDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["odd", "even", "red2", "red3", "red4", "blue3", "blue4"],
      gameConfiguration: gameconfig.seballConfigs,
      locators: seballLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount:  10, 
      multiPlaceBetChoices: ["odd", "red4"],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }

}

new NGAdminSpec().start();

