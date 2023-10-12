import { SedieConfigs } from "../sedie-configs";
import { E2EBases, Components } from "sc-automation-core";
import { SedieLocators } from "./sedie-locators";

class SedieE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: SedieConfigs.choices,
      gameConfiguration: SedieConfigs,
      locators: SedieLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: SedieConfigs.choices.slice(2),
      indexTicketHistory: { totalbet: -8, isIdLink: false },
      gameLobbyNavigaion: [
        Components.BaseLocator.baseLocatorNames.tabSedie,
        Components.BaseLocator.baseLocatorNames.icoGame2,
      ],
      barItems: ["odd","even"]
    };
    super(e2eOptions);
  }

}

new SedieE2ESpec().start();
