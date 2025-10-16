import { TreasureIslandConfigs } from "../treasure-island-configs";
import { E2EBases, Components } from "sc-automation-core";
class TreasureIslandE2ESpec extends E2EBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [TreasureIslandConfigs.choices[2]],
      gameConfiguration: TreasureIslandConfigs,
      locators: Components.BaseLocator.CascadingSlotLocatorsV3,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 1,
    };
    super(smokeOptions);
  }

}

new TreasureIslandE2ESpec().start();
