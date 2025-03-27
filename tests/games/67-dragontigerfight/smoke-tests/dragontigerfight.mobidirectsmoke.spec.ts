import { MobiDirectLocators } from "../dragontigerfight-locators";
import { SmokeBases } from "sc-automation-core";
import { DragonTigerConfigs } from "../dragontigerfight-configs";

class DragonTigerFightSmokeSpec extends SmokeBases.MiniGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: DragonTigerConfigs,
      locators: MobiDirectLocators,
      waitBetTimeout: 8000,
      placeBetChoices: ["dragon","tiger"],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1
    };

    super(smokeOptions);
  }

  protected inGameBetChoiceTests(): void {
      
  }

  protected gameGuideTests(): void {
      
  }

}

new DragonTigerFightSmokeSpec().start();
