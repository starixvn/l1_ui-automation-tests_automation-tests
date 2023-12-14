import { SpaceFlightLocators } from "../spaceflight-locators";
import { SpaceFlightConfigs } from "../spaceflight-configs";
import { SmokeBases } from "sc-automation-core";

class SpaceFlightSmokeSpec extends SmokeBases.CrashGameBase {

  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: [
        SpaceFlightConfigs.choices[0]
      ],
      gameConfiguration: SpaceFlightConfigs,
      locators: SpaceFlightLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 5,
    };

    super(smokeOptions);
  }

  protected
}

new SpaceFlightSmokeSpec().start();
