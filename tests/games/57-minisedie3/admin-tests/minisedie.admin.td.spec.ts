import { MiniSedieLocators} from "../minisedie-locators";
import * as gameconfig from "../minisedie-configs";
import {Components, AdminBases } from "sc-automation-core";

class MiniSedieAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.MiniSedie3Configs.choices[1]],
      gameConfiguration: gameconfig.MiniSedie3Configs,
      locators: MiniSedieLocators,
      waitBetTimeout: 10000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

  protected SwitchToMainGame(): void {
    Components.admintest("Switch to main game", async () => {
      await this.game.waitForTimeout(2000);
      await this.game.clickLocator("closeguide",2000);
      await this.game.clickLocator("switchMainView", 3000);
      this.game.gameConfiguration.id = 57; 
    });
  }


  protected runScenario(): void {
    this.SwitchToMainGame();
    super.runScenario();
  }

}

new MiniSedieAdminSpec().start();

