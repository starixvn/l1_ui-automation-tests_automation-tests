import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extSevenUpDownLocators = [
  new Components.ImageLocator("upChoice", 411, 386, 121, 31),
  new Components.ImageLocator("upOwnbetl1", 455, 432, 22, 19),
  new Components.ImageLocator("upOwnbetl2", 455, 432, 22, 19),
  new Components.ImageLocator("downChoice", 751, 386, 129, 31),
  new Components.ImageLocator("downOwnbetl1", 786, 406, 30, 27),
  new Components.ImageLocator("sevenChoice", 620, 395, 40, 36),
  new Components.ImageLocator("icoStatistic", 350, 253, 33, 23),
  new Components.ImageLocator("imgStatistic812", 446, 93, 39, 22),
  new Components.ImageLocator("imgStatistic7", 448, 135, 30, 25),
  new Components.ImageLocator("imgStatistic26", 447, 171, 38, 27),
  new Components.ImageLocator("imgChipBarl1", 433, 497, 428, 65),
  new Components.ImageLocator("imgChipBarl2", 433, 497, 428, 65),
  new Components.ImageLocator("icoCloseGame", 896, 248, 32, 30),
  new Components.ImageLocator("historyPopup", 465, 70, 300, 70),
  new Components.ImageLocator("stake1", 436, 489, 97, 36),
  new Components.ImageLocator("stake10", 436, 489, 97, 36),
  new Components.ImageLocator("stake1000", 774, 552, 60, 20),
  new Components.ImageLocator("submitBetBoard", 730, 595, 119, 31),
  new Components.ImageLocator("outside", 5, 5, 5, 5),
  new Components.ImageLocator("historyMenu", 327, 348, 26, 25),
  new Components.ImageLocator("msgMaxbetLimitl1", 488, 368, 350, 30),
  new Components.ImageLocator("msgMaxbetLimitl2", 488, 368, 350, 30),
  new Components.ImageLocator("icoHistory", 325, 345, 31, 28),
  new Components.ImageLocator("icoGuide", 923, 346, 28, 27),
  new Components.ImageLocator("btnFirstChip", 453, 501, 64, 24),
  new Components.ImageLocator("lblRoundIdOnTable", 438, 246, 80, 24),
  new Components.ImageLocator("btnRightArrow", 868, 511, 28, 40),
  new Components.ImageLocator("btnLeftArrow", 387, 508, 26, 42),
  new Components.ImageLocator("guide-1", 98, 38, 1083, 643),
  new Components.ImageLocator("guide-2", 98, 38, 1083, 643),
  new Components.ImageLocator("guide-3", 98, 38, 1083, 643),
  new Components.ImageLocator("guide-4", 98, 38, 1083, 643),
  new Components.ImageLocator("guide-5", 98, 38, 1083, 643),
  new Components.ImageLocator("guide-6", 98, 38, 1083, 643),
  new Components.ImageLocator("guide-7", 98, 38, 1083, 643),
  new Components.ImageLocator("guide-8", 98, 38, 1083, 643),
];

export const SevenUpDownLocators = extSevenUpDownLocators.concat(Components.BaseLocator.GameLobbyLocator)

