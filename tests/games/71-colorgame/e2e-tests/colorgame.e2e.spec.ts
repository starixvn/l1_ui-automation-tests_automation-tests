import { ColorGameConfigs } from "../ColorGame-configs";
import { E2EBases, Components } from "sc-automation-core";
import { ColorGameLocators } from "./colorgame-locators";
import { expect, request } from '@playwright/test';
import { GameEvent } from "sc-automation-core/lib/_shared";
import { GameConfiguration } from "sc-automation-core/lib/components";

class ColorGameE2ESpec extends E2EBases.TableGameBase {
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: ColorGameConfigs.choices,
      gameConfiguration: ColorGameConfigs,
      locators: ColorGameLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: ColorGameConfigs.choices.slice(2),
      indexTicketHistory: { totalbet: -2, isIdLink: true },
      gameLobbyNavigaion: [
        Components.BaseLocator.baseLocatorNames.tabOthers,
        Components.BaseLocator.baseLocatorNames.icoGame1,
      ],
    };
    super(e2eOptions);
  }
  
  protected multipleBetChoices() {
    Components.test("Player able to placebet multiple choices in 1 round", async () => {
        // Arrange
        Components.test.setTimeout(this.options.gameConfiguration.maxTimeout);
        this.game.attachSocketAndCaptureEvent(GameEvent.OwnBets);
        this.game.attachSocketAndCaptureEvent(GameEvent.Settlement);
        let betChoices: any = this.options.multiPlaceBetChoices;
        const amount = this.options.placeBetAmount ?? 1;
        await this.game.waitUntilPlaceBet();
        await this.game.waitForTimeout(2000);
        for (const iterator of betChoices) {
            await this.game.clickToChoice(iterator);
            await this.game.waitForTimeout(800);
        }

        // Act
        let ownBets = await this.game.latestCaptureEvent(GameEvent.OwnBets);

        const settledResults = await this.game.waitForSettlement();
        let numberOfWinningChoices = 0;
        // Assert
        for (const iterator of betChoices) {
            expect(ownBets.ownBets[iterator]).toBe(amount);
            if(settledResults.settlementResult[iterator] === true) {numberOfWinningChoices++}
        }
        console.log(numberOfWinningChoices)
        let calWinAmount = 0;
        if(numberOfWinningChoices === 1){
          calWinAmount = this.game.gameConfiguration.odds["triple"]*amount
        }
        else if (numberOfWinningChoices === 2){
          calWinAmount = this.game.gameConfiguration.odds["single"]*amount + this.game.gameConfiguration.odds["double"]*amount;
        }
        else if (numberOfWinningChoices === 3){
          calWinAmount = this.game.gameConfiguration.odds["single"]*amount*3;
        }
        console.log("--------"+calWinAmount);
        expect(calWinAmount).toBe(settledResults.winAmount);
    });
}

  protected LedBarTests(): void {
    
  }
}

new ColorGameE2ESpec().start();
