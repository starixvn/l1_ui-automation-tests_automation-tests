import { HappyFishLocators } from "../happy-fish-locators";
import { HappyFishConfigs } from "../happy-fish-configs";
import { SmokeBases, Components } from "sc-automation-core";

class HappyFishSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["1", "25"],
      gameConfiguration: HappyFishConfigs,
      locators: HappyFishLocators,
      waitBetTimeout: 1000,
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

new HappyFishSmokeSpec().start();
