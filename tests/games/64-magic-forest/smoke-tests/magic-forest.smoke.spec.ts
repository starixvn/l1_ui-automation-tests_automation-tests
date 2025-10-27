import { MagicForestConfigs } from "../magic-forest-configs";
import { SmokeBases, Components } from "sc-automation-core";

class MagicForestSmokeSpec extends SmokeBases.PortrailClassicGameBase {
  /**
   *
   */docker
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: MagicForestConfigs,
      locators: Components.Portrail_Classic_Locators ,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 0.02 : 0.4,
    };
    super(smokeOptions);
  }


}

new MagicForestSmokeSpec().start();
