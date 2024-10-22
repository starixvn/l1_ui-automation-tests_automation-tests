import { speedbacarrat3Locators } from "../speedbacarrat3-locators";
import { speedbacarrat3Configs } from "../speedbacarrat3-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import verifyImage from "sc-automation-core/lib/expects/verify-image";
const extraRate = 0.2;

class speedbacarrat3SmokeSpec extends SmokeBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [speedbacarrat3Configs.choices[0]],
      gameConfiguration: speedbacarrat3Configs,
      locators: speedbacarrat3Locators,
      waitBetTimeout: 11500,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 50 : 5,
    };
    super(smokeOptions);
  }
  protected inGameOddsTests(): void {
    Components.test("AND odds should be correct", async () => {
      // Assert
      await this.game.waitUntilGameUiLoad(1);
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

new speedbacarrat3SmokeSpec().start();
