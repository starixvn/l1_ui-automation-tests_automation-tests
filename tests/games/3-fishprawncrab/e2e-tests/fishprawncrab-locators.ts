import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extFPCLocators = [
  new Components.ImageLocator("fishChoice", 590, 386, 66, 54),
  new Components.ImageLocator("fishOwnbetl1", 590, 399, 60, 60),
  new Components.ImageLocator("fishOwnbetl2", 590, 399, 60, 60),
  new Components.ImageLocator("crabChoice", 681, 388, 65, 57),
  new Components.ImageLocator("crabOwnbetl1", 686, 399, 60, 60),
  new Components.ImageLocator("prawnChoice", 772, 386, 63, 57),
  new Components.ImageLocator("roosterChoice", 780, 280, 50, 57),
  new Components.ImageLocator("gourdChoice", 690, 283, 42, 52),
  new Components.ImageLocator("stagChoice", 597, 278, 51, 59),
  new Components.ImageLocator("imgChipBarl1", 443, 501, 415, 55),
  new Components.ImageLocator("imgChipBarl2", 443, 501, 415, 55),
  new Components.ImageLocator("icoCloseGame", 908, 263, 35, 32),
  new Components.ImageLocator("historyMenu", 331, 346, 31, 29),
  new Components.ImageLocator("historyPopup", 465, 70, 300, 70),
  new Components.ImageLocator("errorMessage", 546, 370, 193, 30),
  new Components.ImageLocator("stake1", 436, 489, 97, 36),
  new Components.ImageLocator("stake10", 436, 489, 97, 36),
  new Components.ImageLocator("stake1000", 774, 552, 60, 20),
  new Components.ImageLocator("submitBetBoard", 730, 595, 119, 31),
  new Components.ImageLocator("outside", 5, 5, 5, 5),
  new Components.ImageLocator("msgMaxbetLimitl1", 488, 368, 350, 30),
  new Components.ImageLocator("msgMaxbetLimitl2", 488, 368, 350, 30),
  new Components.ImageLocator("icoHistory", 331, 346, 31, 29),
  new Components.ImageLocator("icoGuide", 931, 345, 26, 32),
  new Components.ImageLocator("icoStatistic", 346, 268, 41, 28),
  new Components.ImageLocator("imgStatistic1", 472, 115, 28, 88),
  new Components.ImageLocator("imgStatistic2", 521, 113, 27, 88),
  new Components.ImageLocator("btnFirstChip", 453, 501, 64, 24),
  new Components.ImageLocator("lblRoundIdOnTable", 432, 261, 96, 24),
  new Components.ImageLocator("btnRightArrow", 867,  515, 29, 35),
  new Components.ImageLocator("btnLeftArrow", 387, 516, 26, 36),
];

export const FPCLocators = extFPCLocators.concat(Components.BaseLocator.GameLobbyLocator)

