import { Baccarat5Locators } from "../baccarat5-locators";
import { Baccarat5Configs } from "../baccarat5-configs";
import { SmokeBases } from "sc-automation-core";


class Baccarat5SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [Baccarat5Configs.choices[0]],
      gameConfiguration: Baccarat5Configs,
      locators: Baccarat5Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }

}

new Baccarat5SmokeSpec().start();
