import { Baccarat7Locators } from "../Baccarat7-locators";
import { Baccarat7Configs } from "../Baccarat7-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import verifyImage from "sc-automation-core/lib/expects/verify-image";
const extraRate = 0.2;

class Baccarat7SmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [Baccarat7Configs.choices[0]],
      gameConfiguration: Baccarat7Configs,
      locators: Baccarat7Locators,
      waitBetTimeout: 14000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 20 : 2,
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

new Baccarat7SmokeSpec().start();
