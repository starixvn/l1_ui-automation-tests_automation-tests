import { SpaceFlightLocators } from "../spaceflight-locators";
import { SpaceFlightConfigs } from "../spaceflight-configs";
import { SmokeBases } from "sc-automation-core";

class SpaceFlightSmokeSpec extends SmokeBases.CrashGameBaseCocos {

  constructor() {
    const smokeOptions: SmokeBases.IBaseOptionsCocos = {
      gameConfiguration: SpaceFlightConfigs,
      locators: SpaceFlightLocators,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? [SpaceFlightLocators.btnBetChip10] : [SpaceFlightLocators.btnBetChip1],
      uiLocatorsToVerify: SpaceFlightLocators.uiLocatorsToVerify,
    };

    super(smokeOptions);
  }
}

new SpaceFlightSmokeSpec().start();
