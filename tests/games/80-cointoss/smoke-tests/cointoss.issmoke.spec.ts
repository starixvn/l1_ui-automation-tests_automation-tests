import { IsLocators } from "../cointoss-locators";
import { CoinTossConfigs,Isconfigs } from "../cointoss-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: CoinTossConfigs,
      locators: IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: CoinTossConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
