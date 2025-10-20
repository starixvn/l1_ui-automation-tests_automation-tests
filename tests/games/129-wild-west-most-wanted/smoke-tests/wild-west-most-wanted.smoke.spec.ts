import { WildWestMostWantedConfigs } from "../wild-west-most-wanted-configs";
import { SmokeBases, Components } from "sc-automation-core";

class MahjongWinsSmokeSpec extends SmokeBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [WildWestMostWantedConfigs.choices[0]],
      gameConfiguration: WildWestMostWantedConfigs,
      locators: Components.Portrail_Cascading_Locators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

}

new MahjongWinsSmokeSpec().start();
