import { FootballSpinLocators } from "../footballspin-locators";
import * as gameconfig from "../footballspin-configs";
import { AdminBases } from "sc-automation-core";
let env = process.env.npm_config_env;

class FootballSpinAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["big"],
      gameConfiguration: gameconfig.FootballSpinConfigs,
      locators: FootballSpinLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: ["draw", "home"],
      Adminconfiguration:
      env?.includes("local") ? gameconfig[`AdminDataSet_local`] : gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }

  public async fillGameResult(newTab: any, data: object): Promise<void> {
    for (const [key, value] of Object.entries(data)) {
    await newTab.selectOption(key, value);
    }
    const button100 = "//*[@id='__next']/div/div[7]/div/img[1]"
    await newTab.click(button100)
    await newTab.click("//button");
    await newTab.close()
  }
}

new FootballSpinAdminSpec().start();





