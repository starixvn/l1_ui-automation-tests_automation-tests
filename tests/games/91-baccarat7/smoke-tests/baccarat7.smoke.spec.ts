import { Baccarat7Locators } from "../baccarat7-locators";
import { Baccarat7Configs } from "../baccarat7-configs";
import { SmokeBases } from "sc-automation-core";

class Baccarat7SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [Baccarat7Configs.choices[0]],
      gameConfiguration: Baccarat7Configs,
      locators: Baccarat7Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 20 : 2,
    };
    super(smokeOptions);
  }

}

new Baccarat7SmokeSpec().start();
