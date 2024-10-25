import { FootballCointossLocators } from "../footballcointoss-locators";
import { FootballCointossConfigs } from "../footballcointoss-configs";
import { Components, SmokeBases } from "sc-automation-core";
import { expect } from "@playwright/test";

class FootballCointossSmokeSpec extends SmokeBases.MiniGameBase {
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [FootballCointossConfigs.choices[0]],
      gameConfiguration: FootballCointossConfigs,
      locators: FootballCointossLocators,
      waitBetTimeout: 9500,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }
  protected inGameBetChoiceTests(): void {
  }
  protected ticketHistoryTests(): void {
    Components.test("AND player could open history popup", async () => {
      // Arrange
      await this.player.openHistory();

      // Act
      const historySnapshot = await this.game.captureHistory();

      // Assert
      expect(historySnapshot.image).toMatchSnapshot(historySnapshot.name);

      await this.game.clickOutSide(2000);
  });
  }

}

new FootballCointossSmokeSpec().start();
