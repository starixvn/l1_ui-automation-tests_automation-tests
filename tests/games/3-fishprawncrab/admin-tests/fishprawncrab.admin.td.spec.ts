import { FPCLocators} from "../fishprawncrab-locators";
import * as gameconfig from "../fishprawncrab-configs";
import { AdminBases } from "sc-automation-core";
let env = process.env.npm_config_env;

class FPCAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["stag"],
      gameConfiguration: gameconfig.FPCConfigs,
      locators: FPCLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
        env?.includes("local") ? gameconfig[`AdminDataSet_local`] : gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }
}

new FPCAdminSpec().start();

