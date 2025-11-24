import { chickenroadLocators } from "../chickenroad-locators";
import { chickenroadConfigs } from "../chickenroad-configs";
import { SmokeBases } from "sc-automation-core";

class chickenroadSmokeSpec extends SmokeBases.TapGameBaseCocos {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptionsCocos = {
      gameConfiguration: chickenroadConfigs,
      locators: chickenroadLocators,
      snapshotFolderPath: __filename,
      totalTaps: 4,
      uiLocatorsToVerify: chickenroadLocators.uiLocatorsToVerify,
    };

    super(smokeOptions);
  }
}

new chickenroadSmokeSpec().start();
