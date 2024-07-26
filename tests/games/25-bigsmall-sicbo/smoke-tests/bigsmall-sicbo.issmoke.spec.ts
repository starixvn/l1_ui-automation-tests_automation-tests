import { IsLocators } from "../bigsmall-sicbo-locators";
import { BigSmallSicBoConfigs,Isconfigs } from "../bigsmall-sicbo-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: BigSmallSicBoConfigs,
      locators: IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: ["big"],
      snapshotFolderPath: __filename,
      placeBetAmount: 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
