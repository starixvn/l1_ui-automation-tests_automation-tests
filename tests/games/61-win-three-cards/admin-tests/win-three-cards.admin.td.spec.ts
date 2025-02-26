import { winthreecardsLocators } from "../win-three-cards-locators";
import * as gameconfig from "../win-three-cards-configs";
import { AdminBases } from "sc-automation-core";

class WinThreeCardsAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["dragon"],
      gameConfiguration: gameconfig.winthreecardsConfigs,  
      locators: winthreecardsLocators,
      waitBetTimeout: 16000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }

  
  async fillGameResult(newTab: any ,data: object) {
    await newTab.waitForTimeout(3000);
    for (const [key, value] of Object.entries(data)) {
      await newTab.mouse.click(361,179);
      await newTab.waitForTimeout(300);
      await newTab.click(value);
      await newTab.waitForTimeout(300);
    }
    await newTab.click("//button[text()='Submit']");
    await newTab.waitForTimeout(200);
    await newTab.close();
  }
}

new WinThreeCardsAdminSpec().start();

