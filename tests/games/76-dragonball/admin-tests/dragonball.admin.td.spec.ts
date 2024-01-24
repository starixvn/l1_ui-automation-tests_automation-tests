import { dragonballLocators } from "../dragonball-locators";
import * as gameconfig from "../dragonball-configs";
import { AdminBases } from "sc-automation-core";

class DragonBallAdminSpec extends AdminBases.SlotTicketDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["1"],
      gameConfiguration: gameconfig.dragonballConfigs,
      locators: dragonballLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: ["1", "2"],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }

}

new DragonBallAdminSpec().start();

