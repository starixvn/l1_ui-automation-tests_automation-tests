import { BandarQiuQiuLocators } from "../bandar-qiu-qiu-locators";
import * as gameconfig from "../bandar-qiu-qiu-configs";
import { AdminBases} from "sc-automation-core";

class BandarQiuQiuSmokeSpec extends AdminBases.RERGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.BandarQiuQiuConfigs.choices[0]],
      gameConfiguration: gameconfig.BandarQiuQiuConfigs,
      locators: BandarQiuQiuLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: ["spade","heart"],
      Adminconfiguration: gameconfig[`AdminDataSet_`+process.env.npm_config_env],
    };

    super(adminOptions);
  }

}

new BandarQiuQiuSmokeSpec().start();


