import { MobiLocators } from "../kenopromax-locators";
import { KenoProMaxConfigs } from "../kenopromax-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: KenoProMaxConfigs,
      locators: MobiLocators,
      waitBetTimeout: 1000,
      placeBetChoices: KenoProMaxConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
