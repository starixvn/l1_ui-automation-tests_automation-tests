import { L1MobiDirectLocators, L2MobiDirectLocators } from "../rocketx-locators";
import { RocketXConfigs } from "../rocketx-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "sc-automation-core/lib/expects";

class RocketXSmokeSpec extends SmokeBases.CrashGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: RocketXConfigs,
      locators: process.env.npm_config_project?.includes("l2") ? L2MobiDirectLocators : L1MobiDirectLocators,
      waitBetTimeout: 9000,
      placeBetChoices: process.env  .npm_config_project?.includes("l2") ? ["l2key0","l2key1"] : ["l1key0", "l1key1"],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1,
    };

    super(smokeOptions);
  }
  
  inGameOddsTests(): void {
    console.log("No inGameOddsTests");
  }

  protected hedgeBetTests(): void {
    console.log("No hedgeBetTests");
  }


}

new RocketXSmokeSpec().start();
