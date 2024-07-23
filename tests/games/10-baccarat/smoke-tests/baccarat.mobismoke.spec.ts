import { MobiLocators } from "../baccarat-locators";
import { BaccaratConfigs } from "../baccarat-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: BaccaratConfigs,
      locators: MobiLocators,
      waitBetTimeout: 5000,
      placeBetChoices: BaccaratConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
