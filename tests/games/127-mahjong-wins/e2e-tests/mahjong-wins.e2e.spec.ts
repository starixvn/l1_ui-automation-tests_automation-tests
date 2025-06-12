import { expect } from "@playwright/test";
import { MahjongWinsLocators } from "./mahjong-wins-locators";
import { MahjongWinsConfigs} from "../mahjong-wins-configs";
import { E2EBases, Components } from "sc-automation-core";

class MahjongWinsE2ESpec extends E2EBases.CascadingSlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [MahjongWinsConfigs.choices[2]],
      gameConfiguration: MahjongWinsConfigs,
      locators: MahjongWinsLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }
  
}

new MahjongWinsE2ESpec().start();
