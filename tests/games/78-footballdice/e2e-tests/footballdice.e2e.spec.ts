import { FootballDiceConfigs } from "../FootballDice-configs";
import { E2EBases, Components } from "sc-automation-core";
import { FootballDiceLocators } from "./footballdice-locators";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { baseLocatorNames } from "sc-automation-core/lib/components/base-game-locator";

class FootballDiceE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: FootballDiceConfigs.choices,
      gameConfiguration: FootballDiceConfigs,
      locators: FootballDiceLocators,
      waitBetTimeout: 25500,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: [FootballDiceConfigs.choices[1], FootballDiceConfigs.choices[2]],
      indexTicketHistory: { totalbet: -2, isIdLink: false },
      gameLobbyNavigation: [
        Components.BaseLocator.baseLocatorNames.tabOthers,
        Components.BaseLocator.baseLocatorNames.icoGame1,
      ],
      barItems: ["home","away","draw"],
      probvalyFair: false
    };
    super(e2eOptions);
  }

  protected inGameUiTests(): void {
    Components.test("Verify all bet choices display correctly", async () => {
        await this.game.waitForEvent(GameEvent.StartPlaceBet)
        await this.game.waitForTimeout(2500)
        for (const iterator of this.options.placeBetChoices) {
            // Act
            const choiceSnapshot = await this.game.capture(iterator + "Choice");
            // Assert
            expect(choiceSnapshot.image).toMatchSnapshot(choiceSnapshot.name, { maxDiffPixelRatio: 0.15 });
        }
    });
    
    Components.test("Verify the EU cup image appears", async () => {
      // Act
      const dealerSnapshot = await this.game.capture(baseLocatorNames.imgdealer);
      // Assert
      expect(dealerSnapshot.image).toMatchSnapshot(dealerSnapshot.name, { maxDiffPixelRatio: 0.3 });
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

protected LedBarTests(): void {
  Components.test("Verify the latest result in bar should be displayed correctly", async () => {
    // Act 1
    const barItems: any = this.options.barItems;
    const latestBarItem = barItems.filter((item) => global.settledata.settledResults[item] === true);
    await this.game.waitUntilPlaceBet(); 

    const barLed = await this.game.capture(latestBarItem + "Bar");

    // Assert
    expect(barLed.image).toMatchSnapshot(barLed.name, { maxDiffPixelRatio: 0.3 });
});
}



}

new FootballDiceE2ESpec().start();
