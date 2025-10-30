import { NezhasRebellionConfigs } from "../nezhas-rebellion-configs";
import { E2EBases,Components } from "sc-automation-core";

class NezhasRebellionE2ESpec extends E2EBases.PortrailClassicGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [NezhasRebellionConfigs.choices[0]],
      gameConfiguration: NezhasRebellionConfigs,
      locators: Components.Portrail_Classic_Locators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
      isJackpot: process.env.npm_config_project === "l2" ? true : false,
    };
    super(e2eOptions);
  }
  
  async clickSpinButton() {
    await this.game.waitForTimeout(2000);
    await this.game.page.mouse.click(640, 570);
    await this.game.waitForTimeout(200);
   }
  
}

new NezhasRebellionE2ESpec().start();
