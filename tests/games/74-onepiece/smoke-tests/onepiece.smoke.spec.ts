import { OnePieceLocators } from "../onepiece-locators";
import { OnePieceConfigs } from "../onepiece-configs";
import { SmokeBases, Components } from "sc-automation-core";

class OnePieceSmokeSpec extends SmokeBases.PortrailClassicGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: OnePieceConfigs,
      locators: Components.Portrail_Classic_Locators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 0.02 : 0.4,
      isJackpot : process.env.npm_config_project === "l2" ? true : false,
    };
    super(smokeOptions);
  }
}


new OnePieceSmokeSpec().start();
