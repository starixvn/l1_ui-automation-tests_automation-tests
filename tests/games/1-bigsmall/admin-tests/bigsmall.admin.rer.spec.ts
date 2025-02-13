import { BigSmallLocators } from "../bigsmall-locators";
import * as gameconfig from "../bigsmall-configs";
import { AdminBases } from "sc-automation-core";

class BigSmallAdminSpec extends AdminBases.RERGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.BigSmallConfigs.choices[1]],
      gameConfiguration: gameconfig.BigSmallConfigs,
      locators: BigSmallLocators,
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

new BigSmallAdminSpec().start();

