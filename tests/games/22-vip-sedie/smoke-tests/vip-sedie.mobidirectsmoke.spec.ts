import { MobiDirectLocators } from "../vip-sedie-locators";
import { VipSedieConfigs } from "../vip-sedie-configs";
import { SmokeBases } from "sc-automation-core";

class VipSedieSmokeSpec extends SmokeBases.MiniGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: VipSedieConfigs,
      locators: MobiDirectLocators,
      waitBetTimeout: 9000,
      placeBetChoices: ["odd", "even"],
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }

  protected inGameOddsTests(): void {
  }

}

new VipSedieSmokeSpec().start();
