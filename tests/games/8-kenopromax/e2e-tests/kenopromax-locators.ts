import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extKenoProMaxLocators = [
  new ImageLocator("bigChoice", 231, 346, 39, 31),
  new ImageLocator("bigOwnbetl1", 357, 411, 21, 21),
  new ImageLocator("bigOwnbetl2", 357, 411, 21, 21),
  new ImageLocator("smallChoice", 765, 345, 45, 32),
  new ImageLocator("smallOwnbetl1", 903, 356, 29, 27),
  new ImageLocator("smallOwnbetl2", 903, 356, 29, 27),
  new ImageLocator("evenChoice", 190, 475, 45, 25),
  new ImageLocator("oddChoice", 767, 475, 20, 23),
  new ImageLocator("earthChoice", 888, 235, 32, 17),
  new ImageLocator("fireChoice", 740, 233, 31, 19),
  new ImageLocator("goldChoice", 275, 233, 27, 17),
  new ImageLocator("waterChoice", 565, 233, 36, 20),
  new ImageLocator("woodChoice", 420, 232, 31, 20),
  new ImageLocator("imgStatistic", 298, 23, 55, 149),
  new ImageLocator("hamburgerMenu", 35, 161, 26, 24),
  new ImageLocator("historyMenu", 38, 361, 23, 15),
  new ImageLocator("historyPopup", 120, 90, 1040, 120),
  new ImageLocator("defaultChipBarl1", 345, 591, 620, 74),
  new ImageLocator("defaultChipBarl2", 345, 591, 620, 74),
  new ImageLocator("btnHome", 33, 111, 35, 35),
  new ImageLocator("guideMenu", 35, 420, 23, 21),
  new ImageLocator("imgStatistic", 792, 7, 68, 123),
  new ImageLocator("txtMD5", 797, 138, 84, 22),
  new ImageLocator("imgDealer", 550, 7, 170, 216),
  new ImageLocator("stake1", 394, 593, 55, 55),
  new ImageLocator("stake5", 482, 617, 50, 45),
  new ImageLocator("stake10", 394, 593, 55, 55),
  new ImageLocator("stake5", 555, 593, 55, 55),
  new ImageLocator("outside", 10, 10, 10, 10),
  new ImageLocator("btnRightArrow", 930, 603, 30, 48),
  new ImageLocator("btnLeftArrow", 347, 607, 29, 50),
  new ImageLocator("lblRoundIdOnTable", 578, 530, 140, 26),
];

export const KenoProMaxLocators = extKenoProMaxLocators.concat(Components.BaseLocator.GameLobbyLocator)
