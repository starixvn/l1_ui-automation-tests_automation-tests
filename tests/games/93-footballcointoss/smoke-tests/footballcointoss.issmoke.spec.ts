import { L1IsLocators,L2IsLocators } from "../footballcointoss-locators";
import { FootballCointossConfigs,Isconfigs } from "../footballcointoss-configs";
import { SmokeBases ,Components} from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";

class ISSmokeSpec extends SmokeBases.ISGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      gameConfiguration: FootballCointossConfigs,
      locators: process.env.npm_config_project?.includes("l2") ? L2IsLocators : L1IsLocators,
      waitBetTimeout: 5000,
      placeBetChoices: ["head"],
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project?.includes("l2") ? 10 : 1,
      isconfig: Isconfigs
    };

    super(smokeOptions);
  }

}

new ISSmokeSpec().start();
