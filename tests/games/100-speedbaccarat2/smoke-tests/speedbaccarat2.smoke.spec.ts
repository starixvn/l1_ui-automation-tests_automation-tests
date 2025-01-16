import { SpeedBaccarat2Locators } from "../speedbaccarat2-locators";
import { SpeedBaccarat2Configs } from "../speedBaccarat2-configs";
import { SmokeBases } from "sc-automation-core";

class SpeedBaccarat2SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [SpeedBaccarat2Configs.choices[0]],
      gameConfiguration: SpeedBaccarat2Configs,
      locators: SpeedBaccarat2Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 20 : 2,
    };
    super(smokeOptions);
  }

}

new SpeedBaccarat2SmokeSpec().start();
