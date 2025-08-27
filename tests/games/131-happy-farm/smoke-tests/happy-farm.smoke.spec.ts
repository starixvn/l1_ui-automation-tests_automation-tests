import { HappyFarmLocators } from "../happy-farm-locators";
import { HappyFarmConfigs} from "../happy-farm-configs";
import { SmokeBases, Components } from "sc-automation-core";

class HappyFarmSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [HappyFarmConfigs.choices[0]],
      gameConfiguration: HappyFarmConfigs,
      locators: HappyFarmLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

  protected betStakeLevelTests(): void {
    // no test
  }
}

new HappyFarmSmokeSpec().start();
