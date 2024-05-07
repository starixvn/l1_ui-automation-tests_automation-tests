import { BacNumbersLocators } from "../bac-numbers-locators";
import * as gameconfig from "../bac-numbers-configs";
import { AdminBases } from "sc-automation-core";

class NGAdminSpec extends AdminBases.NumberTicketDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["player","banker","tie"],
      gameConfiguration: gameconfig.BacNumbersConfigs,
      locators: BacNumbersLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 10, 
      multiPlaceBetChoices: ["even", "red4"],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }

}

new NGAdminSpec().start();

