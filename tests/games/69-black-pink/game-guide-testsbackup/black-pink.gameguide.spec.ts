import { BlackPinkLocators } from "../black-pink-locators";
import { BlackPinkConfigs } from "../black-pink-configs";
import { SmokeBases } from "sc-automation-core";

class BlackPinkGameGuideSpec extends SmokeBases.GameGuideBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["1", "25"],
      gameConfiguration: BlackPinkConfigs,
      locators: BlackPinkLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
    };
    super(smokeOptions);
  }
}

new BlackPinkGameGuideSpec().start();
