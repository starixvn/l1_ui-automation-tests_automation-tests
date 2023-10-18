import { BigSmallSicBoConfigs } from "../bigsmall-sicbo-configs";
import { E2EBases, Components, CustomExpect } from "sc-automation-core";
import { BigSmallSicBoLocators } from "./bigsmall-sicbo-locators";
const multiPlaceBetChoices = BigSmallSicBoConfigs.choices.filter(element => element !== "big");


class BigSmallSicBoE2ESpec extends E2EBases.TableGameBase {
  /**
   *
   */
  constructor() {
    const e2eOptions: E2EBases.IBaseOptions = {
      placeBetChoices: ["big","small"],
      gameConfiguration: BigSmallSicBoConfigs,
      locators: BigSmallSicBoLocators,
      waitBetTimeout: 13000,
      snapshotFolderPath: __filename,
      placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
      multiPlaceBetChoices: multiPlaceBetChoices.slice(15),
      indexTicketHistory: { totalbet: -2, isIdLink: false },
      gameLobbyNavigation: [Components.BaseLocator.baseLocatorNames.tabBigSmall,Components.BaseLocator.baseLocatorNames.icoGame1],
    };
    super(e2eOptions);
  }

  protected LedBarTests(): void {}


}

new BigSmallSicBoE2ESpec().start();
