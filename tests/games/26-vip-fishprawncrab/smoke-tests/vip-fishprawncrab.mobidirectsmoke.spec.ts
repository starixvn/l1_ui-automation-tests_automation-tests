import { L1MobiDirectLocators, L2MobiDirectLocators } from "../vip-fishprawncrab-locators";
import { SmokeBases, Components } from "sc-automation-core";
import { VIPFPCConfigs } from "../vip-fishprawncrab-configs";
class BaccaratSmokeSpec extends SmokeBases.MobiDirect {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: VIPFPCConfigs,
      locators: process.env.npm_config_project?.includes("l2") ? L2MobiDirectLocators : L1MobiDirectLocators,
      waitBetTimeout: 12000,
      placeBetChoices: process.env.npm_config_project?.includes("l2") ? ["l2stag", "l2fish"] : ["l1stag", "l1fish"],
      snapshotFolderPath: __filename,
      placeBetAmount:   process.env.npm_config_project?.includes("l2") ? 50 : 10
    };

    super(smokeOptions);
  }

    protected gameGuideTests(): void {  
  }

  protected hedgeBetTests(): void {
    console.log("No Hedge Bet Tests");
  }

}

new BaccaratSmokeSpec().start();
