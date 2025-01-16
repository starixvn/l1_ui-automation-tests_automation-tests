import { Baccarat8Locators } from "../baccarat8-locators";
import { Baccarat8Configs } from "../baccarat8-configs"
import { SmokeBases } from "sc-automation-core";


class Baccarat8SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [Baccarat8Configs.choices[0]],
      gameConfiguration: Baccarat8Configs,
      locators: Baccarat8Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 50 : 5,
    };
    super(smokeOptions);
  }

}

new Baccarat8SmokeSpec().start();
