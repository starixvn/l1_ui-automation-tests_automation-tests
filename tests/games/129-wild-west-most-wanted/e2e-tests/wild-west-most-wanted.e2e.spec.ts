import { expect } from "@playwright/test";
import { WildWestMostWantedLocators } from "./wild-west-most-wanted-locators";
import { WildWestMostWantedConfigs} from "../wild-west-most-wanted-configs";
import { E2EBases, Components } from "sc-automation-core";

class MahjongWinsE2ESpec extends E2EBases.CascadingSlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [WildWestMostWantedConfigs.choices[2]],
      gameConfiguration: WildWestMostWantedConfigs,
      locators: WildWestMostWantedLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }
  
}

new MahjongWinsE2ESpec().start();
