import { BaccaratLocators} from "../baccarat-locators";
import * as gameconfig from "../baccarat-configs";
import { AdminBases } from "sc-automation-core";

class BaccaratAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["player"],
      gameConfiguration: gameconfig.BaccaratConfigs,
      locators: BaccaratLocators,
      waitBetTimeout: 12000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }
  
}

new BaccaratAdminSpec().start();

