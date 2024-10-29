import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;
export const extVipBaccaratLocators = [
  new ImageLocator("imgdealer", 582, 12, 120, 160),
  new ImageLocator("playerChoice", 355, 391, 76, 76),
  new ImageLocator("bankerChoice", 725, 391, 76, 72),
  new ImageLocator("tieChoice", 583, 418, 62, 29),
  new ImageLocator("bigChoice", 135, 357, 42, 25),
  new ImageLocator("smallChoice", 955, 357, 46, 26),
  new ImageLocator("playerPairChoice", 148, 472, 110, 28),
  new ImageLocator("bankerPairChoice", 952, 472, 99, 29),
  new ImageLocator("naturalChoice", 1002, 611, 65, 45),
  new ImageLocator("bigOwnbetl1", 443, 511, 24, 22),
  new ImageLocator("bigOwnbetl2",  443, 511, 24, 22),
  new ImageLocator("defaultChipBarl1", 328, 596, 632, 77),
  new ImageLocator("defaultChipBarl2", 328, 596, 632, 77),
  new ImageLocator("hamburgerMenu", 32, 121, 24, 21),
  new ImageLocator("historyMenu", 33, 317, 20, 20),
  new ImageLocator("guideMenu", 35, 380, 16, 18),
  new ImageLocator("stake10", 401, 600, 42, 42),
  new ImageLocator("stake50", 401, 600, 42, 42),
  new ImageLocator("lblRoundIdOnTable", 236, 178, 120, 27),
  new ImageLocator("btnClosePopup", 5, 5, 10, 10),
  new ImageLocator("btnRightArrow", 925, 607, 31, 49),
  new ImageLocator("btnLeftArrow", 327, 607, 30, 49),
  new ImageLocator("imgStatistic", 786, 11, 76, 119),
  new ImageLocator("guide-1", 150, 72, 976, 580),
  new ImageLocator("guide-2", 150, 72, 976, 580),
  new ImageLocator("guide-3", 150, 72, 976, 580),
  new ImageLocator("guide-4", 150, 72, 976, 580),
  new ImageLocator("guide-5", 150, 72, 976, 580),
  new ImageLocator("guide-6", 150, 72, 976, 580),
  new ImageLocator("guide-7", 150, 72, 976, 580),
  new ImageLocator("guide-8", 150, 72, 976, 580),
];

export const VipBaccaratLocators = extVipBaccaratLocators.concat(Components.BaseLocator.GameLobbyLocator)

