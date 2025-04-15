import { L1IsLocators,L2IsLocators } from "../SevenUpDown-locators";
import { SevenUpDownConfigs,Isconfigs } from "../SevenUpDown-configs";
import { SmokeBases, Components } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";

class SedieSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: SevenUpDownConfigs,
      locators: process.env.npm_config_project?.includes("l2") ? L2IsLocators : L1IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: SevenUpDownConfigs.choices,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }

  protected openInstantGame(): void {
    Components.test(`Smoke Tests ${this.options.gameConfiguration.name}`, async () => {
      await this.game.click(this.options.locators.gameIcon)
      await this.game.waitUntilGameUiLoad()
      await this.game.waitForTimeout(3000)
      await this.game.page.frameLocator('iframe').first().locator('#GameCanvas').scrollIntoViewIfNeeded()
  });
  }

  protected placeBetAndSettleTests(): void {
    Components.test("THEN player able to place a bet and settle", async () => {           // Arrange
      Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
      this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);

      // Act
      await this.game.waitUntilPlaceBet()
      
      await this.game.page.frameLocator('iframe').frameLocator('iframe').locator('#GameCanvas').click({clickCount: 6,position:{x: 117,y: 129}})
      // Act
      const settledResults = await this.game.waitForSettlement();

      // Assert
      expect(settledResults.settlementResult).toMatchBetOptions(this.options.gameConfiguration.choices);
  });
  }

}

new SedieSmokeSpec().start();
