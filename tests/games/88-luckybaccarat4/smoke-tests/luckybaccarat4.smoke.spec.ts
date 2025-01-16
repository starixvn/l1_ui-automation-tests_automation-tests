import { LuckyBaccarat4Locators } from "../luckybaccarat4-locators";
import { LuckyBaccarat4Configs } from "../luckyBaccarat4-configs";
import { SmokeBases } from "sc-automation-core";

class LuckyBaccarat4SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [LuckyBaccarat4Configs.choices[0]],
      gameConfiguration: LuckyBaccarat4Configs,
      locators: LuckyBaccarat4Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 20 : 2,
    };
    super(smokeOptions);
  }

}

new LuckyBaccarat4SmokeSpec().start();
