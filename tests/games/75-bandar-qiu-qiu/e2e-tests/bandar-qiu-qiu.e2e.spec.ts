import { BandarQiuQiuConfigs } from "../bandar-qiu-qiu-configs";
import { E2EBases, Components } from "sc-automation-core";
import { bandarQiuQiuLocators } from "./bandar-qiu-qiu-locators";

class BandarQiuQiuE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: BandarQiuQiuConfigs.choices,
      gameConfiguration: BandarQiuQiuConfigs,
      locators: bandarQiuQiuLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: BandarQiuQiuConfigs.choices.slice(2),
      indexTicketHistory: { totalbet: -2, isIdLink: true },
      gameLobbyNavigation: [
        Components.BaseLocator.baseLocatorNames.tabCardGames,
        Components.BaseLocator.baseLocatorNames.icoGame1,
      ],
      barItems: ["dragon","tiger","tie"]
    };
    super(e2eOptions);
  }

}

new BandarQiuQiuE2ESpec().start();
