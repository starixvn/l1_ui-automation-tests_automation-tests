import { BaccaratLocators } from "../baccarat-locators";
import { BaccaratConfigs } from "../baccarat-configs";
import { SmokeBases } from "sc-automation-core";

class BaccaratSmokeSpec extends SmokeBases.TableGameBase {
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
}
new BaccaratSmokeSpec().start();
