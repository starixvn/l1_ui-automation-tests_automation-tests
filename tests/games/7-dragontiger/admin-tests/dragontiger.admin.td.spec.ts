import { DragonTigerLocators} from "../dragontiger-locators";
import * as gameconfig from "../dragontiger-configs";
import { AdminBases } from "sc-automation-core";

class DragonTigerAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.DragonTigerConfigs.choices[0]],
      gameConfiguration: gameconfig.DragonTigerConfigs,
      locators: DragonTigerLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

}

new DragonTigerAdminSpec().start();

