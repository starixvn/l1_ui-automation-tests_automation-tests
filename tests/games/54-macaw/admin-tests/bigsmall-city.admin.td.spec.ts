import { GameLocators } from "../bigsmall-city-locators";
import * as gameconfig from "../bigsmall-city-configs";
import { AdminBases, Components } from "sc-automation-core";

class MacawAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["small"],
      gameConfiguration: gameconfig.BigSmallCity3Configs,
      locators: GameLocators,
      waitBetTimeout: 6000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`MacawAdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

  protected SwitchToMainGame(): void {
    Components.admintest("Switch to main game", async () => {
      await this.game.clickLocator("closeguide",2000);
      await this.game.clickLocator("switchMacaw", 3000);
      this.game.gameConfiguration.id = 54; 
    });
  }


  protected runScenario(): void {
    this.SwitchToMainGame();
    super.runScenario();
  }
}


new MacawAdminSpec().start();
