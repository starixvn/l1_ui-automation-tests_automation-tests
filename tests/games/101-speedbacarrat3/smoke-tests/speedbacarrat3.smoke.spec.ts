import { speedbacarrat3Locators } from "../speedbacarrat3-locators";
import { speedbacarrat3Configs } from "../speedbacarrat3-configs";
import { SmokeBases } from "sc-automation-core";


class speedbacarrat3SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [speedbacarrat3Configs.choices[0]],
      gameConfiguration: speedbacarrat3Configs,
      locators: speedbacarrat3Locators,
      waitBetTimeout: 11500,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 50 : 5,
    };
    super(smokeOptions);
  }

}

new speedbacarrat3SmokeSpec().start();
