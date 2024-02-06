import { MagicForestLocators } from "../magic-forest-locators";
import { MagicForestConfigs } from "../magic-forest-configs";
import { SmokeBases, Components } from "sc-automation-core";

class MagicForestSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["1", "25"],
      gameConfiguration: MagicForestConfigs,
      locators: MagicForestLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }


  protected runScenario(): void {
    super.runScenario();
  }
}

new MagicForestSmokeSpec().start();
