import { BlockchainBaccaratLocators } from "../blockchain-baccarat-locators";
import { BlockchainBaccaratConfigs } from "../blockchain-baccarat-configs";
import { SmokeBases, Components } from "sc-automation-core";


class BlockchainBaccaratSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    BlockchainBaccaratConfigs.id = 102; 
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [BlockchainBaccaratConfigs.choices[0]],
      gameConfiguration: BlockchainBaccaratConfigs,
      locators: BlockchainBaccaratLocators,
      waitBetTimeout: 18000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }
  
  protected openGameTests(): void {
    Components.test("Precondition: Open game from baccarat lobby", async () => {
      await this.game.clickLocator(`gameicon`)
      await this.game.waitUntilGameUiLoad()
      await this.game.waitForTimeout(5000);
      await this.game.clickLocator("closeguide");
    });
  }

  protected inGameDealerTests(): void {
  }
  
  protected runScenario(): void {
    this.openGameTests();
    super.runScenario();
  }

}

new BlockchainBaccaratSmokeSpec().start();
