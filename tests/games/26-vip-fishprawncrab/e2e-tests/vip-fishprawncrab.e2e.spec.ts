import { VIPFPCConfigs } from "../vip-fishprawncrab-configs";
import { E2EBases, Components } from "sc-automation-core";
import { VipFPCLocators } from "./vip-fishprawncrab-locators";

class VipSedieE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: [
        "mountain",
        "ocean",
        "stag",
        "gourd",
        "rooster",
        "fish",
        "crab",
        "prawn",
        "anyTriple",
      ],
      gameConfiguration: VIPFPCConfigs,
      locators: VipFPCLocators,
      waitBetTimeout: 6500,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 50 : 10,
      multiPlaceBetChoices: ["mountain", "anyTriple"],
      indexTicketHistory: { totalbet: -8, isIdLink: false },
      gameLobbyNavigation: [
        Components.BaseLocator.baseLocatorNames.tabSedie,
        Components.BaseLocator.baseLocatorNames.icoGame1,
      ],
      barItems: ["odd","even"],       
      historyItems : {
        roundid: "phien",
        betamount: "ocean",
        betwin: "betwin"
    },
    };
    super(e2eOptions);
  }

  protected LedBarTests(): void {
  }
  protected turnbackGame(): void {
  }
  protected returnGameLobby(): void {
  }

}

new VipSedieE2ESpec().start();

