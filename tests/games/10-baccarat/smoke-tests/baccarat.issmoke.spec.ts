import { IsLocators } from "../baccarat-locators";
import { BaccaratConfigs,Isconfigs } from "../baccarat-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: BaccaratConfigs,
      locators: IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: BaccaratConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
