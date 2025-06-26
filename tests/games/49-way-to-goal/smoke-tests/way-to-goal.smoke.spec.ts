import { WayToGoalLocators } from "../way-to-goal-locators";
import { WayToGoalConfigs } from "../way-to-goal-configs";
import { SmokeBases } from "sc-automation-core";

class WayToGoalSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ['25'],
      gameConfiguration: WayToGoalConfigs,
      locators: WayToGoalLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 0.4,
    };
    super(smokeOptions);
  }
}

new WayToGoalSmokeSpec().start();
