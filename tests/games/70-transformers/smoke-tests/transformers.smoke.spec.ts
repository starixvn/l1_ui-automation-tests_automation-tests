import { transformersLocators } from "../transformers-locators";
import { transformersConfigs } from "../transformers-configs";
import { SmokeBases } from "sc-automation-core";

class transformersSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["25"],
      gameConfiguration: transformersConfigs,
      locators: transformersLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 0.4,
      isJackpot : process.env.npm_config_project === "l2" ? true : false,
    };
    super(smokeOptions);
  }
}

new transformersSmokeSpec().start();
