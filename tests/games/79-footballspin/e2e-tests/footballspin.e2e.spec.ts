import { FootballSpinConfigs } from "../footballspin-configs";
import { E2EBases, Components } from "sc-automation-core";
import { FootballSpinLocators } from "./footballspin-locators";
import { baseLocatorNames } from "sc-automation-core/lib/components/base-game-locator";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { expect } from "@playwright/test";

class FootballSpinE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: FootballSpinConfigs.choices,
      gameConfiguration: FootballSpinConfigs,
      locators: FootballSpinLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: [FootballSpinConfigs.choices[1], FootballSpinConfigs.choices[2]],
      indexTicketHistory: { totalbet: -2, isIdLink: false },
      gameLobbyNavigation: [
        Components.BaseLocator.baseLocatorNames.tabOthers,
        Components.BaseLocator.baseLocatorNames.icoGame1,
      ],
      probvalyFair: false
    };
    super(e2eOptions);
  }

  protected inGameUiTests(): void {
    Components.test("Verify the dealer image appears", async () => {
      // Act
      await this.game.waitUntilNextRound();
      await this.game.waitForTimeout(this.options.waitBetTimeout);
      const dealerSnapshot = await this.game.capture(baseLocatorNames.imgdealer);
      // Assert
      expect(dealerSnapshot.image).toMatchSnapshot(dealerSnapshot.name, { maxDiffPixelRatio: 0.3 });
  });

  Components.test("Verify all bet choices display correctly", async () => {
      await this.game.waitForEvent(GameEvent.StartPlaceBet)
      await this.game.waitForTimeout(3000)
      for (const iterator of this.options.placeBetChoices) {
          // Act
          const choiceSnapshot = await this.game.capture(iterator + "Choice");
          // Assert
          expect(choiceSnapshot.image).toMatchSnapshot(choiceSnapshot.name);
      }
  });
  Components.test("Verify default state of chip bar", async () => {
      const chipbar = await this.game.capture(`defaultChipBar${process.env.npm_config_project}`);
      // Assert
      expect(chipbar.image).toMatchSnapshot(chipbar.name);
  });
  if (this.options.gameConfiguration.rebet) {
    Components.test("Verify Rebet button is disabled", async () => {
          const btnrebet = await this.game.capture(baseLocatorNames.btnRebet);
          // Assert
          expect(btnrebet.image).toMatchSnapshot(btnrebet.name);
      });
  }
  }
  protected LedBarTests(): void {}
  protected turnbackGame(): void {}

}

new FootballSpinE2ESpec().start();
