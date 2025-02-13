import { TurboOddEvenLocators } from "../turbo-oddeven-locators";
import * as gameconfig from "../turbo-oddeven-configs";
import { AdminBases } from "sc-automation-core";

class TurboOddEvenAdminSpec extends AdminBases.RERGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.TurboOddEvenConfigs.choices[1]],
      gameConfiguration: gameconfig.TurboOddEvenConfigs,
      locators: TurboOddEvenLocators,
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

new TurboOddEvenAdminSpec().start();

