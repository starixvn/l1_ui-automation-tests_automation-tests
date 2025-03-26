import { MobiDirectLocators } from "../sedie-locators";
import { SedieConfigs } from "../sedie-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.MiniGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: SedieConfigs,
      locators: MobiDirectLocators,
      waitBetTimeout: 9000,
      placeBetChoices: ["even", "odd"],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected inGameOddsTests(): void {
  }

  protected gameGuideTests(): void {
  }

}

new SedieSmokeSpec().start();
