import { RamsesLostTombConfigs} from "../ramseslosttomb-configs";
import { E2EBases, Components } from "sc-automation-core";

class RamsesLostTombE2ESpec extends E2EBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [RamsesLostTombConfigs.choices[2]],
      gameConfiguration: RamsesLostTombConfigs,
      locators: Components.Portrail_Cascading_Locators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }
  
}

new RamsesLostTombE2ESpec().start();
