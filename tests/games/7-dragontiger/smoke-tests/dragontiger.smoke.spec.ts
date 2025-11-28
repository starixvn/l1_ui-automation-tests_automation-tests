import { DragonTigerLocators } from "../dragontiger-locators";
import { DragonTigerConfigs } from "../dragontiger-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { test } from "@playwright/test";


class DragonTigerSmokeSpec extends SmokeBases.RoundGameBaseCocos {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptionsCocos = {
      placeBetChoices: [DragonTigerLocators.btnDragon,DragonTigerLocators.btnTiger],
      placeBetAmount: process.env.npm_config_project === "l2" ? [DragonTigerLocators.chip10] : [DragonTigerLocators.chip1],
      gameConfiguration: DragonTigerConfigs,
      locators: DragonTigerLocators,
      snapshotFolderPath: __filename,
      uiLocatorsToVerify: DragonTigerLocators.uiLocatorsToVerify,
    };

    super(smokeOptions);
  }


  protected runScenario(): void {
    super.runScenario();
  }

}

new DragonTigerSmokeSpec().start();
