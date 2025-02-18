import { BigSmallLocators} from "../bigsmall-locators";
import * as gameconfig from "../bigsmall-configs";
import { AdminBases } from "sc-automation-core";

class BigSmallAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["big"],
      gameConfiguration: gameconfig.BigSmallConfigs,
      locators: BigSmallLocators,
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

new BigSmallAdminSpec().start();

