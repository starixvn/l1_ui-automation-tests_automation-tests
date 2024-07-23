import { MobiLocators } from "../dragontiger-locators";
import { DragonTigerConfigs } from "../dragontiger-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: DragonTigerConfigs,
      locators: MobiLocators,
      waitBetTimeout: 5000,
      placeBetChoices: DragonTigerConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
