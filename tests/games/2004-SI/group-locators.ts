import { Components } from "sc-automation-core";

export const GroupLocators = {
  1: [
    new Components.ImageLocator("bigChoice", 1037, 478, 0, 0),
    new Components.ImageLocator("stake1", 1035, 609, 0, 0),
    new Components.ImageLocator("stake10", 1035, 609, 0, 0),
  ],
  3: [new Components.ImageLocator("fishChoice",  1015, 512, 0, 0),
    new Components.ImageLocator("stake1",1035, 609, 0, 0),
    new Components.ImageLocator("stake10", 1035, 609, 0, 0),
  ],
  
  7: [
    new Components.ImageLocator("dragonChoice",  1030, 460, 0, 0),
    new Components.ImageLocator("stake1",1035, 609, 0, 0),
    new Components.ImageLocator("stake10", 1035, 609, 0, 0),
  ],
  9: [new Components.ImageLocator("oddChoice", 1027, 418, 0, 0),
    new Components.ImageLocator("stake1",1035, 609, 0, 0),
    new Components.ImageLocator("stake10", 1035, 609, 0, 0),
  ],
  10: [
    new Components.ImageLocator("playerChoice",  1030, 497, 0, 0),
    new Components.ImageLocator("stake1",1035, 609, 0, 0),
    new Components.ImageLocator("stake10", 1035, 609, 0, 0),
  ],
  45: [
    new Components.ImageLocator("hiChoice",  1154, 391, 0, 0),
    new Components.ImageLocator("loChoice",  1154, 453, 0, 0),
    new Components.ImageLocator("stake1", 1027, 590, 0, 0),
    new Components.ImageLocator("stake10",1027, 590, 0, 0),
    new Components.ImageLocator("startbet", 1054, 424, 0, 0),
    new Components.ImageLocator("collect", 1110, 515, 0, 0),
  ],
  25: [new Components.ImageLocator("bigChoice", 1030, 418, 0, 0),
    new Components.ImageLocator("stake1",1035, 609, 0, 0),
    new Components.ImageLocator("stake10", 1035, 609, 0, 0),
  ],
  71: [new Components.ImageLocator("yellowChoice", 1015, 492, 0, 0),
    new Components.ImageLocator("stake1",1035, 609, 0, 0),
    new Components.ImageLocator("stake10", 1035, 609, 0, 0),
  ],
  80: [new Components.ImageLocator("trumpChoice", 1123, 489, 0, 0),
    new Components.ImageLocator("stake1",1035, 609, 0, 0),
    new Components.ImageLocator("stake10", 1035, 609, 0, 0),
  ],

};

export const MemberSiteLocators = {
  rightCollapseMenu: '#right-bar-collapse-buttonIcon',
  instantPlayIcon: "//div[@id='rightBar']//div[@title='Instant Play'][@class='c-widget__icon-collapse']",
  MiniGamesbtn: "//*[text()='Mini Games']",
  MiniSeDiegame: "//div[contains(@style,'SBC_SeDie')]",
  FPCgame: "//div[contains(@style,'SBC_FishPrawnCrab')]",
  BigSmallgame: "//div[contains(@style,'SBC_BigSmall')]",
  Baccaratgame: "//div[contains(@style,'SBC_Baccarat')]",
  DragonTigergame: "//div[contains(@style,'SBC_DragonTiger')]",
  SicBogame: "//div[contains(@style,'SBC_SicBo')]",
  Colorgamegame: "//div[contains(@style,'SBC_Colorgame')]",
}
