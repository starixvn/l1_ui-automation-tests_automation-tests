import { MegaKenoLocators} from "../mega-keno-locators";
import * as gameconfig from "../mega-keno-configs";
import { AdminBases } from "sc-automation-core";

class KenoProMaxAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["big"],
      gameConfiguration: gameconfig.MegaKenoConfigs,
      locators: MegaKenoLocators,
      waitBetTimeout: 10000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }
  
  async fillGameResult(newTab: any, data: object) {
    for (const [key, value] of Object.entries(data)) {
        await newTab.click(key);
        await newTab.waitForTimeout(200);
        for (const item of value) {
            await newTab.click(item);
            await newTab.waitForTimeout(200);
        }
        await newTab.click("//button[text()='Submit']");
        await newTab.waitForTimeout(200);
    }
    await newTab.close();
}

}

new KenoProMaxAdminSpec().start();

