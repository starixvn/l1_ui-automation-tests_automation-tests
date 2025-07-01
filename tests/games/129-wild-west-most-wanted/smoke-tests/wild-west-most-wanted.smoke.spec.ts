import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { WildWestMostWantedLocators } from "../wild-west-most-wanted-locators";
import { WildWestMostWantedConfigs } from "../wild-west-most-wanted-configs";
import { SmokeBases, Components } from "sc-automation-core";

class MahjongWinsSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [WildWestMostWantedConfigs.choices[0]],
      gameConfiguration: WildWestMostWantedConfigs,
      locators: WildWestMostWantedLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

  protected betStakeLevelTests(): void {
    // no test
  }
}

new MahjongWinsSmokeSpec().start();
