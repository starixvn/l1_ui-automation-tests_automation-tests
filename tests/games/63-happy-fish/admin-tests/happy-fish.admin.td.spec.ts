import { HappyFishLocators } from "../happy-fish-locators";
import * as gameconfig from "../happy-fish-configs";
import { AdminBases } from "sc-automation-core";
let env = process.env.npm_config_env;

class DragonBallAdminSpec extends AdminBases.SlotBetDetailGameBase {
  constructor() {
    const adminOptions: AdminBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: gameconfig.HappyFishConfigs,
      locators: HappyFishLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1, 
      Adminconfiguration:
        env?.includes("local") ? gameconfig[`AdminDataSet_local`] : gameconfig[`AdminDataSet_` + process.env.npm_config_env],
    };
    super(adminOptions);
  }
}

new DragonBallAdminSpec().start();

