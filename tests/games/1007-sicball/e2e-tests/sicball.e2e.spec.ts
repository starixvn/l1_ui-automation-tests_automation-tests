import { sicballLocators } from "../sicball-locators";
import { sicballConfigs } from "../sicball-configs";
import { E2EBases } from "sc-automation-core";

class sicballE2ESpec extends E2EBases.NumberGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: sicballConfigs.choices,
      gameConfiguration: sicballConfigs,
      locators: sicballLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: 10
    };
    super(e2eOptions);
  }

}

new sicballE2ESpec().start();
