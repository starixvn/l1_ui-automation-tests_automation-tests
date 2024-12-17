import { chrismasxLocators } from "../chrismasx-locators";
import { chrismasxConfigs } from "../chrismasx-configs";
import { SmokeBases } from "sc-automation-core";

class chrismasxSmokeSpec extends SmokeBases.CrashGameBase {

  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [
        chrismasxConfigs.choices[0]
      ],
      gameConfiguration: chrismasxConfigs,
      locators: chrismasxLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 5,
    };

    super(smokeOptions);
  }
}

new chrismasxSmokeSpec().start();
