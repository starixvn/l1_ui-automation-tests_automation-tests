import { GameLocators } from "../mega-keno2-locators";
import * as gameconfig from "../mega-keno2-configs";
import { AdminBases, Components } from "sc-automation-core";

class KenoProMaxAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["big"],
      gameConfiguration: gameconfig.KenoConfigs,
      locators: GameLocators,
      waitBetTimeout: 13000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

  async fillGameResult(newTab: any, data: object) {
    for (const [key, value] of Object.entries(data)) {
      await newTab.click(key);
      await newTab.waitForTimeout(300);
      for (const item of value) {
        await newTab.click(item);
        await newTab.waitForTimeout(300);
      }
      await newTab.click("//button[text()='Submit']");
      await newTab.waitForTimeout(200);
    }
    await newTab.close();
  }

  protected SwitchToMainGame(): void {
    Components.admintest("Switch to main game", async () => {
      await this.game.clickLocator("switchMainView", 3000);
      this.game.gameConfiguration.id = 53; 
    });
  }


  protected runScenario(): void {
    this.SwitchToMainGame();
    super.runScenario();
  }
}

new KenoProMaxAdminSpec().start();
