import { DJClubLocators } from "../dj-club-locators";
import { DJClubConfigs } from "../dj-club-configs";
import { SmokeBases } from "sc-automation-core";

class DJClubSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: DJClubConfigs,
      locators: DJClubLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 0.4,
    };
    super(smokeOptions);
  }
}
new DJClubSmokeSpec().start();
