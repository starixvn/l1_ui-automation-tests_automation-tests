import { baccarat9Locators } from "../baccarat9-locators";
import { baccarat9Configs } from "../baccarat9-configs";
import { SmokeBases } from "sc-automation-core";


class baccarat9SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [baccarat9Configs.choices[0]],
      gameConfiguration: baccarat9Configs,
      locators: baccarat9Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 50 : 5,
    };
    super(smokeOptions);
  }

}

new baccarat9SmokeSpec().start();
