import { IsMiniSedieLocators } from "../minisedie-locators";
import { MiniSedie1Configs,Isconfigs } from "../minisedie-configs";
import { SmokeBases } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: MiniSedie1Configs,
      locators: IsMiniSedieLocators,
      waitBetTimeout: 5000,
      placeBetChoices: MiniSedie1Configs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }
}

new SedieSmokeSpec().start();
