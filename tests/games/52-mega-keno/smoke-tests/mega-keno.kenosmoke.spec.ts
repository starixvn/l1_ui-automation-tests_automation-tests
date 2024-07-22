import { KenoLocators } from "../mega-keno-locators";
import { MegaKenoConfigs } from "../mega-keno-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: MegaKenoConfigs,
      locators: KenoLocators,
      waitBetTimeout: 1000,
      placeBetChoices: MegaKenoConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
