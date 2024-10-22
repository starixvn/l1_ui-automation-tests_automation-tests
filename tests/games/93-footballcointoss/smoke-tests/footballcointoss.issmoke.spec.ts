import { IsLocators } from "../footballcointoss-locators";
import { FootballCointossConfigs,Isconfigs } from "../footballcointoss-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: FootballCointossConfigs,
      locators: IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: FootballCointossConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
