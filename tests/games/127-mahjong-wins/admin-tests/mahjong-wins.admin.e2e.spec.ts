import { MahjongWinsLocators} from "../mahjong-wins-locators";
import * as gameconfig from"../mahjong-wins-configs";
import { AdminBases } from "sc-automation-core";

class AladdinAdminSpec extends AdminBases.CascadingAdminBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.MahjongWinsConfigs.choices[0]],
      gameConfiguration: gameconfig.MahjongWinsConfigs,
      locators: MahjongWinsLocators,
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

class MahjongWinsAdminTDSpec extends AdminBases.CascadingBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.MahjongWinsConfigs.choices[0]],
      gameConfiguration: gameconfig.MahjongWinsConfigs,
      locators: MahjongWinsLocators,
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

// new MahjongWinsAdminSpec().start();
new MahjongWinsAdminTDSpec().start();



