import { sicballLocators } from "../sicball-locators";
import { sicballConfigs } from "../sicball-configs";
import { SmokeBases} from "sc-automation-core";

export class sicballSmokeSpec extends SmokeBases.NumberGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [ "big", "small","small", "specific2", "specific3", "specific4", "specific5", "specific6","drawId"],
      gameConfiguration: sicballConfigs,
      locators: sicballLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: 10
    };
    super(smokeOptions);
  }

}

new sicballSmokeSpec().start();
