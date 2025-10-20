import { TreasureIslandConfigs } from "../treasure-island-configs";
import { SmokeBases, Components } from "sc-automation-core";

class TreasureIslandSmokeSpec extends SmokeBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [TreasureIslandConfigs.choices[0]],
      gameConfiguration: TreasureIslandConfigs,
      locators: Components.Portrail_Cascading_Locators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

}

new TreasureIslandSmokeSpec().start();
