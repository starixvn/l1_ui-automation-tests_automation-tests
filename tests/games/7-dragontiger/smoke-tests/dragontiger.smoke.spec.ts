import { DragonTigerLocators } from "../dragontiger-locators";
import { DragonTigerConfigs } from "../dragontiger-configs";
import { SmokeBases } from "sc-automation-core";

class DragonTigerSmokeSpec extends SmokeBases.MiniGameBase {
<<<<<<< HEAD
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [DragonTigerConfigs.choices[0]],
            gameConfiguration: DragonTigerConfigs,
            locators: DragonTigerLocators,
            waitBetTimeout: 7000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };
=======
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [DragonTigerConfigs.choices[0]],
      gameConfiguration: DragonTigerConfigs,
      locators: DragonTigerLocators,
      waitBetTimeout: 7000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
>>>>>>> master

    super(smokeOptions);
  }
}

new DragonTigerSmokeSpec().start();
