import { MobiLocators } from "../minisedie-locators";
import { MiniSedie1Configs } from "../minisedie-configs";
import { SmokeBases } from "sc-automation-core";

let extConfigs = { ...MiniSedie1Configs };
extConfigs.socketName = "gw";

class SedieSmokeSpec extends SmokeBases.MobiGameBase {
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

new SedieSmokeSpec().start();
