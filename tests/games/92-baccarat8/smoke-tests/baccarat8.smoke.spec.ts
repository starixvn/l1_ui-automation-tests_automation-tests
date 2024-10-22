import { Baccarat8Locators } from "../Baccarat8-locators";
import { Baccarat8Configs } from "../Baccarat8-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import verifyImage from "sc-automation-core/lib/expects/verify-image";
const extraRate = 0.2;

class Baccarat8SmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [Baccarat8Configs.choices[0]],
      gameConfiguration: Baccarat8Configs,
      locators: Baccarat8Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 40 : 5,
    };
    super(smokeOptions);
  }
  protected inGameOddsTests(): void {
    Components.test("AND odds should be correct", async () => {
      // Assert
      await this.game.waitUntilGameUiLoad();
      expect(this.game.odds).toStrictEqual(this.options.gameConfiguration.odds);
  });
  }
  protected inGameDealerTests(): void {
  }
  protected inGameBetChoiceTests() {
    Components.test("AND bet choices should be displayed on table", async () => {
        // Arrange
        Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
        await this.game.waitUntilNextRound();
        await this.game.waitForTimeout(this.options.waitBetTimeout);

        for (const placeBetChoice of this.options.placeBetChoices) {
            // Act
            const betChoice = await this.game.captureChoice(placeBetChoice);

            // Assert
            expect(betChoice.image).toMatchSnapshot(betChoice.name);
        }
        await this.game.waitForTimeout(5000);
    });
}

}

new Baccarat8SmokeSpec().start();
