import { Components } from "sc-automation-core";


export const BigSmallLocators = [
    new Components.ImageLocator("dealer", 610, 230, 60, 30),
    new Components.ImageLocator("bigChoice", 415, 270, 90, 50),
    new Components.ImageLocator("bigOwnbet", 442, 406, 45, 35),
    new Components.ImageLocator("smallChoice", 774, 270, 89, 59),
    new Components.ImageLocator("smallOwnbet", 405, 790, 45, 35),
    new Components.ImageLocator("playerBalance", 192, 644, 125, 23),
    new Components.ImageLocator("historyMenu", 306, 326, 52, 42),
    new Components.ImageLocator("historyPopup", 465, 70, 300, 70),
    new Components.ImageLocator("errorMessage", 546, 385, 193, 30),
    new Components.ImageLocator("bigChoiceBetBoard", 391, 369, 157, 42),
    new Components.ImageLocator("smallChoiceBetBoard", 742, 369, 157, 42),
    new Components.ImageLocator("stake1", 436, 489, 97, 36),
    new Components.ImageLocator("stake10", 436, 489, 97, 36),
    new Components.ImageLocator("stake1000", 774, 552, 60, 20),
    new Components.ImageLocator("submitBetBoard", 730, 595, 119, 31),
    new Components.ImageLocator("outside", 5, 5, 5, 5),
    new Components.ImageLocator("msgMaxbetLimit", 488, 378, 350, 30),
    new Components.ImageLocator("guideMenu", 919, 310, 36, 35),
    new Components.ImageLocator("guide-1", 150, 72, 976, 580),
    new Components.ImageLocator("guide-2", 150, 72, 976, 580),
    new Components.ImageLocator("guide-3", 150, 72, 976, 580),
    new Components.ImageLocator("guide-4", 150, 72, 976, 580),
    new Components.ImageLocator("guide-5", 150, 72, 976, 580),
    new Components.ImageLocator("guide-6", 150, 72, 976, 580),

];

export const MobiLocators = {
    inGameUI: [
      "//div[contains(@class,'game-header_title')][text()='Tài Xỉu']",
    ],
    betchoices: {
      big: "//div[contains(@class,'game-container_game-container')][4]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,'bet-options_big')]",
      small: "//div[contains(@class,'game-container_game-container')][4]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,'bet-options_small')]",
    },
    hedgeBetError: {
      "#__next": "Chỉ được cược 1 bên.",
    }
  };
  
  export const IsLocators = [
    new Components.ImageLocator("bigChoice", 1037, 478, 0, 0),
  ];