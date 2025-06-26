import { NightClubLocators } from "../night-club-locators";
import { NightClubConfigs } from "../night-club-configs";
import { SmokeBases, Components } from "sc-automation-core";

class NightClubSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: NightClubConfigs,
      locators: NightClubLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 0.4,
    };
    super(smokeOptions);
  }
}

new NightClubSmokeSpec().start();
