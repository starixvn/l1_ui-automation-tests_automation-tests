import { MobiLocators } from "../vip-sedie-locators";
import { VipSedieConfigs } from "../vip-sedie-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: VipSedieConfigs,
      locators: MobiLocators,
      waitBetTimeout: 5000,
      placeBetChoices: VipSedieConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 50,
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
