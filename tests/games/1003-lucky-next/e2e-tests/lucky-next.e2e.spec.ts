import { LuckyNextLocators } from "../lucky-next-locators";
import { LuckyNextConfigs } from "../lucky-next-configs";
import { E2EBases } from "sc-automation-core";

class LuckyNextE2ESpec extends E2EBases.NumberGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: ["under","over", "odd", "even"],
      gameConfiguration: LuckyNextConfigs,
      locators: LuckyNextLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: 10
    };
    super(e2eOptions);
  }

}

new LuckyNextE2ESpec().start();
