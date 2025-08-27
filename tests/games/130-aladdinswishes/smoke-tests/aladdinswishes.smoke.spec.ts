import { aladdinswishesLocators } from "../aladdinswishes-locators";
import { aladdinswishesConfigs } from "../aladdinswishes-configs";
import { SmokeBases } from "sc-automation-core";

class aladdinswishesSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [aladdinswishesConfigs.choices[0]],
      
      gameConfiguration: aladdinswishesConfigs,
      locators: aladdinswishesLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

  protected betStakeLevelTests(): void {
    // no test
  }
}

new aladdinswishesSmokeSpec().start();
