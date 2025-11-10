import { DJClubConfigs } from "../dj-club-configs";
import { SmokeBases, Components } from "sc-automation-core";

class DJClubSmokeSpec extends SmokeBases.PortrailClassicGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: DJClubConfigs,
      locators: Components.Portrail_Classic_Locators,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 0.02 : 0.4,
    };
    super(smokeOptions);
  }
}
new DJClubSmokeSpec().start();
