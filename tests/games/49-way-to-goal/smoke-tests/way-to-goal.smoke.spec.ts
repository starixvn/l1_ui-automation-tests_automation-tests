import { WayToGoalConfigs } from "../way-to-goal-configs";
import { SmokeBases , Components} from "sc-automation-core";

class WayToGoalSmokeSpec extends SmokeBases.PortrailClassicGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ['25'],
      gameConfiguration: WayToGoalConfigs,
      locators: Components.Portrail_Classic_Locators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 0.02 : 0.4,
    };
    super(smokeOptions);
  }
  async clickSpinButton() {
    await this.game.waitForTimeout(2000);
    await this.game.page.mouse.click(640, 570);
    await this.game.waitForTimeout(200);
   }
}

new WayToGoalSmokeSpec().start();
