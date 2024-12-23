import { MarbalFootBallLocators } from "../marbalfootball-locators";
import { MarbalFootBallConfigs } from "../marbalfootball-configs";
import {Components, SmokeBases } from "sc-automation-core";
import { expect } from "@playwright/test";
import { GameEvent } from "sc-automation-core/lib/_shared";

class MarbalFootBallSmokeSpec extends SmokeBases.MarbalGameBase {
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["home", "away", "draw","over", "under", "odd", "even"],
      gameConfiguration: MarbalFootBallConfigs,
      locators: MarbalFootBallLocators,
      waitBetTimeout: 85000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };

    super(smokeOptions);
  }

  protected inGameOddsTests(): void {
      
  }


  // protected runScenario(): void {
  //   this.inGameDealerTests();
  //   // super.runScenario();
  // }

}

new MarbalFootBallSmokeSpec().start();
