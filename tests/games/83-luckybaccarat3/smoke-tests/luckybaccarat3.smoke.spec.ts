import { LuckyBaccarat3Locators } from "../luckybaccarat3-locators";
import { LuckyBaccarat3Configs } from "../luckybaccarat3-configs";
import { SmokeBases } from "sc-automation-core";

class LuckyBaccarat3SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [LuckyBaccarat3Configs.choices[0]],
      gameConfiguration: LuckyBaccarat3Configs,
      locators: LuckyBaccarat3Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 30 : 3,
    };
    super(smokeOptions);
  }

}

new LuckyBaccarat3SmokeSpec().start();
