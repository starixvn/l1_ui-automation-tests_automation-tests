import { LuckyBaccarat5Locators } from "../luckybaccarat5-locators";
import { LuckyBaccarat5Configs } from "../luckybaccarat5-configs";
import { SmokeBases } from "sc-automation-core";

class LuckyBaccarat5SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [LuckyBaccarat5Configs.choices[0]],
      gameConfiguration: LuckyBaccarat5Configs,
      locators: LuckyBaccarat5Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 30 : 3,
    };
    super(smokeOptions);
  }

}

new LuckyBaccarat5SmokeSpec().start();
