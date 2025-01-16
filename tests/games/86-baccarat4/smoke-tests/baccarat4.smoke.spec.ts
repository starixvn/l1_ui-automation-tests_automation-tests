import { Baccarat4Locators } from "../baccarat4-locators";
import { Baccarat4Configs } from "../baccarat4-configs";
import { SmokeBases } from "sc-automation-core";

class Baccarat4SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [Baccarat4Configs.choices[0]],
      gameConfiguration: Baccarat4Configs,
      locators: Baccarat4Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 50 : 5,
    };
    super(smokeOptions);
  }

}

new Baccarat4SmokeSpec().start();
