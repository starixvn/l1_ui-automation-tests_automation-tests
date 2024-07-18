import { MobiLocators } from "../special-sedie-locators";
import { SpecialSedieConfigs } from "../special-sedie-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: SpecialSedieConfigs,
      locators: MobiLocators,
      waitBetTimeout: 3000,
      placeBetChoices: SpecialSedieConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
