import { WildWestMostWantedConfigs} from "../wild-west-most-wanted-configs";
import { E2EBases, Components } from "sc-automation-core";

class PortrailwildwestmostwantedE2ESpec extends E2EBases.PortrailCascadingGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [WildWestMostWantedConfigs.choices[2]],
      gameConfiguration: WildWestMostWantedConfigs,
      locators: Components.Portrail_Cascading_Locators,
      waitBetTimeout: 5000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 5 : 0.2,
    };
    super(smokeOptions);
  }
  
}

new PortrailwildwestmostwantedE2ESpec().start();
