import { MobiLocators } from "../kenopromax-locators";
import { KenoProMaxConfigs } from "../kenopromax-configs";
import { SmokeBases } from "sc-automation-core";

let extConfigs = { ...KenoProMaxConfigs };
extConfigs.socketName = "gw";

class KenoSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: extConfigs,
      locators: MobiLocators,
      waitBetTimeout: 1000,
      placeBetChoices: extConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }
}

new KenoSmokeSpec().start();
