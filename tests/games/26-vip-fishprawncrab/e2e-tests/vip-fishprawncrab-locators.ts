import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;
export const extVipFPCLocators = [
  new ImageLocator("imgdealer", 563, 23, 160, 195),
  new ImageLocator("stagChoice", 283, 250, 63, 71),
  new ImageLocator("gourdChoice", 286, 368, 56, 63),
  new ImageLocator("roosterChoice", 278, 480, 69, 76),
  new ImageLocator("fishChoice", 943, 245, 62, 77),
  new ImageLocator("crabChoice", 937, 367, 78, 66),
  new ImageLocator("prawnChoice", 941, 480, 65, 75),
  new ImageLocator("anyTripleChoice", 471, 285, 347, 65),
  new ImageLocator("mountainChoice", 468, 453, 152, 50),
  new ImageLocator("oceanChoice", 677, 455, 143, 48),
  new ImageLocator("mountainOwnbetl1", 527, 537, 24, 21),
  new ImageLocator("mountainOwnbetl2",  527, 537, 24, 21),
  new ImageLocator("defaultChipBarl1", 356, 593, 651, 83),
  new ImageLocator("defaultChipBarl2", 356, 593, 651, 83),
  new ImageLocator("hamburgerMenu",36, 161, 24, 24),
  new ImageLocator("historyMenu", 37, 357, 24, 23),
  new ImageLocator("guideMenu", 41, 421, 14, 19),
  new ImageLocator("stake10", 443, 605, 30, 35),
  new ImageLocator("stake50", 443, 605, 30, 35),
  new ImageLocator("lblRoundIdOnTable", 315, 196, 157, 32),
  new ImageLocator("btnClosePopup", 5, 5, 10, 10),
  new ImageLocator("btnRightArrow", 963, 611, 33, 52),
  new ImageLocator("btnLeftArrow", 360, 610, 33, 52),
];

export const VipFPCLocators = extVipFPCLocators.concat(Components.BaseLocator.GameLobbyLocator)

