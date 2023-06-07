import { HappyFishLocators } from "../happy-fish-locators";
import { HappyFishConfigs } from "../happy-fish-configs";
import { SmokeBases } from "sc-automation-core";

class HappyFishGameGuideSpec extends SmokeBases.GameGuideBase {
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
      placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
    };
    super(smokeOptions);
  }
}

new HappyFishGameGuideSpec().start();
