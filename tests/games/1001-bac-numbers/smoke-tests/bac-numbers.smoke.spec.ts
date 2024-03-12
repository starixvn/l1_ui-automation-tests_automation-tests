import { BacNumbersLocators } from "../bac-numbers-locators";
import { BacNumbersConfigs } from "../bac-numbers-configs";
import { SmokeBases,Components } from "sc-automation-core";

class BacNumbersSmokeSpec extends SmokeBases.NumberGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [BacNumbersLocators.betchoices.player,BacNumbersLocators.betchoices.banker,BacNumbersLocators.betchoices.tie],
      gameConfiguration: BacNumbersConfigs,
      locators: BacNumbersLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: 10
    };
    super(smokeOptions);
  }

}

new BacNumbersSmokeSpec().start();
