import { HappyFarmLocators} from "../happy-farm-locators";
import * as gameconfig from"../happy-farm-configs";
import { AdminBases } from "sc-automation-core";



class HappyFarmAdminTDSpec extends AdminBases.CascadingBetDetailGameBase {
 
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.HappyFarmConfigs.choices[0]],
      gameConfiguration: gameconfig.HappyFarmConfigs,
      locators: HappyFarmLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

}

new HappyFarmAdminTDSpec().start();



