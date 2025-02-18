import { MiniSedieLocators} from "../minisedie-locators";
import * as gameconfig from "../minisedie-configs";
import { AdminBases } from "sc-automation-core";

class MiniSedieAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.MiniSedie1Configs.choices[1]],
      gameConfiguration: gameconfig.MiniSedie1Configs,
      locators: MiniSedieLocators,
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

new MiniSedieAdminSpec().start();

