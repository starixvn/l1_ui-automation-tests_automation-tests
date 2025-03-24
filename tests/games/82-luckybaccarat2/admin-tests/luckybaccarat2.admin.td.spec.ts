import { LuckyBaccarat2Locators } from "../luckybaccarat2-locators";
import * as gameconfig from "../luckybaccarat2-configs";
import { AdminBases } from "sc-automation-core";
import { admintest } from "sc-automation-core/lib/components";
import { GameEvent } from "sc-automation-core/lib/_shared";
import { expect } from "@playwright/test";

class LuckyBaccarat2AdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.LuckyBaccarat2Configs.choices[0],gameconfig.LuckyBaccarat2Configs.choices[1]],
      gameConfiguration: gameconfig.LuckyBaccarat2Configs,
      locators: LuckyBaccarat2Locators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: ["playerPair", "bankerPair", "tie", "banker"],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }
  protected TC3(): void {
    admintest("Set result for all test", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout*3);
      await this.game.waitUntilPlaceBet();
      const tabMonitoring = await this.admin.OpenMonitoring(
        this.admin.page.context(),
        this.options.gameConfiguration.id,
        this.mornitorlocator,
    );
      await this.fillGameResult(tabMonitoring, this.tdataSet["Settle"])
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
      await this.game.waitForEvent(GameEvent.Settlement);
    });

    admintest("Verify bet details placebet 1 choice and win", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      const betdetailsTab = await this.admin.filterBetDetails(this.admin.page.context(),this.options.gameConfiguration.id,global.settleRoundID,this.configAdmin.accountId, this.operatorId);
      await this.verifyBetDetails(betdetailsTab, global.settleRoundID , this.tdataSet["Expect_Win"].snapshot);
    });

    

    admintest("Verify RER placebet 1 choice and win", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      let getRER = await this.admin.getRetrieveEndRound(
          this.options.gameConfiguration.id,
          global.settleRoundID,
          this.options.Adminconfiguration.accountId,
          this.operatorId,
      );
      await this.verifyRER(getRER, this.rdataSet["Expect_Win"]);
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
      const betdetailsTab = await this.admin.filterBetDetails(this.admin.page.context(),this.options.gameConfiguration.id,global.settleRoundID,this.configAdmin.accountId, this.operatorId);
      await this.verifyBetDetails(betdetailsTab, global.settleRoundID , this.tdataSet["Expect_Lose"].snapshot);
    });

    admintest("Verify RER placebet 1 choice and lose", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      let getRER = await this.admin.getRetrieveEndRound(
          this.options.gameConfiguration.id,
          global.settleRoundID,
          this.options.Adminconfiguration.accountId,
          this.operatorId,
      );
      await this.verifyRER(getRER, this.rdataSet["Expect_Lose"]);
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
      const betdetailsTab = await this.admin.filterBetDetails(this.admin.page.context(),this.options.gameConfiguration.id,global.settleRoundID,this.configAdmin.accountId, this.operatorId);
      await this.verifyBetDetails(betdetailsTab, global.settleRoundID , this.tdataSet["Expect_Multiple_Choices"].snapshot);
    });

    

    admintest("Verify RER place bet multiple choices", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      let getRER = await this.admin.getRetrieveEndRound(
          this.options.gameConfiguration.id,
          global.settleRoundID,
          this.options.Adminconfiguration.accountId,
          this.operatorId,
      );
      await this.verifyRER(getRER, this.rdataSet["Expect_Win"]);
  });
  }
  protected TC6(): void {
  }

  public async fillGameResult(newTab: any ,data: object) {
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
            expect(await page.locator(key).screenshot()).toMatchSnapshot(expectSnapshot[key], {maxDiffPixelRatio: 0});
        }
        await page.close()
  }

}

new LuckyBaccarat2AdminSpec().start();

