import { SummerHeatConfigs } from "../summer-heat-configs";
import { SmokeBases, Components } from "sc-automation-core";

class SummerHeatSmokeSpec extends SmokeBases.PortrailClassicGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: SummerHeatConfigs,
      locators: Components.Portrail_Classic_Locators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 0.02 : 0.02,
      isJackpot: process.env.npm_config_project === "l2" ? true : false,
    };
    super(smokeOptions);
  }


}

new SummerHeatSmokeSpec().start();
