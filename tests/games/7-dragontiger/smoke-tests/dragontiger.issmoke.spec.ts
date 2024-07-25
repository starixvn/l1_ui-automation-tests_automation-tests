import { IsLocators } from "../dragontiger-locators";
import { DragonTigerConfigs,Isconfigs } from "../dragontiger-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: DragonTigerConfigs,
      locators: IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: DragonTigerConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
