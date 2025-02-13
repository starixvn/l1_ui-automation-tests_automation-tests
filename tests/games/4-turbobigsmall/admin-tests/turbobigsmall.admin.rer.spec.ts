import { TurboBigSmallLocators } from "../turbobigsmall-locators";
import * as gameconfig from "../turbobigsmall-configs";
import { AdminBases } from "sc-automation-core";

class TurboBigSmallAdminSpec extends AdminBases.RERGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.TurboBigSmallConfigs.choices[1]],
      gameConfiguration: gameconfig.TurboBigSmallConfigs,
      locators: TurboBigSmallLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: ["even", "red4"],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }

  protected TC6(): void {
    // not offer multiple choices
}

}

new TurboBigSmallAdminSpec().start();

