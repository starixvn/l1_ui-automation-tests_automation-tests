import { WayToGoalLocators } from "../way-to-goal-locators";
import { WayToGoalConfigs } from "../way-to-goal-configs";
<<<<<<< HEAD
import { SmokeBases} from "sc-automation-core";


class WayToGoalSmokeSpec extends SmokeBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [WayToGoalConfigs.choices[0]],
            gameConfiguration: WayToGoalConfigs,
            locators: WayToGoalLocators,
            waitBetTimeout: 8000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };
        super(smokeOptions);
    }

=======
import { SmokeBases } from "sc-automation-core";

class WayToGoalSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [WayToGoalConfigs.choices[0]],
      gameConfiguration: WayToGoalConfigs,
      locators: WayToGoalLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }
>>>>>>> master
}

new WayToGoalSmokeSpec().start();
