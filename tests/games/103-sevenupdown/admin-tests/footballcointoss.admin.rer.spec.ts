import { SevenUpDownLocators } from "../sevenupdown-locators";
import * as gameconfig from "../sevenupdown-configs";
import { AdminBases } from "sc-automation-core";
import { admintest } from "sc-automation-core/lib/components";
import { GameEvent } from "sc-automation-core/lib/_shared";

class SevenUpDownAdminSpec extends AdminBases.TableRERGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.SevenUpDownConfigs.choices[0], gameconfig.SevenUpDownConfigs.choices[1]],
      gameConfiguration: gameconfig.SevenUpDownConfigs,
      locators: SevenUpDownLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: ["down", "seven"],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }

  protected TC3() {    
    
    admintest("Set result win for the bet choice", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      await this.setUIGameResult(this.admin.page.context(), this.dataSet["settle_win"])
    });

    admintest("Place bet on 1 bet choice win", async () => {
        // Arrange
        admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
        const bet = { choice: this.options.placeBetChoices[0], amount: this.options.placeBetAmount ?? 1 };
        // Act
        await this.game.waitUntilPlaceBet();
        await this.player.placeBet(bet.choice, bet.amount);
        let currentRoundID = Number(await this.getClientRunningRound());
        global.settleRoundID = currentRoundID;
        await this.game.waitForEvent(GameEvent.Settlement);
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

  protected TC4() {

    admintest("Set result lose for the bet choice", async () => {
      admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
      await this.game.waitUntilPlaceBet();
      await this.setUIGameResult(this.admin.page.context(), this.dataSet["settle_lose"])
    });

    admintest("Place bet on 1 bet choice lose", async () => {
        // Arrange
        admintest.setTimeout(this.options.gameConfiguration.maxTimeout);
        const bet = { choice: this.options.placeBetChoices[1], amount: this.options.placeBetAmount ?? 1 };
        // Act
        await this.game.waitUntilPlaceBet();
        await this.player.placeBet(bet.choice, bet.amount);
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
  }
  protected TC6(): void {
  }

  protected async fillGameResult(newTab: any, data: object) {
    for (const [key, value] of Object.entries(data)) {
      await newTab.locator(key).fill(value);
    }
    await newTab.locator("//*[@name='multiplierValue']").fill("5")
    await newTab.locator("//*[@name='choice']").selectOption("Up")
    await newTab.click("//button");
    await newTab.close();
  }
  protected async setUIGameResult(context: any, data: object) {
    const admindomain = new URL(this.admin.page.url());
    const monitoring = admindomain.protocol + "//" + admindomain.hostname + "/GameSettings/GameMonitor";
    await this.admin.page.goto(monitoring);
    await this.admin.page.focus("//*[@data-game-name = 'sevenupdown']");
    const [newTab] = await Promise.all([
        context.waitForEvent("page"),
        await this.admin.page.click("//*[@data-game-name = 'sevenupdown']"),
    ]);
    await newTab.waitForLoadState();
    await this.fillGameResult(newTab, data);
}

}

new SevenUpDownAdminSpec().start();

