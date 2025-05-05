import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { wukongsrevengeLocators } from "../wukongsrevenge-locators";
import { wukongsrevengeConfigs } from "../wukongsrevenge-configs";
import { SmokeBases, Components } from "sc-automation-core";

class wukongsrevengeSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [wukongsrevengeConfigs.choices[0]],
      gameConfiguration: wukongsrevengeConfigs,
      locators: wukongsrevengeLocators,
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

new wukongsrevengeSmokeSpec().start();
