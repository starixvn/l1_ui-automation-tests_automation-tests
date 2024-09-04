import { SpaceFlightConfigs } from "../spaceflight-configs";
import { E2EBases, Components } from "sc-automation-core";
import { SpaceFlightLocators } from "./spaceflight-locators";

class SpaceFlightE2ESpec extends E2EBases.CrashGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [],
      gameConfiguration: SpaceFlightConfigs,
      locators: SpaceFlightLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      indexTicketHistory: { totalbet: -2, isIdLink: true },
      gameLobbyNavigation: [
        Components.BaseLocator.baseLocatorNames.tabOthers,
        Components.BaseLocator.baseLocatorNames.icoGame1,
      ],
    };
    super(e2eOptions);
  }
}

new SpaceFlightE2ESpec().start();
