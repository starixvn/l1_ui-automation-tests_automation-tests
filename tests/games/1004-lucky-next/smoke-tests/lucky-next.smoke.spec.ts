import { LuckyNextLocators } from "../lucky-next-locators";
import { LuckyNextConfigs } from "../lucky-next-configs";
import { SmokeBases} from "sc-automation-core";

class LuckyNextSmokeSpec extends SmokeBases.NumberGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["under","over", "odd", "even"],
      gameConfiguration: LuckyNextConfigs,
      locators: LuckyNextLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: 10
    };
    super(smokeOptions);
  }

}

new LuckyNextSmokeSpec().start();
