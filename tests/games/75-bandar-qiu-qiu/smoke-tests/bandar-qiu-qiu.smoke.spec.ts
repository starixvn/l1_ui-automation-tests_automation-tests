import { BandarQiuQiuLocators } from "../bandar-qiu-qiu-locators";
import { BandarQiuQiuConfigs } from "../bandar-qiu-qiu-configs";
import { SmokeBases } from "sc-automation-core";

class BandarQiuQiuSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [BandarQiuQiuConfigs.choices[0]],
      gameConfiguration: BandarQiuQiuConfigs,
      locators: BandarQiuQiuLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected hedgeBetTests(): void {
      //no head
  }

}

new BandarQiuQiuSmokeSpec().start();
