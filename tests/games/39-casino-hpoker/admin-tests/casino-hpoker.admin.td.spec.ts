import { CasinoHoldemPokerLocators } from "../casino-holdem-poker-locators";
import * as gameconfig from "../casino-holdem-poker-configs";
import { AdminBases} from "sc-automation-core";

class CasinoHoldemPokerAdminSpec extends AdminBases.CardBetDetailsGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.CasinoHoldemPokerConfigs.choices[0]],
      gameConfiguration: gameconfig.CasinoHoldemPokerConfigs,
      locators: CasinoHoldemPokerLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: ["ante", "aa"],
      Adminconfiguration: gameconfig[`AdminDataSet_`+process.env.npm_config_env],
    };

    super(adminOptions);
  }
  
  async fillGameResult(newTab, data) {
    await newTab.fill(data.nickname.locator, data.nickname.value);
    for (const element of data.hand) {
        await newTab.click(element);
        await newTab.waitForTimeout(200);
    }
    await newTab.click(data.btnSubmit);
  }

  async hitCardThenSettle() {
    await this.game.clickLocator("standcard", 2000);
    await this.game.clickLocator("followcard",5000);
    await this.newRound();
  }




}
new CasinoHoldemPokerAdminSpec().start();

