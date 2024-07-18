import { MobiLocators } from "../minisedie-locators";
import { MiniSedie1Configs } from "../minisedie-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: MiniSedie1Configs,
      locators: MobiLocators,
      waitBetTimeout: 3000,
      placeBetChoices: MiniSedie1Configs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 10,
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
