import { BigSmallSicBoLocators } from "../bigsmall-sicbo-locators";
import { BigSmallSicBoConfigs } from "../bigsmall-sicbo-configs";
import { SmokeBases } from "sc-automation-core";

class BigSmallSicBoSmokeSpec extends SmokeBases.TableGameBase {
<<<<<<< HEAD
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
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };
=======
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
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
>>>>>>> master

    super(smokeOptions);
  }

<<<<<<< HEAD
    protected inGameDealerTests(): void {  
    }
=======
  protected inGameDealerTests(): void {}
>>>>>>> master
}

new BigSmallSicBoSmokeSpec().start();
