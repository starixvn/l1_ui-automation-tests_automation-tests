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
      waitBetTimeout: 10000,
      placeBetChoices: [DragonTigerConfigs.choices[0]],
      snapshotFolderPath: __filename,
      placeBetAmount: 1,
    };

    super(smokeOptions);
  }
protected inGameBetChoiceTests(): void {
  
}

}

new DragonTigerFightSmokeSpec().start();
