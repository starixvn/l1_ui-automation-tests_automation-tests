import { aladdinswishesConfigs } from "../aladdinswishes-configs";
import { SmokeBases, Components } from "sc-automation-core";

class aladdinswishesSmokeSpec extends SmokeBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [aladdinswishesConfigs.choices[0]],
      
      gameConfiguration: aladdinswishesConfigs,
      locators: Components.BaseLocator.CascadingSlotLocatorsV3,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 1 : 0.2,
    };
    super(smokeOptions);
  }

}

new aladdinswishesSmokeSpec().start();
