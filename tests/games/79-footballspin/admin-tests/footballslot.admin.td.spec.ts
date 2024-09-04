import { FootballSpinLocators } from "../footballspin-locators";
import * as gameconfig from "../footballspin-configs";
import { AdminBases } from "sc-automation-core";

class FootballSpinAdminSpec extends AdminBases.TableTicketDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.FootballSpinConfigs.choices[1],gameconfig.FootballSpinConfigs.choices[0]],
      gameConfiguration: gameconfig.FootballSpinConfigs,
      locators: FootballSpinLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: ["draw", "home"],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }

}

new FootballSpinAdminSpec().start();



