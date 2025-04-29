import { rocketxLocators } from "../rocketx-locators";
import { rocketXConfigs } from "../rocketx-configs";
import { SmokeBases } from "sc-automation-core";

class rocketxSmokeSpec extends SmokeBases.CrashGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [rocketXConfigs.choices[0]],
      gameConfiguration: rocketXConfigs,
      locators: rocketxLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      isJackpot: process.env.npm_config_project === "l2" ? true : false,
    };
    
    super(smokeOptions);
  }
 
}

new rocketxSmokeSpec().start();

