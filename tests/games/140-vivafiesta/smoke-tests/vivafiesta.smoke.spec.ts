import { vivafiestaLocators } from "../vivafiesta-locators";
import { vivafiestaConfigs } from "../vivafiesta-configs";
import { SmokeBases, Components } from "sc-automation-core";

class vivafiestaSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [vivafiestaConfigs.choices[0]],
      gameConfiguration: vivafiestaConfigs,
      locators: vivafiestaLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

  protected betStakeLevelTests(): void {
    // no test
  }
}

new vivafiestaSmokeSpec().start();
