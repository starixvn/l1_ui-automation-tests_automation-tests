import { MobiLocators } from "../turbobigsmall-locators";
import { TurboBigSmallConfigs } from "../turbobigsmall-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: TurboBigSmallConfigs,
      locators: MobiLocators,
      waitBetTimeout: 5000,
      placeBetChoices: TurboBigSmallConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
