import { MarbleFootBallLocators } from "../marblefootball-locators";
import { MarbleFootBallConfigs } from "../marblelfootball-configs";
import {SmokeBases } from "sc-automation-core";

class MarbleFootBallSmokeSpec extends SmokeBases.MarbalGameBase {
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["home", "away", "draw","over", "under", "odd", "even"],
      gameConfiguration: MarbleFootBallConfigs,
      locators: MarbleFootBallLocators,
      waitBetTimeout: 85000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

}

new MarbleFootBallSmokeSpec().start();
