import { MobiDirectLocators } from "../baccarat-locators";
import { SmokeBases } from "sc-automation-core";
import { BaccaratConfigs } from "../baccarat-configs";

class BaccaratSmokeSpec extends SmokeBases.MiniGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: BaccaratConfigs,
      locators: MobiDirectLocators,
      waitBetTimeout: 10000,
      placeBetChoices: ["player", "banker"],
      snapshotFolderPath: __filename,
      placeBetAmount: 1,
    };

    super(smokeOptions);
  }

  protected inGameOddsTests(): void {
  }

}

new BaccaratSmokeSpec().start();
