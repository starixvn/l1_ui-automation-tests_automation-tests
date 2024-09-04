import { FootballSpinLocators } from "../footballspin-locators";
import * as gameconfig from "../footballspin-configs";
import { AdminBases } from "sc-automation-core";

class FootballSpinAdminSpec extends AdminBases.TableRERGameBase {
  /**
   *
   */
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: [gameconfig.FootballSpinConfigs.choices[0], gameconfig.FootballSpinConfigs.choices[1]],
      gameConfiguration: gameconfig.FootballSpinConfigs,
      locators: FootballSpinLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      multiPlaceBetChoices: ["small", "ball"],
      Adminconfiguration:
        gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };

    super(adminOptions);
  }
  protected TC6(): void {
    
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

new FootballSpinAdminSpec().start();

