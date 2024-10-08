import { BigSmallLocators } from "../bigsmall-locators";
import { BigSmallConfigs } from "../bigsmall-configs";
import { SmokeBases } from "sc-automation-core";

class BigSmallSmokeSpec extends SmokeBases.BalancedBettingGameBase {
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [BigSmallConfigs.choices[0]],
      gameConfiguration: BigSmallConfigs,
      locators: BigSmallLocators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }
}

new BigSmallSmokeSpec().start();
