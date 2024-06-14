import { luckythreeLocators } from "../lucky-three-locators";
import { luckythreeConfigs } from "../lucky-three-configs";
import { SmokeBases} from "sc-automation-core";

export class luckythreeSmokeSpec extends SmokeBases.NumberGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["over", "under", "red2", "red3", "blue3", "blue2"],
      gameConfiguration: luckythreeConfigs,
      locators: luckythreeLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: 10
    };
    super(smokeOptions);
  }

}

new luckythreeSmokeSpec().start();
