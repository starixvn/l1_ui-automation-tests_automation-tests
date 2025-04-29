import { expect } from "@playwright/test";
import { GodOfFortuneLocators } from "./godoffortune-locators";
import { GodOfFortuneConfigs } from "../godoffortune-configs";
import { E2EBases, Components } from "sc-automation-core";
class GodOfFortuneE2ESpec extends E2EBases.CascadingSlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [GodOfFortuneConfigs.choices[0]],
      gameConfiguration: GodOfFortuneConfigs,
      locators: GodOfFortuneLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

  protected inGameTests(): void {
  }
  
}

new GodOfFortuneE2ESpec().start();
