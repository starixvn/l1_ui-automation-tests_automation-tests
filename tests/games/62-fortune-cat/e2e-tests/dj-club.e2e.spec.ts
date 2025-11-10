import { FortuneCatConfigs } from "../fortune-cat-configs";
import { E2EBases, Components } from "sc-automation-core";

class FortuneCatE2ESpec extends E2EBases.PortrailClassicGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [FortuneCatConfigs.choices[0], FortuneCatConfigs.choices[1]],
      gameConfiguration: FortuneCatConfigs,
      locators: Components.Portrail_Classic_Locators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(e2eOptions);
  }
}

new FortuneCatE2ESpec().start();
