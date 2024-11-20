import { IsLocators } from "../SevenUpDown-locators";
import { SevenUpDownConfigs,Isconfigs } from "../SevenUpDown-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: SevenUpDownConfigs,
      locators: IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: SevenUpDownConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
