import { onedayinparadiseConfigs } from "../onedayinparadise-configs";
import { onedayinparadiseLocators } from "../onedayinparadise-locators";
import { SmokeBases, Components } from "sc-automation-core";

class onedayinparadiseSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [onedayinparadiseConfigs.choices[0]],
      
      gameConfiguration: onedayinparadiseConfigs,
      locators: onedayinparadiseLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

}

new onedayinparadiseSmokeSpec().start();
