import { WildWestMostWantedLocators} from "../wildwestmostwanted-locators.ts";
import * as gameconfig from"../wildwestmostwanted-configs.ts";
import { AdminBases } from "sc-automation-core";

class WildWestMostWantedAdminSpec extends AdminBases.CascadingAdminBase {
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

new WildWestMostWantedAdminSpec().start();



