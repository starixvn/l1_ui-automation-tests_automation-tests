import { rocketxLocators} from "../rocketx-locators";
import * as gameconfig from "../rocketx-configs";
import { AdminBases } from "sc-automation-core";

class RocketxAdminSpec extends AdminBases.RoundBetDetailGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["big"],
      gameConfiguration: gameconfig.rocketXConfigs,
      locators: rocketxLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: [],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
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

new RocketxAdminSpec().start();

