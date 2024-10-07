import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extThreeCardsLocators = [
  new ImageLocator("imgdealer", 566, 50, 146, 181),
  new ImageLocator("redChoice", 215, 265, 91, 56),
  new ImageLocator("blackChoice", 788, 276, 107, 41),
  new ImageLocator("diamondsChoice", 193, 430, 62, 67),
  new ImageLocator("heartsChoice", 422, 435, 64, 56),
  new ImageLocator("spadesChoice", 656, 433, 59, 63),
  new ImageLocator("clubsChoice", 887, 436, 61, 59),
  new ImageLocator("redOwnbetl1", 336, 353, 22, 20),
  new ImageLocator("redOwnbetl2", 336, 353, 22, 20),
  new ImageLocator("blackOwnbetl1", 921, 352, 22, 20),
  new ImageLocator("blackOwnbetl2", 921, 352, 22, 20),
  new ImageLocator("defaultChipBarl1", 318, 606, 648, 81),
  new ImageLocator("defaultChipBarl2", 318, 606, 648, 81),
  new ImageLocator("btnHome", 17, 96, 34, 25),
  new ImageLocator("hamburgerMenu", 17, 158, 36, 28),
  new ImageLocator("historyMenu", 25, 360, 18, 18),
  new ImageLocator("historyPopup", 465, 70, 609, 186),
  new ImageLocator("guideMenu", 23, 417, 23, 23),
  new ImageLocator("lblRoundIdOnTable", 287, 183, 131, 23),
  new ImageLocator("redBar", 940, 555, 8, 6),
  new ImageLocator("blackBar", 940, 555, 8, 6),
  new ImageLocator("outside", 5, 5, 5, 5),
  new ImageLocator("btnRightArrow", 923, 621, 38, 52),
  new ImageLocator("btnLeftArrow", 320, 618, 32, 58),
];

export const ThreeCardsLocators = extThreeCardsLocators.concat(Components.BaseLocator.GameLobbyLocator)

