import { TurboBigSmallLocators} from "../turbobigsmall-locators";
import * as gameconfig from "../turbobigsmall-configs";
import { AdminBases } from "sc-automation-core";

class TurboBigSmallAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["small"],
      gameConfiguration: gameconfig.TurboBigSmallConfigs,
      locators: TurboBigSmallLocators,
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

new TurboBigSmallAdminSpec().start();

