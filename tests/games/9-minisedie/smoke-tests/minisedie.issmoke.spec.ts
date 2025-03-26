import { L1IsLocators,L2IsLocators } from "../minisedie-locators";
import { MiniSedie1Configs,Isconfigs } from "../minisedie-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: MiniSedie1Configs,
      locators: process.env.npm_config_project?.includes("l2") ? L2IsLocators : L1IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: MiniSedie1Configs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
