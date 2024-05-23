import { seballLocators } from "../seball-locators";
import { seballConfigs } from "../seball-configs";
import { SmokeBases} from "sc-automation-core";

export class seballSmokeSpec extends SmokeBases.NumberGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["odd", "even", "red2", "red3", "red4", "blue3", "blue4"],
      gameConfiguration: seballConfigs,
      locators: seballLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: 10
    };
    super(smokeOptions);
  }

}

new seballSmokeSpec().start();
