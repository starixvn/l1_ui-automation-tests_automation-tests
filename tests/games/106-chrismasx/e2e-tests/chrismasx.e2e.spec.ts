import { chrismasxConfigs } from "../chrismasx-configs";
import { E2EBases, Components } from "sc-automation-core";
import { chrismasxLocators } from "./chrismasx-locators";

class chrismasxE2ESpec extends E2EBases.CrashGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [],
      gameConfiguration: chrismasxConfigs,
      locators: chrismasxLocators,
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

new chrismasxE2ESpec().start();
