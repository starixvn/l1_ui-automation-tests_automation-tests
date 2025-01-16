import { Baccarat2Locators } from "../baccarat2-locators";
import { Baccarat2Configs } from "../baccarat2-configs";
import { SmokeBases } from "sc-automation-core";


class Baccarat2SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [Baccarat2Configs.choices[0]],
      gameConfiguration: Baccarat2Configs,
      locators: Baccarat2Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }


}

new Baccarat2SmokeSpec().start();
