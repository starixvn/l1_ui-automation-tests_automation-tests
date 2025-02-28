import { pontoonLocators } from "../pontoon-locators";
import * as gameconfig from "../pontoon-configs";
import { AdminBases } from "sc-automation-core";

class ColorGameAdminSpec extends AdminBases.CardBetDetailsGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["2"],
      gameConfiguration: gameconfig.pontoonConfigs,
      locators: pontoonLocators,
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

new ColorGameAdminSpec().start();
