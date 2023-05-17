import { FanTanLocators } from "../fantan-locators";
import { FanTanConfigs } from "../fantan-configs";
import { SmokeBases } from "sc-automation-core";

class FanTanSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: FanTanConfigs,
      placeBetChoices: [FanTanConfigs.choices[0], FanTanConfigs.choices[1]],
      waitBetTimeout: 10000,
      locators: FanTanLocators,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "vg" ? 10 : 1,
    };

    super(smokeOptions);
  }
  protected override inGameDealerTests(): void {}
}

new FanTanSmokeSpec().start();
