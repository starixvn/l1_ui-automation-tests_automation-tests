import { GameLocators } from "../bigsmall-city-locators";
import * as gameconfig from "../bigsmall-city-configs";
import { AdminBases, Components } from "sc-automation-core";

class LasVegasAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["small"],
      gameConfiguration: gameconfig.BigSmallCity1Configs,
      locators: GameLocators,
      waitBetTimeout: 6000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`LasvegasAdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

  protected runScenario(): void {
    super.runScenario();
  }
}

new LasVegasAdminSpec().start();
