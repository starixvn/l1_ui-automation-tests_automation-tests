import { BaccaratLocators } from "../baccarat-locators";
import { BaccaratConfigs } from "../baccarat-configs";
import { SmokeBases } from "sc-automation-core";

class BaccaratSmokeSpec extends SmokeBases.RoundGameBaseCocos {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptionsCocos = {
      placeBetChoices: [ BaccaratLocators.btnPlayer, BaccaratLocators.btnBanker ],
      gameConfiguration: BaccaratConfigs,
      locators: BaccaratLocators,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? [BaccaratLocators.chip10] : [BaccaratLocators.chip1],
      uiLocatorsToVerify: BaccaratLocators.uiLocatorsToVerify,
    };
    super(smokeOptions);
  }

}
new BaccaratSmokeSpec().start();
