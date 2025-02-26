import { GameLocators } from "../bigsmall-city-locators";
import * as gameconfig from "../bigsmall-city-configs";
import { AdminBases, Components } from "sc-automation-core";

class MarinaBayAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["small"],
      gameConfiguration: gameconfig.BigSmallCity2Configs,
      locators: GameLocators,
      waitBetTimeout: 6000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`MarinaBayAdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

  protected SwitchToMainGame(): void {
    Components.admintest("Switch to main game", async () => {
      await this.game.clickLocator("closeguide",2000);
      await this.game.clickLocator("switchMarinaBay", 3000);
      this.game.gameConfiguration.id = 51; 
    });
  }


  protected runScenario(): void {
    this.SwitchToMainGame();
    super.runScenario();
  }
}

new MarinaBayAdminSpec().start();
