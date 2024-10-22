import { BaccaratXLocators } from "../baccaratx-locators";
import * as gameconfig from "../baccaratx-configs";
import { AdminBases, Components } from "sc-automation-core";
import { admintest } from "sc-automation-core/lib/components";
import { GameEvent } from "sc-automation-core/lib/_shared";

class BaccaratXAdminSpec extends AdminBases.TableRERGameBase {
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
      multiPlaceBetChoices: ["playerPair", "bankerPair", "tie", "player"],
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
      global.settleRoundID = currentRoundID;
      console.log(currentRoundID);
      await this.game.waitForEvent(GameEvent.Settlement);
      await this.game.waitForTimeout(3000)
    });

    admintest("Verify RER placebet 1 choice and win", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      let getRER = await this.admin.getRetrieveEndRound(
        this.options.gameConfiguration.id,
        global.settleRoundID,
        this.options.Adminconfiguration.accountId
      );
      await this.verifyRER(getRER, this.dataSet["expect_win"]);
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

    admintest("Verify RER placebet 1 choice and lose", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      let getRER = await this.admin.getRetrieveEndRound(
          this.options.gameConfiguration.id,
          global.settleRoundID,
          this.options.Adminconfiguration.accountId
      );
      await this.verifyRER(getRER, this.dataSet["expect_lose"]);
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

    admintest("Verify RER place bet multiple choices and lose all", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      let getRER = await this.admin.getRetrieveEndRound(
          this.options.gameConfiguration.id,
          global.settleRoundID,
          this.options.Adminconfiguration.accountId
      );
      await this.verifyRER(getRER, this.dataSet["expect_multiple_choices"]);
      });
  }

  protected TC6(): void {
  }

  protected async fillGameResult(newTab: any ,data: object) {
    for (const [key, value] of Object.entries(data)) {
      await newTab.fill(key, value);
    }
    await newTab.click("//button");
    //await newTab.close();
  }

}

new BaccaratXAdminSpec().start();

