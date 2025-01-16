import { SpeedBaccaratLocators } from "../speedbaccarat-locators";
import { SpeedBaccaratConfigs } from "../speedbaccarat-configs";
import { SmokeBases } from "sc-automation-core";

class SpeedBaccaratSmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [SpeedBaccaratConfigs.choices[0]],
      gameConfiguration: SpeedBaccaratConfigs,
      locators: SpeedBaccaratLocators,
      waitBetTimeout: 11500,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }

}

new SpeedBaccaratSmokeSpec().start();
