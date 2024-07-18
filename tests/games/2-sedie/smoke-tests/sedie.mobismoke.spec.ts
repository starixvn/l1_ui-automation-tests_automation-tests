import { MobiLocators } from "../sedie-locators";
import { SedieConfigs } from "../sedie-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: SedieConfigs,
      locators: MobiLocators,
      waitBetTimeout: 3000,
      placeBetChoices: SedieConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
