import { seballLocators } from "../seball-locators";
import { seballConfigs } from "../seball-configs";
import { E2EBases } from "sc-automation-core";

class seballE2ESpec extends E2EBases.NumberGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: ["odd", "even", "red2", "red3", "red4", "blue3", "blue4"],
      gameConfiguration: seballConfigs,
      locators: seballLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: 10
    };
    super(e2eOptions);
  }

}

new seballE2ESpec().start();
