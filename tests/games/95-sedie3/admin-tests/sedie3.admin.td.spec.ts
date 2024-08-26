import { SeDie3Locators } from "../sedie3-locators.ts";
import * as gameconfig from "../sedie3-configs";
import { AdminBases } from "sc-automation-core";
import { admintest } from "sc-automation-core/lib/components/base-admin-fixture";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { expect } from "allure-playwright";

class SedieAdminSpec extends AdminBases.TableTicketDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.SeDie3Configs.choices[0], gameconfig.SeDie3Configs.choices[1]],
      gameConfiguration: gameconfig.SeDie3Configs,
      locators: SeDie3Locators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: ["white", "red1", "red2", "red3", "white3"],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }
  protected TC1(): void {
    
  }
  protected TC2(): void {
    
  }

  protected TC3(): void {
    admintest("Set result win for the bet choice", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout*3);
      await this.game.waitUntilPlaceBet();
      await this.setUIGameResult(this.admin.page.context(), this.dataSet["settle_3red"])
    });

    admintest("Place bet on 1 bet choice win", async () => {
      // Arrange
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout*3);
      const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1 };
      // Act
      await this.game.waitUntilPlaceBet();
      await this.player.betOn(bet.choice, bet.amount);
      let currentRoundID = Number(await this.getClientRunningRound());
      global.settleRoundID = currentRoundID;
      console.log(currentRoundID);
      await this.setUIGameResult(this.admin.page.context(), this.dataSet["settle_3red"])
      await this.game.waitForEvent(GameEvent.Settlement);
      await this.game.waitForTimeout(3000)
    });

    admintest("Verify Operator bet details placebet 1 choice and win", async () => {
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
      await this.setUIGameResult(this.admin.page.context(), this.dataSet["settle_3white"])
      await this.game.waitForEvent(GameEvent.Settlement);
    });

    admintest("Verify Operator bet details placebet 1 choice and lose", async () => {
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
          await this.game.waitForTimeout(1000);
      }
      let currentRoundID = Number(await this.getClientRunningRound());
      global.settleRoundID = currentRoundID;
      await this.game.waitForEvent(GameEvent.Settlement);
    });

    admintest("Verify Operator bet details place bet multiple choices", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      const betdetailsTab = await this.admin.filterBetDetails(this.admin.page.context(),this.options.gameConfiguration.id,global.settleRoundID,this.configAdmin.accountId);
      await this.verifyBetDetails(betdetailsTab, global.settleRoundID , this.dataSet["expect_multiple_choices"].snapshot);
      });
  }

  protected TC6(): void {
  }

  protected async fillGameResult(newTab: any ,data: object) {
    for (const [key, value] of Object.entries(data)) {
      await newTab.click(key);
      await newTab.click(value);
    }
   // await newTab.click("//button");
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

new SedieAdminSpec().start();

