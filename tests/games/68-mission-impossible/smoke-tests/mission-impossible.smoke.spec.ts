import { MissionImpossibleConfigs } from "../mission-impossible-configs";
import { SmokeBases, Components } from "sc-automation-core";

class MissionImpossibleSmokeSpec extends SmokeBases.PortrailClassicGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: MissionImpossibleConfigs,
      locators: Components.Portrail_Classic_Locators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 0.02 : 0.4,
    };
    super(smokeOptions);
  }
}

new MissionImpossibleSmokeSpec().start();
