import * as MiniSedieLocators from "../minisedie-locators";
import * as MiniSedieConfigs from "../minisedie-configs";
import { SmokeBases,Components } from "sc-automation-core";
import { expect } from "sc-automation-core/lib/expects";

class MiniSedie1SmokeSpec extends SmokeBases.RoundGameBaseCocos {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptionsCocos = {
      placeBetChoices: [
        MiniSedieLocators.MiniSedie1Locators.btnEven,
        MiniSedieLocators.MiniSedie1Locators.btnOdd,
      ],
      gameConfiguration: MiniSedieConfigs.MiniSedie1Configs,
      locators: MiniSedieLocators.MiniSedie1Locators,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? [ MiniSedieLocators.MiniSedie1Locators.chip10] : [ MiniSedieLocators.MiniSedie1Locators.chip1],
    };

    super(smokeOptions);
  }
  protected runScenario(): void {
    super.runScenario();
    this.verifySubGames();
  }
  
  protected verifySubGames(): void {
    Components.test(
      "Verify user can open minigame success without error",
      async () => {
        await this.game.clickCocos(MiniSedieLocators.MiniSedie1Locators.btnCloseGuide);
        expect(await this.game.isCocosLocatorExists(MiniSedieLocators.MiniSedie1Locators.btnEven2)).toBe(true);
        expect(await this.game.isCocosLocatorExists(MiniSedieLocators.MiniSedie1Locators.btnOdd2)).toBe(true);
        expect(await this.game.isCocosLocatorExists(MiniSedieLocators.MiniSedie1Locators.lblRoundId2)).toBe(true);
      }
    );
  }

}

new MiniSedie1SmokeSpec().start();


