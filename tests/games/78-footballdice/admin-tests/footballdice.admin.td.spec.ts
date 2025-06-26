import { FootballDiceLocators } from "../footballdice-locators";
import * as gameconfig from "../FootballDice-configs";
import { AdminBases } from "sc-automation-core";
let env = process.env.npm_config_env;

class FootballDiceAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["home"],
      gameConfiguration: gameconfig.FootballDiceConfigs,
      locators: FootballDiceLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: ["draw", "home"],
      Adminconfiguration:
        env?.includes("local") ? gameconfig[`AdminDataSet_local`] : gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }

  public async fillGameResult(newTab: any ,data: object) {
    for (const [key, value] of Object.entries(data)) {
      await newTab.fill(key, value);
    }
    await newTab.click("//button");
    await newTab.close();
}

}

new FootballDiceAdminSpec().start();

