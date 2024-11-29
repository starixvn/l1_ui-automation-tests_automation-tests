import { MobiLocators } from "../turbobigsmall-locators";
import { TurboBigSmallConfigs } from "../turbobigsmall-configs";
import { SmokeBases } from "sc-automation-core";

let extConfigs = { ...TurboBigSmallConfigs };
extConfigs.socketName = "gw";

class TurboBigSmallSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: extConfigs,
      locators: MobiLocators,
      waitBetTimeout: 5000,
      placeBetChoices: extConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }
}

new TurboBigSmallSmokeSpec().start();
