import { chickenroadConfigs } from "../chickenroad-configs.js";
import { E2EBases } from "sc-automation-core";
import { chickenroadLocators } from "../chickenroad-locators";

class chickenroadE2ESpec extends E2EBases.TapGameBaseCocos {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptionsCocos = {
      gameConfiguration: chickenroadConfigs,
      locators: chickenroadLocators,
      snapshotFolderPath: __filename,
      totalTaps: 4,
      uiLocatorsToVerify: chickenroadLocators.uiLocatorsToVerify,
    };
    super(e2eOptions);
  }
  
}

new chickenroadE2ESpec().start();
