import { DragonTigerConfigs } from "../dragontigerfight-configs";
import { E2EBases, Components } from "sc-automation-core";
import { DragonTigerFightLocators } from "./dragontigerfight-locators";

class DragonTigerFightE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: DragonTigerConfigs.choices,
      gameConfiguration: DragonTigerConfigs,
      locators: DragonTigerFightLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: DragonTigerConfigs.choices.slice(2),
      indexTicketHistory: { totalbet: -2, isIdLink: true },
      gameLobbyNavigaion: [
        Components.GameLobbyLocator.GameLobbyLocatorNames.tabCardGames,
        Components.GameLobbyLocator.GameLobbyLocatorNames.icoGame1,
      ],
      barItems: ["dragon","tiger","tie"]
    };
    super(e2eOptions);
  }

}

new DragonTigerFightE2ESpec().start();
