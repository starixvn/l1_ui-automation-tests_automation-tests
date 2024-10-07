import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;
export const extLotteryLocators = [
  new ImageLocator("imgdealer", 988, 615, 119, 66),
  new ImageLocator("4SetsChoice", 268, 120, 97, 37),
  new ImageLocator("specialChoice", 443, 121, 144, 35),
  new ImageLocator("headChoice", 673, 122, 90, 30),
  new ImageLocator("tailChoice", 868, 120, 102, 35),
  new ImageLocator("27SetsChoice", 95, 121, 35, 31),
  new ImageLocator("othersChoice", 1052, 122, 103, 33),
  new ImageLocator("bigChoice", 125, 325, 116, 57),
  new ImageLocator("smallChoice", 411, 323, 106, 62),
  new ImageLocator("evenChoice", 738, 326, 158, 70),
  new ImageLocator("bigOwnbetl1", 155, 455, 57, 32),
  new ImageLocator("bigOwnbetl2", 155, 455, 57, 32),
  new ImageLocator("defaultChipBarl1", 321, 611, 642, 75),
  new ImageLocator("defaultChipBarl2", 321, 611, 642, 75),
  new ImageLocator("btnHome", 17, 96, 34, 25),
  new ImageLocator("hamburgerMenu", 56, 633, 30, 30),
  new ImageLocator("historyMenu", 58, 487, 30, 30),
  new ImageLocator("guideMenu", 57, 557, 29, 29),
  new ImageLocator("lblRoundIdOnTable", 436, 26, 125, 30),
  new ImageLocator("outside", 5, 5, 5, 5),
  new ImageLocator("btnRightArrow", 923, 621, 38, 52),
  new ImageLocator("btnLeftArrow", 320, 618, 32, 58),
];

export const LotteryLocators = extLotteryLocators.concat(Components.BaseLocator.GameLobbyLocator)

