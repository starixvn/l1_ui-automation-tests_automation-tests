import { IsLocators } from "../bigsmall-locators";
import { BigSmallConfigs,Isconfigs } from "../bigsmall-configs";
import { SmokeBases } from "sc-automation-core";

let extConfigs = { ...BigSmallConfigs }; // Shallow copy
extConfigs.betBoard = false;

class SedieSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: extConfigs,
      locators: IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: ["big"],
      snapshotFolderPath: __filename,
      placeBetAmount: 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
