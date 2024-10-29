import { Components } from "sc-automation-core";

export const KenoProMaxLocators = [
    new Components.ImageLocator("bigChoice", 228, 330, 60, 50),
    new Components.ImageLocator("bigOwnbet", 450, 370, 30, 30),
    new Components.ImageLocator("smallChoice", 757, 330, 60, 50),
    new Components.ImageLocator("playerBalance", 192, 644, 125, 23),
    new Components.ImageLocator("hamburgerMenu", 28, 152, 40, 40),
    new Components.ImageLocator("historyMenu", 32, 352, 40, 40),
    new Components.ImageLocator("historyPopup", 579, 80, 250, 30),
    new Components.ImageLocator("stake1", 441, 616, 0, 0),
    new Components.ImageLocator("stake10", 441, 616, 0, 0),
    new Components.ImageLocator("errorMessage", 476, 508, 320, 20),
    new Components.ImageLocator("msgMaxbetLimit", 492, 504, 350, 22),
    new Components.ImageLocator("btnRightArrow", 931, 600, 35, 35),
    new Components.ImageLocator("guideMenu", 35, 420, 23, 21),
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

export const MobiLocators = {
    inGameUI: [
      "//div[contains(@class,'game-header_title')][text()='Keno Pro Max']",
    ],
    betchoices: {
      big: "//div[contains(@class,'game-container_game-container')][7]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,'bet-options_big')]",
      small: "//div[contains(@class,'game-container_game-container')][7]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,'bet-options_small')]",
    },
    hedgeBetError: {
      "#__next": "Chỉ có thể đặt cược trên Tài hoặc Xỉu.",
    },
  };