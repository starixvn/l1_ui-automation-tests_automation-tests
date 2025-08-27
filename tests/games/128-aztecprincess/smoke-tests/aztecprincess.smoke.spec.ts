import { aztecprincessLocators } from "../aztecprincess-locators";
import { aztecprincessConfigs } from "../aztecprincess-configs";
import { SmokeBases, Components } from "sc-automation-core";

class aztecprincessSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [aztecprincessConfigs.choices[0]],
      gameConfiguration: aztecprincessConfigs,
      locators: aztecprincessLocators,
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

new aztecprincessSmokeSpec().start();
