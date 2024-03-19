import { BlackJackLocators } from "../blackjack-locators";
import { BlackJackConfigs } from "../blackjack-configs";
import { SmokeBases,Components } from "sc-automation-core";
import { expect } from "@playwright/test";

class BlackJackSmokeSpec extends SmokeBases.CardGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [
        BlackJackConfigs.choices[0],
        BlackJackConfigs.choices[1],
        BlackJackConfigs.choices[2],
      ],
      gameConfiguration: BlackJackConfigs,
      locators: BlackJackLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected inGameBetChoiceTests(): void {
    Components.test("AND bet choices should be displayed on table", async () => {
      // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      await this.game.waitForTimeout(this.options.waitBetTimeout);
      await this.game.clickLocator("cancelbet",5000)
      await this.game.clickLocator("cancelbet",5000)
      for (const placeBetChoice of this.options.placeBetChoices) {
          // Act
          const betChoice = await this.game.captureChoice(placeBetChoice);

          // Assert
          expect(betChoice.image).toMatchSnapshot(betChoice.name);
      }
  });
  }
}

new BlackJackSmokeSpec().start();
