import { IsLocators } from "../colorgame-locators";
import { ColorGameConfigs,Isconfigs } from "../colorgame-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: ColorGameConfigs,
      locators: IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: ["yellow"],
      snapshotFolderPath: __filename,
      placeBetAmount: 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
