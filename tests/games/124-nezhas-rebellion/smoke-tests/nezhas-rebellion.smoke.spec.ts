import { NezhasRebellionLocators } from "../nezhas-rebellion-locators";
import { NezhasRebellionConfigs } from "../nezhas-rebellion-configs";
import { SmokeBases, Components } from "sc-automation-core";

class NezhasRebellionSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: NezhasRebellionConfigs,
      locators: NezhasRebellionLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 0.02 : 0.01,
      isJackpot: process.env.npm_config_project === "l2" ? true : false,
    };
    super(smokeOptions);
  }

  protected runScenario(): void {
    super.runScenario();
  }

  protected gameGuideTests(): void {
      
  }
}

new NezhasRebellionSmokeSpec().start();
