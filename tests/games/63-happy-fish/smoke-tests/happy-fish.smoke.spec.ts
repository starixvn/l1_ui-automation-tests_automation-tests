import { HappyFishLocators } from "../happy-fish-locators";
import { HappyFishConfigs } from "../happy-fish-configs";
import { SmokeBases, Components } from "sc-automation-core";

class HappyFishSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["1", "25"],
      gameConfiguration: HappyFishConfigs,
      locators: HappyFishLocators,
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

new HappyFishSmokeSpec().start();
