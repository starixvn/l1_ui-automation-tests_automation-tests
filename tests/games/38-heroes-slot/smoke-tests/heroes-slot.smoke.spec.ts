import { HeroesSlotLocators } from "../heroes-slot-locators";
import { HeroesSlotConfigs } from "../heroes-slot-configs";
import { SmokeBases } from "sc-automation-core";

class HeroesSlotSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ['25'],
      gameConfiguration: HeroesSlotConfigs,
      locators: HeroesSlotLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 0.4,
    };
    super(smokeOptions);
  }
}

new HeroesSlotSmokeSpec().start();
