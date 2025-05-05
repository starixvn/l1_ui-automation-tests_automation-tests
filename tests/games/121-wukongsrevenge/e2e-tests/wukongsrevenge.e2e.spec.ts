import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { extwukongsrevengeLocators } from "./wukongsrevenge-locators";
import { wukongsrevengeConfigs } from "../wukongsrevenge-configs";
import { E2EBases, Components } from "sc-automation-core";

class wukongsrevengeE2ESpec extends E2EBases.CascadingSlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [wukongsrevengeConfigs.choices[0]],
      gameConfiguration: wukongsrevengeConfigs,
      locators: extwukongsrevengeLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }

  
}

new wukongsrevengeE2ESpec().start();
