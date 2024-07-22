import { KenoLocators } from "../keno-south-locators";
import { KenoConfigs } from "../keno-south-configs";
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
