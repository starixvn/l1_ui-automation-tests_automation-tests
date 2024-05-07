import { LuckyNextLocators } from "../lucky-next-locators";
import * as gameconfig from "../lucky-next-configs";
import { AdminBases } from "sc-automation-core";

class NGAdminSpec extends AdminBases.NumberTicketDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["under","over", "odd", "even"],
      gameConfiguration: gameconfig.LuckyNextConfigs,
      locators: LuckyNextLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount:  10, 
      multiPlaceBetChoices: ["even", "red4"],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }

}

new NGAdminSpec().start();

