import { FruitSlotLocators } from "../fruit-slot-locators";
import * as gameconfig from "../fruit-slot-configs";
import { AdminBases ,Components} from "sc-automation-core";
import { admintest } from "sc-automation-core/lib/components/base-admin-fixture";
import { expect } from "@playwright/test";

class FruitSlotAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["small"],
      gameConfiguration: gameconfig.FruitSlotConfigs,  
      locators: FruitSlotLocators,
      waitBetTimeout: 16000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 100 : 10, 
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

  async fillGameResult(newTab: any ,data: object) {
    for (const [key, value] of Object.entries(data)) {
      await newTab.locator(key).selectOption(value);
    }
    await newTab.click("//img[6]")
    await newTab.click("//button");
    await newTab.close();
  }
  
  protected TC2() {
    admintest("Verify case Player has ticket on roundId is running", async () => {
        admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
        await this.game.waitUntilNextRound();
        await this.game.waitForTimeout(this.options.waitBetTimeout);
        const currentRoundId = await this.getClientRunningRound();
        global.settleRoundID = Number(currentRoundId)
    });
    admintest("THEN player able to place a bet and settle on running round", async () => {
        // Arrange

        admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
        const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1 };
        // Act
        await this.player.placeBet(bet.choice, bet.amount);
    });

    admintest("Verify BetDetails of case of running round", async () => {
        admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
        const betdetailsTab = await this.admin.filterBetDetails(
            this.admin.page.context(),
            this.options.gameConfiguration.id,
            global.settleRoundID,
            this.configAdmin.accountId,
            this.operatorId,
        );
        const noData = await betdetailsTab.locator("//*/div[@class='main-container']").innerText();
        expect(noData).toContain("No data available");
        await betdetailsTab.close();
    });

    admintest("Verify RER of case of running round", async () => {
        admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
        let getRER = await this.admin.getRetrieveEndRound(
            this.options.gameConfiguration.id,
            global.settleRoundID,
            this.options.Adminconfiguration.accountId,
            this.operatorId,
        );
        await this.verifyRER(getRER, this.rdataSet["Expect_NoData"]);
    });
}


protected TC3() {
  admintest("Set result win for user when placing 1 bet choice", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      await this.game.waitUntilNextRound();
      await this.game.waitForTimeout(this.options.waitBetTimeout);
      const tabMonitoring = await this.admin.OpenMonitoring(
          this.admin.page.context(),
          this.options.gameConfiguration.id,
          this.mornitorlocator,
      );
      await this.fillGameResult(tabMonitoring, this.tdataSet["Settle_Win"]);
      const currentRoundId = await this.getClientRunningRound();
      global.settleRoundID = Number(currentRoundId) + (this.settleNextRound ? 1 : 0);
      if (this.settleNextRound) {
          await this.game.waitUntilNextRound();
          await this.game.waitForTimeout(this.options.waitBetTimeout);
      }
  });
  admintest("THEN player able to place a bet and settle", async () => {
      // Arrange
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1 };
      // Act
      await this.player.placeBet(bet.choice, bet.amount);
      await this.game.waitForSettlement()
      await this.game.waitForTimeout(5000)

  });

  admintest("Verify BetDetails of case placebet 1 choice and win", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      const betdetailsTab = await this.admin.filterBetDetails(
          this.admin.page.context(),
          this.options.gameConfiguration.id,
          global.settleRoundID,
          this.configAdmin.accountId,
          this.operatorId,
      );
      await this.verifyBetDetails(betdetailsTab, global.settleRoundID, this.tdataSet["Expect_Win"]);
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

protected TC4() {
  admintest("Verify case Player placebet 1 choice and lose", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      await this.game.waitUntilNextRound();
      await this.game.waitForTimeout(this.options.waitBetTimeout);
      const tabMonitoring = await this.admin.OpenMonitoring(
          this.admin.page.context(),
          this.options.gameConfiguration.id,
          this.mornitorlocator,
      );
      await this.fillGameResult(tabMonitoring, this.tdataSet["Settle_Lose"]);
      const currentRoundId = await this.getClientRunningRound();
      global.settleRoundID = Number(currentRoundId) + (this.settleNextRound ? 1 : 0);
      if (this.settleNextRound) {
          await this.game.waitUntilNextRound();
          await this.game.waitForTimeout(this.options.waitBetTimeout);
      }
  });
  admintest("THEN player able to place a bet and lose", async () => {
      // Arrange
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1 };
      this.game.attachSocketAndCaptureEvent("status");
      // Act
      await this.player.placeBet(bet.choice, bet.amount);
      await this.game.waitForSettlement()
      await this.game.waitForTimeout(5000)

  });

  admintest("Verify BetDetails of case placebet 1 choice and lose", async () => {
      const betdetailsTab = await this.admin.filterBetDetails(
          this.admin.page.context(),
          this.options.gameConfiguration.id,
          global.settleRoundID,
          this.configAdmin.accountId,
          this.operatorId,
      );
      await this.verifyBetDetails(betdetailsTab, global.settleRoundID, this.tdataSet["Expect_Lose"]);
  });

  admintest("Verify RER of Lose case", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      let getRER = await this.admin.getRetrieveEndRound(
          this.options.gameConfiguration.id,
          global.settleRoundID,
          this.options.Adminconfiguration.accountId,
          this.operatorId
      );
      await this.verifyRER(getRER, this.rdataSet["Expect_Lose"]);
  });
}

}

new FruitSlotAdminSpec().start();

