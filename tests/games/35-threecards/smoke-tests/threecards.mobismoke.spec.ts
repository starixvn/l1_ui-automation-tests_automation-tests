import { MobiLocators } from "../threecards-locators";
import { ThreeCardsConfigs } from "../threecards-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: ThreeCardsConfigs,
      locators: MobiLocators,
      waitBetTimeout: 1000,
      placeBetChoices: ThreeCardsConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
