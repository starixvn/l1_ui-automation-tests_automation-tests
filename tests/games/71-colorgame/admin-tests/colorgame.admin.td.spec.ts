import { ColorGameLocators } from "../colorgame-locators";
import * as gameconfig from "../colorgame-configs";
import { AdminBases } from "sc-automation-core";

class ColorGameAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["yellow"],
      gameConfiguration: gameconfig.ColorGameConfigs,
      locators: ColorGameLocators,
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
