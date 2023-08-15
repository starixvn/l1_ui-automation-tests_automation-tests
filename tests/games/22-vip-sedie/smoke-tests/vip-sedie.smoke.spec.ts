import { VipSedieLocators } from "../vip-sedie-locators";
import { VipSedieConfigs } from "../vip-sedie-configs";
import { SmokeBases } from "sc-automation-core";

class VipSedieSmokeSpec extends SmokeBases.TableGameBase {
<<<<<<< HEAD
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [VipSedieConfigs.choices[1]],
            waitBetTimeout: 10000,
            gameConfiguration: VipSedieConfigs,
            locators: VipSedieLocators,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "vg"? 50 : 10
        };
=======
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [VipSedieConfigs.choices[1]],
      waitBetTimeout: 10000,
      gameConfiguration: VipSedieConfigs,
      locators: VipSedieLocators,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 50 : 10,
    };
>>>>>>> master

    super(smokeOptions);
  }
}

new VipSedieSmokeSpec().start();
