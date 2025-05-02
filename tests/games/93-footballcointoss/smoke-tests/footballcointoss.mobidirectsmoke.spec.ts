import { L1MobiDirectLocators, L2MobiDirectLocators } from "../footballcointoss-locators";
import { FootballCointossConfigs } from "../footballcointoss-configs";
import { SmokeBases, Components } from "sc-automation-core";


class FootballCointossSmokeSpec extends SmokeBases.MobiDirect {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: FootballCointossConfigs,
      locators: process.env.npm_config_project?.includes("l2") ? L2MobiDirectLocators : L1MobiDirectLocators,
      waitBetTimeout: 9000,
      placeBetChoices: process.env.npm_config_project?.includes("l2") ? ["l2home","l2away"] : ["l1home", "l1away"],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1,
    };

    super(smokeOptions);
  }
 

  protected gameGuideTests(): void { 
  }

}

new FootballCointossSmokeSpec().start();
