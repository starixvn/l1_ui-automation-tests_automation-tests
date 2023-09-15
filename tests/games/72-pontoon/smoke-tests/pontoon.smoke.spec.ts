import { pontoonLocators } from "../pontoon-locators";
import { pontoonConfigs } from "../pontoon-configs";
import { SmokeBases } from "sc-automation-core";

class pontoonSmokeSpec extends SmokeBases.CardGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [
        pontoonConfigs.choices[0],
        pontoonConfigs.choices[1],
        pontoonConfigs.choices[2],
      ],
      gameConfiguration: pontoonConfigs,
      locators: pontoonLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }
}

new pontoonSmokeSpec().start();
