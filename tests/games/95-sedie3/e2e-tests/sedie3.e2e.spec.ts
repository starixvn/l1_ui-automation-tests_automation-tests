import { SeDie3Configs } from "../sedie3-configs";
import { E2EBases, Components } from "sc-automation-core";
import { SeDie3Locators } from "./sedie3-locators";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { baseLocatorNames } from "sc-automation-core/lib/components/base-game-locator";
import  verifyImage from "sc-automation-core/lib/expects/verify-image";

class SeDie3E2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: SeDie3Configs.choices,
      gameConfiguration: SeDie3Configs,
      locators: SeDie3Locators,
      waitBetTimeout: 25500,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: [SeDie3Configs.choices[1], SeDie3Configs.choices[2]],
      indexTicketHistory: { totalbet: -2, isIdLink: false },
      gameLobbyNavigation: [
        Components.BaseLocator.baseLocatorNames.tabOthers,
        Components.BaseLocator.baseLocatorNames.icoGame1,
      ],
      barItems: ["red","white"]
    };
    super(e2eOptions);
  }

  protected inGameUiTests(): void {
    Components.test("Verify all bet choices display correctly", async () => {
        await this.game.waitForEvent(GameEvent.StartRound)
        await this.game.waitForTimeout(5500)
        for (const iterator of this.options.placeBetChoices) {
            // Act
            await verifyImage(this.game, iterator + "Choice")
        }
    });
    Components.test("Verify default state of chip bar", async () => {
        await verifyImage(this.game, `defaultChipBar${process.env.npm_config_project}`, 0.05)
    });
    Components.test("Verify UI of statistic", async () => {
      await verifyImage(this.game, `imgStatistic`)
    });    
    
    Components.test("Verify UI of dealer", async () => {
      await verifyImage(this.game, `imgDealer`);
    });
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

protected turnbackGame(): void {
}

protected returnGameLobby(): void {
  
}

}

new SeDie3E2ESpec().start();

