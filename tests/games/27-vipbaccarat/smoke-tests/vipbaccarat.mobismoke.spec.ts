import { MobiLocators } from "../vipbaccarat-locators";
import { VipBaccaratConfigs } from "../vipbaccarat-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: VipBaccaratConfigs,
      locators: MobiLocators,
      waitBetTimeout: 1000,
      placeBetChoices: VipBaccaratConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
