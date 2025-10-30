import { NezhasRebellionConfigs } from "../nezhas-rebellion-configs";
import { SmokeBases, Components } from "sc-automation-core";

class NezhasRebellionSmokeSpec extends SmokeBases.PortrailClassicGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: NezhasRebellionConfigs,
      locators: Components.Portrail_Classic_Locators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 0.02 : 0.01,
      isJackpot: process.env.npm_config_project === "l2" ? true : false,
    };
    super(smokeOptions);
  }

  async clickSpinButton() {
    await this.game.waitForTimeout(2000);
    await this.game.page.mouse.click(640, 570);
    await this.game.waitForTimeout(200);
   }

}

new NezhasRebellionSmokeSpec().start();
