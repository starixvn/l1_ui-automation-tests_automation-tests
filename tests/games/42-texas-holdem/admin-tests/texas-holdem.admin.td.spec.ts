import { TexasHoldemPokerrLocators } from "../texas-holdem-locators";
import * as gameconfig from "../texas-holdem-configs";
import { AdminBases } from "sc-automation-core";

class ColorGameAdminSpec extends AdminBases.CardBetDetailsGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["2"],
      gameConfiguration: gameconfig.TexasHoldemPokerrConfigs,
      locators: TexasHoldemPokerrLocators,
      waitBetTimeout: 7000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }


}

new ColorGameAdminSpec().start();
