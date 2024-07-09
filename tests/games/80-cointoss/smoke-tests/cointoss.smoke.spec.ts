import { CoinTossLocators } from "../cointoss-locators";
import { CoinTossConfigs } from "../cointoss-configs";
import { Components, SmokeBases } from "sc-automation-core";
import { expect } from "@playwright/test";

class CoinTossSmokeSpec extends SmokeBases.MiniGameBase {
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [CoinTossConfigs.choices[0]],
      gameConfiguration: CoinTossConfigs,
      locators: CoinTossLocators,
      waitBetTimeout: 9500,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected ticketHistoryTests(): void {
    Components.test("AND player could open history popup", async () => {
      // Arrange
      await this.player.openHistory();

      // Act
      const historySnapshot = await this.game.captureHistory();

      // Assert
      expect(historySnapshot.image).toMatchSnapshot(historySnapshot.name);
  });
  }

}

new CoinTossSmokeSpec().start();
