import { IsLocators } from "../fishprawncrab-locators";
import { FPCConfigs,Isconfigs } from "../fishprawncrab-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: FPCConfigs,
      locators: IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: ["fish"],
      snapshotFolderPath: __filename,
      placeBetAmount: 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
