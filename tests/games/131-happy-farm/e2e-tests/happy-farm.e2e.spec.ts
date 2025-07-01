import { expect } from "@playwright/test";
import { HappyFarmLocators } from "./happy-farm-locators";
import { HappyFarmConfigs} from "../happy-farm-configs";
import { E2EBases, Components } from "sc-automation-core";

class HappyFarmE2ESpec extends E2EBases.CascadingSlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [HappyFarmConfigs.choices[2]],
      gameConfiguration: HappyFarmConfigs,
      locators: HappyFarmLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }
  
}

new HappyFarmE2ESpec().start();
