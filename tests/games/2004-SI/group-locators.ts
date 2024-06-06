import { Components } from "sc-automation-core";

export const GroupLocators = {
  1: [
    new Components.ImageLocator("bigChoice", 415, 270, 90, 50),
    new Components.ImageLocator("bigChoiceBetBoard", 391, 369, 157, 42),
    new Components.ImageLocator("stake1", 436, 489, 97, 36),
    new Components.ImageLocator("stake10", 436, 489, 97, 36),
    new Components.ImageLocator("submitBetBoard", 730, 595, 119, 31),
  ],
  3: [new Components.ImageLocator("fishChoice", 595, 399, 55, 60)],
  7: [
    new Components.ImageLocator("dragonChoice", 420, 280, 100, 85),
    new Components.ImageLocator("tigerChoice", 776, 280, 100, 85),
    new Components.ImageLocator("tieChoice", 610, 385, 70, 30),
    new Components.ImageLocator("stake1", 467, 497, 0, 0),
    new Components.ImageLocator("stake10", 467, 497, 0, 0),
  ],
  9: [new Components.ImageLocator("oddChoice", 572, 291, 100, 40)],
  10: [
    new Components.ImageLocator("bigChoice", 276, 514, 40, 26),
    new Components.ImageLocator("smallChoice", 786, 500, 50, 50),
    new Components.ImageLocator("stake1", 441, 616, 0, 0),
    new Components.ImageLocator("stake10", 441, 616, 0, 0),
  ],
  45: [
    new Components.ImageLocator("hiChoice", 750, 240, 110, 75),
    new Components.ImageLocator("loChoice", 750, 337, 110, 75),
    new Components.ImageLocator("stake1", 448, 465, 50, 30),
    new Components.ImageLocator("stake10", 448, 465, 50, 30),
    new Components.ImageLocator("startbet", 440, 311, 100, 30),
    new Components.ImageLocator("collect", 600, 350, 110, 30),
  ],
};

export const MemberSiteLocators = {
  rightCollapseMenu: '#right-bar-collapse-buttonIcon',
  instantPlayIcon: "//div[@id='rightBar']//div[@title='Instant Play'][@class='c-widget__icon-collapse']",
  MiniGamesbtn: "//*[text()='Mini Games']",
  SeDiegame: "//div[contains(@style,'SBC_SeDie')]",
  FPCgame: "//div[contains(@style,'SBC_FishPrawnCrab')]",
  BigSmallgame: "//div[contains(@style,'SBC_BigSmall')]",
  Baccaratgame: "//div[contains(@style,'SBC_Baccarat')]",
  DragonTigergame: "//div[contains(@style,'SBC_DragonTiger')]",
  SicBogame: "//div[contains(@style,'SBC_SicBo')]",
  Colorgamegame: "//div[contains(@style,'SBC_Colorgame')]",

}
