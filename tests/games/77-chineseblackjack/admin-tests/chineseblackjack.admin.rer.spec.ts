import { ChineseBlackjackLocators } from "../chineseblackjack-locators";
import * as gameconfig from "../chineseblackjack-configs";
import { AdminBases} from "sc-automation-core";

class ChineseBlackjackAdminSpec extends AdminBases.CardRERGameBase {
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
      Adminconfiguration:gameconfig[`AdminDataSet_`+process.env.npm_config_env],
    };

    super(adminOptions);
  }
  protected TC5(): void {
  }
  protected TC6(): void {
  }
}
new ChineseBlackjackAdminSpec().start();

