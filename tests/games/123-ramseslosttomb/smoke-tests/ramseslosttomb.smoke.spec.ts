import { RamsesLostTombConfigs } from "../ramseslosttomb-configs";
import { SmokeBases, Components } from "sc-automation-core";

class RamsesLostTombSmokeSpec extends SmokeBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: RamsesLostTombConfigs,
      locators: Components.Portrail_Cascading_Locators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 0.02 : 0.02,
      isJackpot: process.env.npm_config_project === "l2" ? true : false,
    };
    super(smokeOptions);
  }


}

new RamsesLostTombSmokeSpec().start();
