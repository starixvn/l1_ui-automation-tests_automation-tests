import { FortuneCatLocators } from "../fortune-cat-locators";
import { FortuneCatConfigs } from "../fortune-cat-configs";
import { SmokeBases, Components } from "sc-automation-core";

class FortuneCatSmokeSpec extends SmokeBases.PortrailClassicGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [FortuneCatConfigs.choices[0]],
      gameConfiguration: FortuneCatConfigs,
      locators: Components.Portrail_Classic_Locators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 0.02 : 0.4,
    };
    super(smokeOptions);
  }
}

new FortuneCatSmokeSpec().start();
