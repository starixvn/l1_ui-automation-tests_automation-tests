import { KenoLocators } from "../mega-keno2-locators";
import { KenoConfigs } from "../mega-keno2-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: KenoConfigs,
      locators: KenoLocators,
      waitBetTimeout: 1000,
      placeBetChoices: KenoConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
