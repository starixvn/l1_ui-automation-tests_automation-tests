import { MobiLocators } from "../bigsmall-locators";
import { BigSmallConfigs } from "../bigsmall-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: BigSmallConfigs,
      locators: MobiLocators,
      waitBetTimeout: 5000,
      placeBetChoices: BigSmallConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
