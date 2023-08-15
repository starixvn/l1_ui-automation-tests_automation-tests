import { HeroesSlotLocators } from "../heroes-slot-locators";
import { HeroesSlotConfigs } from "../heroes-slot-configs";
import { SmokeBases } from "sc-automation-core";

class HeroesSlotSmokeSpec extends SmokeBases.SlotGameBase {
<<<<<<< HEAD
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [HeroesSlotConfigs.choices[0]],
            gameConfiguration: HeroesSlotConfigs,
            locators: HeroesSlotLocators,
            waitBetTimeout: 1000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };
        super(smokeOptions);
    }

=======
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [HeroesSlotConfigs.choices[0]],
      gameConfiguration: HeroesSlotConfigs,
      locators: HeroesSlotLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }
>>>>>>> master
}

new HeroesSlotSmokeSpec().start();
