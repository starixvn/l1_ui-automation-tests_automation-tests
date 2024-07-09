import { CoinTossLocators } from "../cointoss-locators";
import * as gameconfig from "../cointoss-configs";
import { AdminBases } from "sc-automation-core";

class CoinTossAdminSpec extends AdminBases.TableTicketDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.CoinTossConfigs.choices[0],gameconfig.CoinTossConfigs.choices[0]],
      gameConfiguration: gameconfig.CoinTossConfigs,
      locators: CoinTossLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);

    
  }
  protected TC5(): void {
  }
  protected TC6(): void {
  }
  
  protected async fillGameResult(newTab: any ,data: object) {
    for (const [key, value] of Object.entries(data)) {
      await newTab.click(key);
    }
    await newTab.click("//button");
    await newTab.close();
}

}

new CoinTossAdminSpec().start();

