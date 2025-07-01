import { WildWestMostWantedLocators} from "../wild-west-most-wanted-locators";
import * as gameconfig from"../wild-west-most-wanted-configs";
import { AdminBases } from "sc-automation-core";

// class AladdinAdminSpec extends AdminBases.CascadingAdminBase {
//   /**
//    *
//    */
//   constructor() {
//     const adminOptions: AdminBases.IBaseOptions = {
//       placeBetChoices: [gameconfig.AladdinConfigs.choices[0]],
//       gameConfiguration: gameconfig.AladdinConfigs,
//       locators: AladdinLocators,
//       waitBetTimeout: 8000,
//       snapshotFolderPath: __filename,
//       placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2, 
//       multiPlaceBetChoices: [],
//       Adminconfiguration:
//       gameconfig[`AdminDataSet_` + process.env.npm_config_env],
//     };
//     super(adminOptions);
//   }

// }

class MahjongWinsAdminTDSpec extends AdminBases.CascadingBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.WildWestMostWantedConfigs.choices[0]],
      gameConfiguration: gameconfig.WildWestMostWantedConfigs,
      locators: WildWestMostWantedLocators,
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



