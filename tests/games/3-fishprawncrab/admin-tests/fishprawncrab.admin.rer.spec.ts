import { FPCLocators } from "../fishprawncrab-locators";
import * as gameconfig from "../fishprawncrab-configs";
import { AdminBases } from "sc-automation-core";

class FPCAdminSpec extends AdminBases.RERGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.FPCConfigs.choices[1]],
      gameConfiguration: gameconfig.FPCConfigs,
      locators: FPCLocators,
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

new FPCAdminSpec().start();

