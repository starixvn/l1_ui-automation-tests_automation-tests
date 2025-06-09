import { expect } from "@playwright/test";
import { AladdinLocators } from "./aladdin-locators";
import { AladdinConfigs } from "../aladdin-configs";
import { E2EBases, Components } from "sc-automation-core";

class AladdinE2ESpec extends E2EBases.CascadingSlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [AladdinConfigs.choices[2]],
      gameConfiguration: AladdinConfigs,
      locators: AladdinLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }
  
}

new AladdinE2ESpec().start();
