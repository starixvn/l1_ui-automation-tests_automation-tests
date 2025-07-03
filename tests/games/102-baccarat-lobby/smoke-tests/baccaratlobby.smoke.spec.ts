import { BaccaratLobbyLocators } from "../baccaratLobby-locators";
import { BaccaratLobbyConfigs } from "../baccaratLobby-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import verifyImage from "sc-automation-core/lib/expects/verify-image";
const extraRate = 0.2;

class BaccaratLobbySmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [BaccaratLobbyConfigs.choices[0]],
      gameConfiguration: BaccaratLobbyConfigs,
      locators: BaccaratLobbyLocators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }
  protected lobbyUITests(): void {
    Components.test("Verify UI of baccarat lobby", async () => {
      await this.game.waitForTimeout(5000)
      await this.game.clickLocator(`outside`)
      await verifyImage(this.game, `imgCategories`)
      await this.game.clickLocator(`imgCategoryClassic`)
      await this.game.clickLocator(`imgCategorySpeed`)
      await this.game.clickLocator(`imgCategoryLucky`)
      await verifyImage(this.game, `imgAllCategoriesSelected`)
      await verifyImage(this.game, `btnHome`)
      await verifyImage(this.game, `btnSettings`)
    });
  }

  protected joinGameTests(): void {
    Components.test("Verify joining a game from baccarat lobby", async () => {
      await this.game.clickLocator(`firstGame`)
      await this.game.waitUntilGameUiLoad()
      await verifyImage(this.game, `imgDealer`)
    });
  }

  protected backToLobby(): void {
    Components.test("Verify go back to baccarat lobby", async () => {
      await this.game.clickLocator(`icoHome`)
      await this.game.waitForTimeout(5000)
      await verifyImage(this.game, `imgAllCategoriesSelected`)
    });
  }
  protected runScenario(): void {
    this.lobbyUITests();
    this.joinGameTests();
    this.backToLobby();
  }
}

new BaccaratLobbySmokeSpec().start();
