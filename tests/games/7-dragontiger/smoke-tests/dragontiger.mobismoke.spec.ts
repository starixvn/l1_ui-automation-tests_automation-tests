import { MobiLocators } from "../dragontiger-locators";
import { DragonTigerConfigs } from "../dragontiger-configs";
import { SmokeBases } from "sc-automation-core";

let extConfigs = { ...DragonTigerConfigs };
extConfigs.socketName = "gw";

class DragonTigerSmokeSpec extends SmokeBases.MobiGameBase {
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

new DragonTigerSmokeSpec().start();
