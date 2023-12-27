import { OnePieceLocators } from "../onepiece-locators";
import { OnePieceConfigs } from "../onepiece-configs";
import { SmokeBases } from "sc-automation-core";

class OnePieceSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["1", "25"],
      gameConfiguration: OnePieceConfigs,
      locators: OnePieceLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }
}

new OnePieceSmokeSpec().start();
