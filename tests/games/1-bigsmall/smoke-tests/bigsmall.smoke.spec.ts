import { BigSmallLocators } from "../bigsmall-locators";
import { BigSmallConfigs } from "../bigsmall-configs";
import { SmokeBases } from "sc-automation-core";

class BigSmallSmokeSpec extends SmokeBases.RoundGameBaseCocos {
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptionsCocos = {
      placeBetChoices: [BigSmallLocators.btnBetBig, BigSmallLocators.btnBetSmall],
      placeBetAmount: process.env.npm_config_project === "l2" ? [BigSmallLocators.chip10] : [BigSmallLocators.chip1],
      gameConfiguration: BigSmallConfigs,
      locators: BigSmallLocators,
      snapshotFolderPath: __filename,
      uiLocatorsToVerify: BigSmallLocators.uiLocatorsToVerify,
    };

    super(smokeOptions);
  }
}
new BigSmallSmokeSpec().start();

