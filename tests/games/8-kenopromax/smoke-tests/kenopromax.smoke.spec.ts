import { KenoProMaxLocators } from "../kenopromax-locators";
import { KenoProMaxConfigs } from "../kenopromax-configs";
import { SmokeBases } from "sc-automation-core";

class KenoProMaxSmokeSpec extends SmokeBases.RoundGameBaseCocos {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptionsCocos = {
      placeBetChoices: [KenoProMaxLocators.btnBig, KenoProMaxLocators.btnSmall],
      gameConfiguration: KenoProMaxConfigs,
      locators: KenoProMaxLocators,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? [KenoProMaxLocators.chip10] : [KenoProMaxLocators.chip1],
      uiLocatorsToVerify: KenoProMaxLocators.uiLocatorsToVerify,
    };
    super(smokeOptions);
  }
}
new KenoProMaxSmokeSpec().start();
