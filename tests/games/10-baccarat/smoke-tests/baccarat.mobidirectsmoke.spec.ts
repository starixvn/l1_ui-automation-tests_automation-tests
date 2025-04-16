import { L1MobiDirectLocators, L2MobiDirectLocators} from '../baccarat-locators';
import { SmokeBases } from "sc-automation-core";
import { BaccaratConfigs } from "../baccarat-configs";

class BaccaratSmokeSpec extends SmokeBases.MobiDirect {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: BaccaratConfigs,
      locators:  process.env.npm_config_project?.includes("l2")? L2MobiDirectLocators : L1MobiDirectLocators,
      waitBetTimeout: 10000,
      placeBetChoices: process.env.npm_config_project?.includes("l2") ? ["l2player", "l2banker"] : ["l1player", "l1banker"],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected inGameOddsTests(): void {
  }

}

new BaccaratSmokeSpec().start();
