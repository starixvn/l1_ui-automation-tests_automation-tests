import { HeroesSlotConfigs } from "../heroes-slot-configs";
import { SmokeBases , Components} from "sc-automation-core";

class HeroesSlotSmokeSpec extends SmokeBases.PortrailClassicGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ['25'],
      gameConfiguration: HeroesSlotConfigs,
      locators: Components.Portrail_Classic_Locators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 0.02 : 0.4,
    };
    super(smokeOptions);
  }

  async clickSpinButton() {
    await this.game.waitForTimeout(2000);
    await this.game.page.mouse.click(640, 570);
    await this.game.waitForTimeout(200);
   }
   
}

new HeroesSlotSmokeSpec().start();
