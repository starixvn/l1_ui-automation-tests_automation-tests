import { LotteryLocators } from "../lottery-locators";
import * as gameconfig from "../lottery-configs";
import { AdminBases, Components } from "sc-automation-core";

class VipBaccaratAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["small"],
      gameConfiguration: gameconfig.LotteryConfigs,  
      locators: LotteryLocators,
      waitBetTimeout: 9000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

  protected TC3() {
    Components.admintest("Set result win for user when placing 1 bet choice", async () => {
      Components.admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
        await this.game.waitUntilPlaceBet();
        const tabMonitoring = await this.admin.OpenMonitoring(
            this.admin.page.context(),
            this.options.gameConfiguration.id,
            this.mornitorlocator,
        );
        const specialResult = await this.fillGameResult(tabMonitoring);
        const last2Digits = specialResult.slice(-2);
        global.last2Digits = last2Digits;
        tabMonitoring.close();
        await this.game.waitForTimeout(2000)

    });
    Components.admintest("THEN player able to place a bet and settle", async () => {
        // Arrange
        await this.game.clickLocator("othersChoice",3000);

        Components.admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
        const choiceWin = Number(global.last2Digits) % 2 === 1 ? "odd" : "even";
        console.log(choiceWin);
        const bet = { choice: choiceWin, amount: this.options.placeBetAmount ?? 1 };
        // Act
        await this.player.placeBet(bet.choice, bet.amount);
        let settlement = await this.game.waitForSettlement()
        global.settleRoundID = Number(settlement.roundId) 
        console.log(global.settleRoundID);

    });

    Components.admintest("Verify BetDetails of case placebet 1 choice and win", async () => {
        Components.admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
        const betdetailsTab = await this.admin.filterBetDetails(
            this.admin.page.context(),
            this.options.gameConfiguration.id,
            global.settleRoundID,
            this.configAdmin.accountId,
            this.operatorId,
        );
        await this.verifyBetDetails(betdetailsTab, global.settleRoundID, this.tdataSet["Expect_Win"]);
    });

    Components.admintest("Verify RER placebet 1 choice and win", async () => {
        Components.admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
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
    Components.admintest("Verify case Player placebet 1 choice and lose", async () => {
        Components.admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
        await this.game.waitUntilPlaceBet()
        const tabMonitoring = await this.admin.OpenMonitoring(
            this.admin.page.context(),
            this.options.gameConfiguration.id,
            this.mornitorlocator,
        );
        const specialResult = await this.fillGameResult(tabMonitoring);
        const last2Digits = specialResult.slice(-2);
        global.last2Digits = last2Digits;
        tabMonitoring.close();
        await this.game.waitForTimeout(2000)

    });
    Components.admintest("THEN player able to place a bet and lose", async () => {
      await this.game.clickLocator("othersChoice",3000);

      Components.admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      const choiceWin = Number(global.last2Digits) % 2 === 1 ? "odd" : "even";
      const choiceLose = choiceWin === "odd" ? "even" : "odd";
      console.log(choiceLose);
      const bet = { choice: choiceLose, amount: this.options.placeBetAmount ?? 1 };
      // Act
        // Act
        await this.player.placeBet(bet.choice, bet.amount);
        let settlement = await this.game.waitForSettlement()
        global.settleRoundID = Number(settlement.roundId) 
        console.log(global.settleRoundID);
    });

    Components.admintest("Verify BetDetails of case placebet 1 choice and lose", async () => {
        Components.admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
        const betdetailsTab = await this.admin.filterBetDetails(
            this.admin.page.context(),
            this.options.gameConfiguration.id,
            global.settleRoundID,
            this.configAdmin.accountId,
            this.operatorId,
        );
        await this.verifyBetDetails(betdetailsTab, global.settleRoundID, this.tdataSet["Expect_Lose"]);
    });

    Components.admintest("Verify RER of Lose case", async () => {
        Components.admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
        let getRER = await this.admin.getRetrieveEndRound(
            this.options.gameConfiguration.id,
            global.settleRoundID,
            this.options.Adminconfiguration.accountId,
            this.operatorId
        );
        await this.verifyRER(getRER, this.rdataSet["Expect_Lose"]);
    });
}

async fillGameResult(newTab: any) {
  await newTab.click("//button[1]");
  await newTab.click("//button[2]");
  await newTab.waitForTimeout(250);
  return newTab.locator("//tbody/tr[1]/td[2]").innerText()
}

}

new VipBaccaratAdminSpec().start();

