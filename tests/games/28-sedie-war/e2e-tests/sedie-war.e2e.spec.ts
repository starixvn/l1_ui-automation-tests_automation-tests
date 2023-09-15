import { SedieWarConfigs } from "../sedie-war-configs";
import { E2EBases, Components } from "sc-automation-core";
import { SedieWarLocators } from "./sedie-war-locators";
const avoidHedgebets = ["banker", "odd", "bankerOdd", "playerOdd", "player", "tie"]
const multiPlaceBetChoices =  SedieWarConfigs.choices.filter(value => !avoidHedgebets.includes(value));

class SedieWarE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: SedieWarConfigs.choices,
      gameConfiguration: SedieWarConfigs,
      locators: SedieWarLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: multiPlaceBetChoices,
      indexTicketHistory: { totalbet: -2, isIdLink: false },
      gameLobbyNavigaion: [
        Components.GameLobbyLocator.GameLobbyLocatorNames.tabSedie,
        Components.GameLobbyLocator.GameLobbyLocatorNames.icoGame3,
      ],
    };
    super(e2eOptions);
  }

  protected LedBarTests(): void {
    // can not clarify it on this game
  }
 
}

new SedieWarE2ESpec().start();