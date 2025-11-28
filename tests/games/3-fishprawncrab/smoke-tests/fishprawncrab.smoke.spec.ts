import { FPCLocators } from "../fishprawncrab-locators";
import { FPCConfigs } from "../fishprawncrab-configs";
import { SmokeBases } from "sc-automation-core";

class FPCSmokeSpec extends SmokeBases.RoundGameBaseCocos {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptionsCocos = {
      placeBetChoices: [FPCLocators.btnfish],
      placeBetAmount: process.env.npm_config_project === "l2" ? [FPCLocators.chip10] : [FPCLocators.chip1],
      gameConfiguration: FPCConfigs,
      locators: FPCLocators,
      snapshotFolderPath: __filename,
      uiLocatorsToVerify: FPCLocators.uiLocatorsToVerify,
    };

    super(smokeOptions);
  }
  protected override hedgeBetTests(): void {}

}

new FPCSmokeSpec().start();
