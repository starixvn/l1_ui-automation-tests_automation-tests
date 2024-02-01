import { numbergameLocators } from "../number-game-locators";
import { numbergameConfigs } from "../number-game-configs";
import { SmokeBases } from "sc-automation-core";

class numbergameSmokeSpec extends SmokeBases.NumberGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["1", "25"],
      gameConfiguration: numbergameConfigs,
      locators: numbergameLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: 1
    };
    super(smokeOptions);
  }
}

new numbergameSmokeSpec().start();
