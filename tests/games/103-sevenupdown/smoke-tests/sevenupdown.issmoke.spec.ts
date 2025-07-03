import { L1IsLocators,L2IsLocators } from "../SevenUpDown-locators";
import { SevenUpDownConfigs,Isconfigs } from "../SevenUpDown-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";

class SedieSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: SevenUpDownConfigs,
      locators: process.env.npm_config_project?.includes("l2") ? L2IsLocators : L1IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: SevenUpDownConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }


}

new SedieSmokeSpec().start();
