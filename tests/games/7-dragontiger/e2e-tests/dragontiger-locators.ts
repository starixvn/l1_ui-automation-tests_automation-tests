import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extDragonTigerLocators = [
  new Components.ImageLocator("dragonChoice", 403, 277, 103, 86),
  new Components.ImageLocator("dragonOwnbetl1", 451, 372, 31, 20),
  new Components.ImageLocator("tigerChoice", 742, 275, 98, 91),
  new Components.ImageLocator("tigerOwnbetl1", 798, 375, 33, 22),
  new Components.ImageLocator("icoStatistic", 343, 230, 39, 27),
  new Components.ImageLocator("imgStatistic", 480, 108, 46, 88),
  new Components.ImageLocator("icoCloseGame", 906, 226, 30, 30),
  new Components.ImageLocator("historyMenu", 328, 307, 30, 30),
  new Components.ImageLocator("historyPopup", 465, 70, 300, 70),
  new Components.ImageLocator("stake1", 447, 477, 34, 31),
  new Components.ImageLocator("stake10", 447, 477, 34, 31),
  new Components.ImageLocator("icoHistory", 328, 307, 30, 30),
  new Components.ImageLocator("icoGuide", 925, 308, 30, 27),
  new Components.ImageLocator("btnFirstChip", 453, 501, 64, 24),
  new Components.ImageLocator("lblRoundIdOnTable", 591, 206, 106, 20),
  new Components.ImageLocator("btnRightArrow", 866, 481, 30, 39),
  new Components.ImageLocator("btnLeftArrow", 385, 485, 30, 32),
  new Components.ImageLocator("outside", 5, 5, 5, 5),
  new Components.ImageLocator("guide-1", 150, 72, 976, 580),
  new Components.ImageLocator("guide-2", 150, 72, 976, 580),
  new Components.ImageLocator("guide-3", 150, 72, 976, 580),
  new Components.ImageLocator("guide-4", 150, 72, 976, 580),
  new Components.ImageLocator("guide-5", 150, 72, 976, 580),
  new Components.ImageLocator("guide-6", 150, 72, 976, 580),
  new Components.ImageLocator("guide-7", 150, 72, 976, 580),
  new Components.ImageLocator("guide-8", 150, 72, 976, 580),
];

export const DragonTigerLocators = extDragonTigerLocators.concat(Components.BaseLocator.GameLobbyLocator)

