import { expect } from "@playwright/test";
import { QueenOfBountyLocators } from "./queenofbounty-locators";
import { queenofbountyConfigs} from "../queenofbounty-configs";
import { E2EBases, Components } from "sc-automation-core";

class QueenOfBountyE2ESpec extends E2EBases.CascadingSlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [queenofbountyConfigs.choices[2]],
      gameConfiguration: queenofbountyConfigs,
      locators: QueenOfBountyLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }

  protected trialModeTests(): void {
    
  }
  
}

new QueenOfBountyE2ESpec().start();
