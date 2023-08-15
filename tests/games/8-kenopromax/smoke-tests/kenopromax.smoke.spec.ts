import { KenoProMaxLocators } from "../kenopromax-locators";
import { KenoProMaxConfigs } from "../kenopromax-configs";
import { SmokeBases } from "sc-automation-core";

class KenoProMaxSmokeSpec extends SmokeBases.TableGameBase {
<<<<<<< HEAD
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [KenoProMaxConfigs.choices[0]],
            gameConfiguration: KenoProMaxConfigs,
            locators: KenoProMaxLocators,
            waitBetTimeout: 9000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 10 : 1
        };
=======
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [KenoProMaxConfigs.choices[0]],
      gameConfiguration: KenoProMaxConfigs,
      locators: KenoProMaxLocators,
      waitBetTimeout: 9000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
    };
>>>>>>> master

    super(smokeOptions);
  }
  protected inGameDealerTests(): void {}
}

new KenoProMaxSmokeSpec().start();
