import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extBitcoinMasterLocators = [
  new ImageLocator("upChoice", 833, 259, 68, 30),
  new ImageLocator("downChoice", 1064, 206, 68, 25),
  new ImageLocator("historyMenu", 158, 236, 0, 0),
  new ImageLocator("historyPopup", 556, 71, 160, 50),
  new ImageLocator("stake1", 840, 460, 25, 25),
  new ImageLocator("stake10",  840, 460, 25, 25),
  new ImageLocator("errorMessage", 841, 323, 300, 20),
  new ImageLocator("upChoiceBetBoard", 876, 271),
  new ImageLocator("downChoiceBetBoard", 1093, 271),
  new ImageLocator("submitBetBoard", 1082, 556, 30, 30),
  new ImageLocator("imgGameName", 203, 98, 330, 44),
  new ImageLocator("icoHistory", 137, 220, 39, 36),
  new ImageLocator("icoCloseGame", 138, 142, 42, 36),
  new ImageLocator("icoGameGuide", 138, 297, 39, 34),
  new ImageLocator("icoStatistic", 135, 552, 43, 38),
  new ImageLocator("imgStatistic", 311, 152, 369, 129),
  new ImageLocator("icoStatisticClose", 763, 165, 28, 30),
  new ImageLocator("imgGameGuide", 150, 72, 976, 580),
  new ImageLocator("outside", 5, 5, 5, 5),
];

export const BitcoinMasterLocatorsLocators = Components.BaseLocator.GameLobbyLocator.concat(extBitcoinMasterLocators)
