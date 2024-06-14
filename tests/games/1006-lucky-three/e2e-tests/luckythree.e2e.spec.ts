import { luckythreeLocators } from "../lucky-three-locators";
import { luckythreeConfigs } from "../lucky-three-configs";
import { E2EBases } from "sc-automation-core";

class luckythreeE2ESpec extends E2EBases.NumberGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: ["over", "under", "red2", "red3", "blue3", "blue2"],
      gameConfiguration: luckythreeConfigs,
      locators: luckythreeLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: 10
    };
    super(e2eOptions);
  }

}

new luckythreeE2ESpec().start();
