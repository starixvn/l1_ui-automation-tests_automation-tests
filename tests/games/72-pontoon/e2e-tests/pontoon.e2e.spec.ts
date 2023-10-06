import { pontoonConfigs } from "../pontoon-configs";
import { E2EBases, Components } from "sc-automation-core";
import { PontoonLocatorsLocators } from "./pontoon-locators";

class PontoonE2ESpec extends E2EBases.CardGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: ["lblChoice1"],
      gameConfiguration: pontoonConfigs,
      locators: PontoonLocatorsLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 20 : 1,
      multiPlaceBetChoices: ["lblChoice1", "lblChoice2", "lblChoice3"],
      indexTicketHistory: { totalbet: -2, isIdLink: false },
      gameLobbyNavigaion: [
        Components.BaseLocator.baseLocatorNames.tabCardGames,
        Components.BaseLocator.baseLocatorNames.icoGame1,
      ],
    };
    super(e2eOptions);
  }
 
  protected runScenario(): void {
    super.runScenario();
  }
}

new PontoonE2ESpec().start();
