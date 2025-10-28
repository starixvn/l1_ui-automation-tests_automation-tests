import { SummerHeatConfigs } from "../summer-heat-configs";
import { E2EBases,Components } from "sc-automation-core";

class SummerHeatE2ESpec extends E2EBases.PortrailClassicGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [SummerHeatConfigs.choices[0]],
      gameConfiguration: SummerHeatConfigs,
      locators: Components.Portrail_Classic_Locators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
      isJackpot: process.env.npm_config_project === "l2" ? true : false,
    };
    super(smokeOptions);
  }

  
}

new SummerHeatE2ESpec().start();
