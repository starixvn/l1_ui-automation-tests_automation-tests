import { BigSmallSicBoLocators } from "../bigsmall-sicbo-locators";
import { BigSmallSicBoConfigs } from "../bigsmall-sicbo-configs";
import { SmokeBases } from "sc-automation-core";

class BigSmallSicBoSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: BigSmallSicBoConfigs,
      locators: BigSmallSicBoLocators,
      waitBetTimeout: 12000,
      placeBetChoices: [BigSmallSicBoConfigs.choices[6]],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 20 : 1,
    };

    super(smokeOptions);
  }

  protected inGameDealerTests(): void {}

  protected inGameBetChoiceTests(): void {
    
  }
}

new BigSmallSicBoSmokeSpec().start();
