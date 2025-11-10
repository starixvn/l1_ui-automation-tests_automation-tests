import { NightClubConfigs } from "../night-club-configs";
import { SmokeBases, Components } from "sc-automation-core";

class NightClubSmokeSpec extends SmokeBases.PortrailClassicGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: NightClubConfigs,
      locators: Components.Portrail_Classic_Locators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 0.02 : 0.4,
    };
    super(smokeOptions);
  }
}

new NightClubSmokeSpec().start();
