import { NightClubLocators } from "../night-club-locators";
import { NightClubConfigs } from "../night-club-configs";
import { SmokeBases, Components } from "sc-automation-core";

class NightClubSmokeSpec extends SmokeBases.SlotGameBase {
<<<<<<< HEAD
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [NightClubConfigs.choices[0]],
            gameConfiguration: NightClubConfigs,
            locators: NightClubLocators,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };
        super(smokeOptions);
    }

=======
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [NightClubConfigs.choices[0]],
      gameConfiguration: NightClubConfigs,
      locators: NightClubLocators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
    super(smokeOptions);
  }
>>>>>>> master
}

new NightClubSmokeSpec().start();
