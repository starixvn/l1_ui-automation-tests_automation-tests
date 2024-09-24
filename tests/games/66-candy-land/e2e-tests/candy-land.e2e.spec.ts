import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { extCandyLandLocators } from "./candy-land-locators";
import { CandyLandConfigs } from "../candy-land-configs";
import { E2EBases, Components } from "sc-automation-core";

class CandyLandE2ESpec extends E2EBases.CascadingSlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [CandyLandConfigs.choices[0]],
      gameConfiguration: CandyLandConfigs,
      locators: extCandyLandLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }

  
}

new CandyLandE2ESpec().start();
