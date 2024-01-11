import { Components } from "sc-automation-core";

const ImageLocator = Components.ImageLocator;

export const BandarQiuQiuLocators = [
  new ImageLocator("dealer", 574, 5, 125, 95),
  new ImageLocator("spadeChoice", 231, 284, 130, 110),
  new ImageLocator("spadeOwnbetl1", 270, 396, 40, 35),
  new ImageLocator("spadeOwnbetl2", 270, 396, 40, 35),
  new ImageLocator("heartChoice", 452,  284, 130, 110),
  new ImageLocator("clubChoice",  688,  284, 130, 110),
  new ImageLocator("clubChoice",  941,  284, 130, 110),
  new ImageLocator("hamburgerMenu", 61, 136, 20, 20),
  new ImageLocator("historyMenu", 72, 335, 20, 20),
  new ImageLocator("historyPopup", 568, 75, 150, 25),
  new ImageLocator("stake1", 415, 625, 30, 25),
  new ImageLocator("stake10", 415, 625, 30, 25),
  new ImageLocator("roundId", 200, 196, 100, 20)
];
