import { Baccarat3Locators } from "../Baccarat3-locators";
import { Baccarat3Configs } from "../Baccarat3-configs";
import { SmokeBases } from "sc-automation-core";

class Baccarat3SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [Baccarat3Configs.choices[0]],
      gameConfiguration: Baccarat3Configs,
      locators: Baccarat3Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 20 : 2,
    };
    super(smokeOptions);
  }

}

new Baccarat3SmokeSpec().start();
