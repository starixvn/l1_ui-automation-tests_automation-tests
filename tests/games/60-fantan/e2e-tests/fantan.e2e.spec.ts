import { FanTanConfigs } from "../fantan-configs";
import { E2EBases, Components } from "sc-automation-core";
import { FantanLocatorsLocators } from "./fantan-locators";

class FantanE2ESpec extends E2EBases.CardGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: ["lblChoice1"],
      gameConfiguration: FanTanConfigs,
      locators: FantanLocatorsLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 20 : 1,
      multiPlaceBetChoices: ["lblChoice1", "lblChoice2", "lblChoice3"],
      indexTicketHistory: { totalbet: -2, isIdLink: false },
      gameLobbyNavigation: [
        Components.BaseLocator.baseLocatorNames.tabCardGames,
        Components.BaseLocator.baseLocatorNames.icoGame7,
      ],          
      historyItems : {
        roundid: "phien",
        betamount: "totalAmount",
        betwin: "betwin"
    },
    };
    super(e2eOptions);
  }
 
  protected runScenario(): void {
    super.runScenario();
  }
}

new FantanE2ESpec().start();
