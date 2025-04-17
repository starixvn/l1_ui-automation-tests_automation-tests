import { MobiDirectLocators } from "../bigsmall-sicbo-locators";
import { SmokeBases } from "sc-automation-core";
import { BigSmallSicBoConfigs } from "../bigsmall-sicbo-configs";

class BigSmallSicboSmokeSpec extends SmokeBases.MiniGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: BigSmallSicBoConfigs,
      locators: MobiDirectLocators,
      waitBetTimeout: 8000,
      placeBetChoices: ["big","small"],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1,
    };

    super(smokeOptions);
  }
  


  protected gameGuideTests(): void {
  }

  protected ticketHistoryTests(): void {  
  }


}

new BigSmallSicboSmokeSpec().start();
