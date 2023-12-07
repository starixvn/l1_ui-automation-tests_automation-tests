import { gamelobbyConfigs } from "../gamelobby-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";


export const gameLobbyLocators = [
  new Components.ImageLocator("gamelobby", 405, 667, 136, 44),
];


class healthSmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: gamelobbyConfigs,
      locators: gameLobbyLocators,
      waitBetTimeout: 8000,
      placeBetChoices: [],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }
  
  protected gameLobbyLoadsucceess(): void {
    Components.test("Verify that game looby is loaded success without error", async () => {
      const gamelobby = await this.game.captureLocator("gamelobby")
      expect(gamelobby.image).toMatchSnapshot(gamelobby.name);
     
    });
  }

  protected runScenario(): void {
    this.gameLobbyLoadsucceess();
  }
}

new healthSmokeSpec().start();
