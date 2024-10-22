import { BaccaratXLocators } from "../baccaratx-locators";
import * as gameconfig from "../baccaratx-configs";
import { AdminBases } from "sc-automation-core";
import { admintest } from "sc-automation-core/lib/components";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { expect } from "@playwright/test";

class BaccaratXAdminSpec extends AdminBases.TableTicketDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.BaccaratXConfigs.choices[0],gameconfig.BaccaratXConfigs.choices[1]],
      gameConfiguration: gameconfig.BaccaratXConfigs,
      locators: BaccaratXLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: ["playerPair", "bankerPair", "tie", "banker"],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }
// protected TC1(): void {
  
// }
protected TC2(): void {
  
}
  protected TC3(): void {
    admintest("Set result win for the bet choice", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout*3);
      await this.game.waitUntilPlaceBet();
      await this.setUIGameResult(this.admin.page.context(), this.dataSet["settle_win"])
    });

    admintest("Place bet on 1 bet choice win", async () => {
      // Arrange
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout*3);
      const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1 };
      // Act
      await this.game.waitUntilPlaceBet();
      await this.player.betOn(bet.choice, bet.amount);
      let currentRoundID = Number(await this.getClientRunningRound());
      console.log("####"+currentRoundID);
      global.settleRoundID = currentRoundID;
      await this.game.waitForEvent(GameEvent.Settlement);
    });

    admintest("Verify bet details placebet 1 choice and win", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      const betdetailsTab = await this.admin.filterBetDetails(this.admin.page.context(),this.options.gameConfiguration.id,global.settleRoundID,this.configAdmin.accountId);
      await this.verifyBetDetails(betdetailsTab, global.settleRoundID , this.dataSet["expect_win"].snapshot);
  });
  }

  protected TC4(): void {
    admintest("Place bet on 1 bet choice lose", async () => {
      // Arrange
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = { choice: this.options.placeBetChoices[1], amount: this.options.placeBetAmount ?? 1 };
      // Act
      await this.game.waitUntilPlaceBet();
      await this.player.betOn(bet.choice, bet.amount);
      let currentRoundID = Number(await this.getClientRunningRound());
      global.settleRoundID = currentRoundID;
      await this.game.waitForEvent(GameEvent.Settlement);
    });

    admintest("Verify bet details placebet 1 choice and lose", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      const betdetailsTab = await this.admin.filterBetDetails(this.admin.page.context(),this.options.gameConfiguration.id,global.settleRoundID,this.configAdmin.accountId);
      await this.verifyBetDetails(betdetailsTab, global.settleRoundID , this.dataSet["expect_lose"].snapshot);
    });
  }
  protected TC5(): void {
    admintest("Place bet on multiple bet choices", async () => {
      // Arrange
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      let betChoices: any = this.options.multiPlaceBetChoices;
      await this.game.waitUntilPlaceBet();
      for (const iterator of betChoices) {
          await this.game.clickToChoice(iterator);
          await this.game.waitForTimeout(800);
      }
      let currentRoundID = Number(await this.getClientRunningRound());
      global.settleRoundID = currentRoundID;
      await this.game.waitForEvent(GameEvent.Settlement);
    });

    admintest("Verify bet details place bet multiple choices", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      const betdetailsTab = await this.admin.filterBetDetails(this.admin.page.context(),this.options.gameConfiguration.id,global.settleRoundID,this.configAdmin.accountId);
      await this.verifyBetDetails(betdetailsTab, global.settleRoundID , this.dataSet["expect_multiple_choices"].snapshot);
      });
  }
  protected TC6(): void {
  }

  protected async fillGameResult(newTab: any ,data: object) {
    for (const [key, value] of Object.entries(data)) {
      await newTab.fill(key, value);
    }
    await newTab.click("//button");
    await newTab.close();
  }

  async verifyBetDetails(page: any, roundID: number, expectSnapshot: object) {
    let roundId = await page.locator("//*[@id='game-ticket']/table[1]/tbody/tr/td[1]").innerText()

        expect(roundId.includes(roundID)).toBe(true);

        for (const key in expectSnapshot) {
            expect(await page.locator(key).screenshot()).toMatchSnapshot(expectSnapshot[key]);
        }
        await page.close()
  }

}

new BaccaratXAdminSpec().start();

