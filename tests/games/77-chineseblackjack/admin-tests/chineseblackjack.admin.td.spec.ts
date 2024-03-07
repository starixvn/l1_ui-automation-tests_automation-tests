import { ChineseBlackjackLocators } from "../chineseblackjack-locators";
import * as gameconfig from "../chineseblackjack-configs";
import { AdminBases, Components } from "sc-automation-core";
import { GameEvent } from "sc-automation-core/lib/_shared";

class ChineseBlackjackAdminSpec extends AdminBases.CardTicketDetailsGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.ChineseBlackjackConfigs.choices[0]],
      gameConfiguration: gameconfig.ChineseBlackjackConfigs,
      locators: ChineseBlackjackLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }

  protected TC6(): void {
    (0, Components.admintest)("Set result 5 cards for a hand", async () => {
      var _a;
      Components.admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      const settlePath = (_a = this.options.Adminconfiguration.settlePath) !== null && _a !== void 0 ? _a : "/";
      await this.admin.postGameResult(this.options.Adminconfiguration.settleDomain, settlePath, this.dataSet["settle_fivecards"]);
  });
  (0, Components.admintest)("Placebet on 5 cards hand", async () => {
      var _a;
      // Arrange
      Components.admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      const bet = { choice: this.options.placeBetChoices[0], amount: (_a = this.options.placeBetAmount) !== null && _a !== void 0 ? _a : 1 };
      // Act
      this.game.attachSocketAndCaptureEvent(GameEvent.Deal);
      await this.player.placeBet(bet.choice, bet.amount);
      await this.game.waitForTimeout(8000); //wait for deal card
      for(let i = 0; i < 4; i++){
        await this.game.clickLocator("hitcard", 3000);
      }
      let currentRoundID = Number(await this.getClientRunningRound());
      await this.standCard();
      global.roundId = currentRoundID;
  });
  (0, Components.admintest)("Verify bet details of case placebet on 5 cards hand", async () => {
      Components.admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      const betdetailsTab = await this.admin.filterBetDetails(this.admin.page.context(), this.options.gameConfiguration.id, global.roundId, this.configAdmin.accountId);
      await this.verifyBetDetails(betdetailsTab, global.roundId, this.dataSet["expect_fivecards"].snapshot);
  });
  }

  protected runScenario(): void {
    super.runScenario();
    this.TC6();
  }

}

new ChineseBlackjackAdminSpec().start();

