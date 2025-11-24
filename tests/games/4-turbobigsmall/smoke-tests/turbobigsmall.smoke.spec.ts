import { TurboBigSmallLocators } from "../turbobigsmall-locators";
import { TurboBigSmallConfigs } from "../turbobigsmall-configs";
import { SmokeBases,Components } from "sc-automation-core";

class TurboBigSmallSmokeSpec extends SmokeBases.RoundGameBaseCocos {
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptionsCocos = {
      placeBetChoices: [TurboBigSmallLocators.btnBetBig, TurboBigSmallLocators.btnBetSmall],
      placeBetAmount: process.env.npm_config_project === "l2" ? [TurboBigSmallLocators.chip10] : [TurboBigSmallLocators.chip1],
      gameConfiguration: TurboBigSmallConfigs,
      locators: TurboBigSmallLocators,
      snapshotFolderPath: __filename,
      uiLocatorsToVerify: TurboBigSmallLocators.uiLocatorsToVerify,
    };
    super(smokeOptions);
  }
}

new TurboBigSmallSmokeSpec().start();
