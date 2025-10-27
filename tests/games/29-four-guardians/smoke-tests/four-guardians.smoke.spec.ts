import { FourGuardiansConfigs } from "../four-guardians-configs";
import { SmokeBases, Components } from "sc-automation-core";

class FourGuardiansSmokeSpec extends SmokeBases.PortrailClassicGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: FourGuardiansConfigs,
      locators: Components.Portrail_Classic_Locators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 0.02 : 0.4,
      isJackpot : process.env.npm_config_project === "l2" ? true : false,
    };
    super(smokeOptions);
  }

}

new FourGuardiansSmokeSpec().start();
