import { SummerHeatLocators } from "../summer-heat-locators";
import { SummerHeatConfigs } from "../summer-heat-configs";
import { SmokeBases, Components } from "sc-automation-core";

class SummerHeatSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: SummerHeatConfigs,
      locators: SummerHeatLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 0.04 : 0.01,
      isJackpot: process.env.npm_config_project === "l2" ? true : false,
    };
    super(smokeOptions);
  }

  protected runScenario(): void {
    super.runScenario();
  }


}

new SummerHeatSmokeSpec().start();
