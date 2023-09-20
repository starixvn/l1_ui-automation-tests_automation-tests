import { DragonTigerLocators } from "../dragontigerfight-locators";
import { DragonTigerConfigs } from "../dragontigerfight-configs";
import { SmokeBases } from "sc-automation-core";

class DragonTigerSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [DragonTigerConfigs.choices[0]],
      gameConfiguration: DragonTigerConfigs,
      locators: DragonTigerLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

}

new DragonTigerSmokeSpec().start();
