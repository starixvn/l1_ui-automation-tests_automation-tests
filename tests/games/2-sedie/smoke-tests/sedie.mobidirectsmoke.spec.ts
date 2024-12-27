import { MobiDirectLocators } from "../sedie-locators";
import { SedieConfigs } from "../sedie-configs";
import { SmokeBases } from "sc-automation-core";
let extConfigs = { ...SedieConfigs };
extConfigs.socketName = "sedie";

class SedieSmokeSpec extends SmokeBases.MiniGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: extConfigs,
      locators: MobiDirectLocators,
      waitBetTimeout: 5000,
      placeBetChoices: ["even", "odd"],
      snapshotFolderPath: __filename,
      placeBetAmount: 1,
    };

    super(smokeOptions);
  }

  protected inGameOddsTests(): void {
      
  }

  inGameBetChoiceTests(): void {
      
  }
  
}

new SedieSmokeSpec().start();
