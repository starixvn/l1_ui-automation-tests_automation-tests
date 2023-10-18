import { VipSedieConfigs } from "../vip-sedie-configs";
import { E2EBases, Components } from "sc-automation-core";
import { VipSedieLocators } from "./vip-sedie-locators";

class VipSedieE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: VipSedieConfigs.choices,
      gameConfiguration: VipSedieConfigs,
      locators: VipSedieLocators,
      waitBetTimeout: 8000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 50 : 10,
      multiPlaceBetChoices: VipSedieConfigs.choices.slice(2),
      indexTicketHistory: { totalbet: -8, isIdLink: false },
      gameLobbyNavigation: [
        Components.BaseLocator.baseLocatorNames.tabSedie,
        Components.BaseLocator.baseLocatorNames.icoGame1,
      ],
      barItems: ["odd","even"]
    };
    super(e2eOptions);
  }

  protected LedBarTests(): void {
    //inappropriate for this game
  }

}

new VipSedieE2ESpec().start();

