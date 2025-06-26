import { SpaceFlightLocators } from "../spaceflight-locators";
import * as gameconfig from "../spaceflight-configs";
import { AdminBases } from "sc-automation-core";
import { admintest } from "sc-automation-core/lib/components";
import { GameEvent } from "sc-automation-core/lib/_shared";
import * as adminLocator from "sc-automation-core/lib/components/base-admin-locator";
let env = process.env.npm_config_env;

class FootballDiceAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["home"],
      gameConfiguration: gameconfig.SpaceFlightConfigs,
      locators: SpaceFlightLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: ["draw", "home"],
      Adminconfiguration:
        env?.includes("local") ? gameconfig[`AdminDataSet_local`] : gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }

  
  protected TC2(): void {
  }

  protected TC3() {
    admintest("Set result win for user when placing 1 bet choice", async () => {
        admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
        await this.game.waitUntilPlaceBet();
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
        const getRER = await this.admin.getRetrieveEndRound(
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
        await this.game.waitUntilPlaceBet()
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
        this.game.attachSocketAndCaptureEvent(GameEvent.WinStatus);
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

  public async fillGameResult(newTab: any ,data: object) {
    for (const [key, value] of Object.entries(data)) {
      await newTab.fill(key, value);
    }
    await newTab.click("//button");
    await newTab.close();
}

}

new FootballDiceAdminSpec().start();

