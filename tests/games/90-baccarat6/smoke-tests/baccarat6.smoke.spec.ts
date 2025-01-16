import { Baccarat6Locators } from "../baccarat6-locators";
import { Baccarat6Configs } from "../baccarat6-configs";
import { SmokeBases } from "sc-automation-core";

class Baccarat6SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [Baccarat6Configs.choices[0]],
      gameConfiguration: Baccarat6Configs,
      locators: Baccarat6Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }

}

new Baccarat6SmokeSpec().start();
