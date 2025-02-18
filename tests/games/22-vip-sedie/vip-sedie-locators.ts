import { Components } from "sc-automation-core";

export const VipSedieLocators = [
    new Components.ImageLocator("dealer", 556, 20, 165, 212),
    new Components.ImageLocator("evenChoice", 176, 286, 180, 41),
    new Components.ImageLocator("evenOwnbet", 329, 368, 28, 25),
    new Components.ImageLocator("oddChoice", 741, 277, 292, 53),
    new Components.ImageLocator("oddOwnbet", 866, 356, 97, 28),
    new Components.ImageLocator("playerBalance", 192, 644, 125, 23),
    new Components.ImageLocator("hamburgerMenu", 24, 146, 51, 56),
    new Components.ImageLocator("historyMenu", 21, 346, 52, 42),
    new Components.ImageLocator("historyPopup", 100, 90, 1090, 90),
    new Components.ImageLocator("errorMessage", 459, 520, 380, 37),
    new Components.ImageLocator("msgMaxbetLimit", 488, 527, 350, 22),
    new Components.ImageLocator("btnRightArrow", 910, 600, 35, 35),
    new Components.ImageLocator("guideMenu", 52, 400, 20, 20),
    new Components.ImageLocator("outside", 5, 5, 5, 5),
    new Components.ImageLocator("guide-1", 150, 72, 976, 580),
    new Components.ImageLocator("guide-2", 150, 72, 976, 580),
    new Components.ImageLocator("guide-3", 150, 72, 976, 580),
    new Components.ImageLocator("guide-4", 150, 72, 976, 580),
    new Components.ImageLocator("guide-5", 150, 72, 976, 580),
    new Components.ImageLocator("guide-6", 150, 72, 976, 580),
    new Components.ImageLocator("guide-7", 150, 72, 976, 580),
    new Components.ImageLocator("guide-8", 150, 72, 976, 580),
    new Components.ImageLocator("roundId", 338, 200, 80, 16),

];

export const MobiLocators = {
    inGameUI: [
      "//div[contains(@class,'game-header_title')][text()='Xóc Đĩa VIP']",
    ],
    betchoices: {
      even: "//div[contains(@class,'game-container_game-container')][2]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,' bet-options_even')]",
      odd: "//div[contains(@class,'game-container_game-container')][2]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,' bet-options_odd')]",
    },
    hedgeBetError: {
      "#__next": "Chỉ có thể đặt cược trên Chẵn hoặc Lẻ.",
    },
  };

  
export const MobiDirectLocators = [
  new Components.ImageLocator("dealer", 213, 200, 81, 70),
  new Components.ImageLocator("evenChoice", 46, 303, 80, 35),
  new Components.ImageLocator("oddChoice", 256, 303, 40, 35),
  new Components.ImageLocator("hamburgerMenu", 58, 50, 20, 20),
  new Components.ImageLocator("historyMenu", 53, 170, 15, 15),
  new Components.ImageLocator("historyPopup", 180, 53, 140, 15),
  new Components.ImageLocator("errorMessage", 133, 340, 250, 15),
  new Components.ImageLocator("guideMenu", 53, 214, 15, 15),
  new Components.ImageLocator("outside", 447, 60, 0, 0),
  new Components.ImageLocator("guide-1", 62, 78, 380, 505),
  new Components.ImageLocator("guide-2", 62, 78, 380, 505),
  new Components.ImageLocator("guide-3", 62, 78, 380, 505),
  new Components.ImageLocator("guide-4", 62, 78, 380, 505),
  new Components.ImageLocator("guide-5", 62, 78, 380, 505),
  new Components.ImageLocator("guide-6", 62, 78, 380, 505),
];