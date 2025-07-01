import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { MahjongWinsLocators } from "../mahjong-wins-locators";
import { MahjongWinsConfigs } from "../mahjong-wins-configs";
import { SmokeBases, Components } from "sc-automation-core";

class MahjongWinsSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [MahjongWinsConfigs.choices[0]],
      gameConfiguration: MahjongWinsConfigs,
      locators: MahjongWinsLocators,
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
