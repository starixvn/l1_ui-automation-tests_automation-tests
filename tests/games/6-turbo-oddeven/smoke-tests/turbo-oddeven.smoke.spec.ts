import { TurboOddEvenLocators } from "../turbo-oddeven-locators";
import { TurboOddEvenConfigs } from "../turbo-oddeven-configs";
import { SmokeBases } from "sc-automation-core";

class TurboOddEvenSmokeSpec extends SmokeBases.RoundGameBaseCocos {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptionsCocos = {
      placeBetChoices: [TurboOddEvenLocators.btnBetOdd, TurboOddEvenLocators.btnBetEven],
      gameConfiguration: TurboOddEvenConfigs,
      locators: TurboOddEvenLocators,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? [TurboOddEvenLocators.chip10] : [TurboOddEvenLocators.chip1],
    };
    super(smokeOptions);
  }
}

new TurboOddEvenSmokeSpec().start();
