import { MissionImpossibleLocators } from "../mission-impossible-locators";
import { MissionImpossibleConfigs } from "../mission-impossible-configs";
import { SmokeBases } from "sc-automation-core";

class MissionImpossibleSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *MI7
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["1", "25"],
      gameConfiguration: MissionImpossibleConfigs,
      locators: MissionImpossibleLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }
}

new MissionImpossibleSmokeSpec().start();
