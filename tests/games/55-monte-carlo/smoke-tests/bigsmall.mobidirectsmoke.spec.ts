import { MobiDirectLocators } from "../bigsmall-city-locators";
import { BigSmallCity4Configs } from "../bigsmall-city-configs";
import { SmokeBases } from "sc-automation-core";

BigSmallCity4Configs.id = 55;

class BigSmallSmokeSpec extends SmokeBases.MiniGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: BigSmallCity4Configs,
      locators: MobiDirectLocators,
      waitBetTimeout: 9000,
      placeBetChoices: ["big", "small"],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1,
    };

    super(smokeOptions);
  }

protected inGameBetChoiceTests(): void {
    
}

  protected inGameOddsTests(): void {
  }

  protected gameGuideTests(): void {
  }

}

new BigSmallSmokeSpec().start();
