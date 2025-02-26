import { GameLocators } from "../keno-east-locators";
import * as gameconfig from "../keno-east-configs";
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
      const from = {x: 1124, y: 288};
      const to = {x: 1124, y: 240};
      // Drags the mouse from a point
        await this.game.page.mouse.move(from.x, from.y);
        await this.game.page.mouse.down();
        await this.game.waitForTimeout(3000);
      // Drops the mouse to another point
      await this.game.page.mouse.move(to.x, to.y);
      await this.game.page.mouse.up();
      await this.game.waitForTimeout(3000);
      await this.game.page.screenshot({path: "screenshot4.png"});
      await this.game.clickLocator("switchMainView", 3000);
      this.game.gameConfiguration.id = 16; 
    });
  }


  protected runScenario(): void {
    this.SwitchToMainGame();
    super.runScenario();
  }
}

new KenoProMaxAdminSpec().start();
