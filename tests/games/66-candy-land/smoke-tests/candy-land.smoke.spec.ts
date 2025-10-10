import { CandyLandConfigs } from "../candy-land-configs";
import { SmokeBases, Components } from "sc-automation-core";

class CandyLandSmokeSpec extends SmokeBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [CandyLandConfigs.choices[0]],
      gameConfiguration: CandyLandConfigs,
      locators: Components.BaseLocator.CascadingSlotLocatorsV3,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

  async clickPlayNowButton(): Promise<void> {
    await this.game.page.mouse.click(640, 560);
    await this.game.waitForTimeout(2000);
  }

}

new CandyLandSmokeSpec().start();
