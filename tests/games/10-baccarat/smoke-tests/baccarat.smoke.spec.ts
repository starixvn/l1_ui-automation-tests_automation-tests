import { BaccaratLocators } from "../baccarat-locators";
import { BaccaratConfigs } from "../baccarat-configs";
import { SmokeBases } from "sc-automation-core";

class BaccaratSmokeSpec extends SmokeBases.TableGameBase {
<<<<<<< HEAD
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [BaccaratConfigs.choices[3]],
            gameConfiguration: BaccaratConfigs,
            locators: BaccaratLocators,
            waitBetTimeout: 10000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };
        super(smokeOptions);
    }
=======
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [BaccaratConfigs.choices[3]],
      gameConfiguration: BaccaratConfigs,
      locators: BaccaratLocators,
      waitBetTimeout: 10000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }
>>>>>>> master
}
new BaccaratSmokeSpec().start();
