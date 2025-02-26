import { GameLocators } from "../bigsmall-city-locators";
import * as gameconfig from "../bigsmall-city-configs";
import { AdminBases, Components } from "sc-automation-core";

class MonteCarloAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["small"],
      gameConfiguration: gameconfig.BigSmallCity4Configs,
      locators: GameLocators,
      waitBetTimeout: 6000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`MonteCarloAdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

  protected SwitchToMainGame(): void {
    Components.admintest("Switch to main game", async () => {
      await this.game.clickLocator("closeguide",2000);
      await this.game.clickLocator("switchMonteCarlo", 3000);
      this.game.gameConfiguration.id = 55; 
    });
  }


  protected runScenario(): void {
    this.SwitchToMainGame();
    super.runScenario();
  }
}


new MonteCarloAdminSpec().start();