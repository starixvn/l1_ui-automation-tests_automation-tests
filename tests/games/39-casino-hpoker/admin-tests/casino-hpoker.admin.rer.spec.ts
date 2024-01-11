import { CasinoHoldemPokerLocators } from "../casino-holdem-poker-locators";
import * as gameconfig from "../casino-holdem-poker-configs";
import { AdminBases} from "sc-automation-core";

class CasinoHoldemPokerAdminSpec extends AdminBases.CardRERGameBase {
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

}
new CasinoHoldemPokerAdminSpec().start();

