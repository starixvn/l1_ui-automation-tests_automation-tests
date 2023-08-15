import { MagicForestLocators } from "../magic-forest-locators";
import { MagicForestConfigs } from "../magic-forest-configs";
import { SmokeBases, Components } from "sc-automation-core";

class MagicForestSmokeSpec extends SmokeBases.SlotGameBase {
<<<<<<< HEAD
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: ["1", "25"],
            gameConfiguration: MagicForestConfigs,
            locators: MagicForestLocators,
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
      placeBetChoices: ["1", "25"],
      gameConfiguration: MagicForestConfigs,
      locators: MagicForestLocators,
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
    super.runScenario();
    this.getFPS();
  }
>>>>>>> master
}

new MagicForestSmokeSpec().start();
