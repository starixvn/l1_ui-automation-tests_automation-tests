import { WayToGoalConfigs } from "../way-to-goal-configs";
import { E2EBases,Components } from "sc-automation-core";

class WayToGoalE2ESpec extends E2EBases.PortrailClassicGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [WayToGoalConfigs.choices[0]],
      gameConfiguration: WayToGoalConfigs,
      locators: Components.Portrail_Classic_Locators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

  async clickSpinButton() {
    await this.game.waitForTimeout(2000);
    await this.game.page.mouse.click(640, 570);
    await this.game.waitForTimeout(200);
   }

  
}

new WayToGoalE2ESpec().start();
