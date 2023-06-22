import { SedieLocators } from "../sedie-locators";
import { SedieConfigs } from "../sedie-configs";
import { SmokeBases, Components } from "sc-automation-core";

class SedieSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: SedieConfigs,
      locators: SedieLocators,
      waitBetTimeout: 8000,
      placeBetChoices: [SedieConfigs.choices[0]],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }
  protected getFPS(): void {
    Components.test("Get FPS value", async () => {
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      let cc: any;
      await this.game.page.evaluate(() => {
        console.log("FPS VALUE : ", 1 / cc.director.getDeltaTime());
      });
    });
  }

  protected runScenario(): void {
    this.getFPS();
    super.runScenario();
  }
}

new SedieSmokeSpec().start();
