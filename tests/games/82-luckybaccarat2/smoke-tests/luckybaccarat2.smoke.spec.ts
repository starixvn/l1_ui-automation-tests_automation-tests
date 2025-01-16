import { LuckyBaccarat2Locators } from "../luckybaccarat2-locators";
import { LuckyBaccarat2Configs } from "../luckybaccarat2-configs";
import { SmokeBases } from "sc-automation-core";

class LuckyBaccarat2SmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [LuckyBaccarat2Configs.choices[0]],
      gameConfiguration: LuckyBaccarat2Configs,
      locators: LuckyBaccarat2Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 20 : 2,
    };
    super(smokeOptions);
  }
  
}

new LuckyBaccarat2SmokeSpec().start();
