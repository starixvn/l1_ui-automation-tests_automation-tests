import { FootballSlotLocators } from "../footballspin-locators";
import * as gameconfig from "../footballspin-configs";
import { AdminBases } from "sc-automation-core";

class FootballSlotAdminSpec extends AdminBases.TableRERGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.FootballSlotConfigs.choices[8],gameconfig.FootballSlotConfigs.choices[9]],
      gameConfiguration: gameconfig.FootballSlotConfigs,
      locators: FootballSlotLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: ["draw", "home"],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }

  protected async fillGameResult(newTab: any, data: object): Promise<void> {
    for (const [key, value] of Object.entries(data.dropDown)) {
      await newTab.selectOption(key, value);
    }
    await newTab.click(data.button)
    await newTab.click("//button");
    await newTab.close();
  }

}

new FootballSlotAdminSpec().start();

