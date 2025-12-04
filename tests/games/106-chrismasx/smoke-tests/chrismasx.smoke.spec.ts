import { chrismasxLocators } from "../chrismasx-locators";
import { chrismasxConfigs } from "../chrismasx-configs";
import { SmokeBases } from "sc-automation-core";

class chrismasxSmokeSpec extends SmokeBases.CrashGameBaseCocos {

  constructor() {
    const smokeOptions: SmokeBases.IBaseOptionsCocos = {
      placeBetChoices: [
        chrismasxConfigs.choices[0]
      ],
      gameConfiguration: chrismasxConfigs,
      locators: chrismasxLocators,
      snapshotFolderPath: __filename,
      uiLocatorsToVerify: chrismasxLocators.uiLocatorsToVerify,
      placeBetAmount: process.env.npm_config_project === "l2" ? [chrismasxLocators.btnBetChip10] : [chrismasxLocators.btnBetChip5],
    };

    super(smokeOptions);
  }
}

new chrismasxSmokeSpec().start();
