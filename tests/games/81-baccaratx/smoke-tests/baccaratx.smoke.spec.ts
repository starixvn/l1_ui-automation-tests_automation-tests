import { BaccaratXLocators } from "../baccaratx-locators";
import { BaccaratXConfigs } from "../baccaratx-configs";
import { SmokeBases } from "sc-automation-core";

class BaccaratXSmokeSpec extends SmokeBases.BacGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [BaccaratXConfigs.choices[0]],
      gameConfiguration: BaccaratXConfigs,
      locators: BaccaratXLocators,
      waitBetTimeout: 15000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }


}

new BaccaratXSmokeSpec().start();
