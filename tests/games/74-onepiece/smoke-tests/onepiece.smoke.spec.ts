import { OnePieceLocators } from "../onepiece-locators";
import { OnePieceConfigs } from "../onepiece-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";

class OnePieceSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: OnePieceConfigs,
      locators: OnePieceLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }
  protected ticketHistoryTests(): void {
    Components.test("AND player could open history popup", async () => {
      // Arrange
      const historyPayload = await this.player.openHistory();

      // Act
      const historySnapshot = await this.game.captureHistory();

      // Assert
      expect(historyPayload.history.betLogs.length).toBeGreaterThan(0);
      expect(historySnapshot.image).toMatchSnapshot(historySnapshot.name);
      //Close history
      await this.game.clickOutSide();
      await this.game.clickGuide();
      await this.game.clickOutSide();

  });
  }
}


new OnePieceSmokeSpec().start();
