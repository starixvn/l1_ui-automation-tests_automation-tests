import { VipBaccaratLocators } from "../vipbaccarat-locators";
import { VipBaccaratConfigs } from "../vipbaccarat-configs";
import { SmokeBases, Components } from "sc-automation-core";

class VipBaccaratSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    VipBaccaratConfigs.id = 102;
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [VipBaccaratConfigs.choices[3]],
      gameConfiguration: VipBaccaratConfigs,
      placeBetAmount: process.env.npm_config_project === "l2" ? 50 : 10,
      locators: VipBaccaratLocators,
      waitBetTimeout: 9000,
      snapshotFolderPath: __filename,
    };
    super(smokeOptions);
  }
  protected openGameTests(): void {
    Components.test("Precondition: Open game from baccarat lobby", async () => {
      await this.game.clickLocator(`gameicon`);
      await this.game.waitUntilGameUiLoad();

    });
  }

  protected runScenario(): void {
    this.openGameTests();
    super.runScenario();
  }
}
new VipBaccaratSmokeSpec().start();
