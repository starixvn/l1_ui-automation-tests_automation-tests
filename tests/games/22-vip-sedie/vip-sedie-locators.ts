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

  
export const L1MobiDirectLocators = [
  new Components.ImageLocator("dealer", 213, 200, 81, 70),
  new Components.ImageLocator("l1evenChoice", 100, 322, 56, 30),
  new Components.ImageLocator("l1oddChoice", 257, 322, 56, 30),
  new Components.ImageLocator("hamburgerMenu", 110, 137, 0, 0),
  new Components.ImageLocator("historyMenu", 110, 224, 0, 0),
  new Components.ImageLocator("errorMessage", 133, 340, 250, 15),
  new Components.ImageLocator("guideMenu", 110, 260, 0, 0),
  new Components.ImageLocator("outside", 394, 134, 0, 0),
  new Components.ImageLocator("l1guide-1", 103, 140, 290, 388),
  new Components.ImageLocator("l1guide-2", 103, 140, 290, 388),
  new Components.ImageLocator("l1guide-3", 103, 140, 290, 388),
  new Components.ImageLocator("l1guide-4", 103, 140, 290, 388),
  new Components.ImageLocator("l1guide-5", 103, 140, 290, 388),
  new Components.ImageLocator("l1guide-6", 103, 140, 290, 388),
];

export const L2MobiDirectLocators = [
  new Components.ImageLocator("dealer", 213, 200, 81, 70),
  new Components.ImageLocator("l2evenChoice", 100, 322, 56, 30),
  new Components.ImageLocator("l2oddChoice", 257, 322, 56, 30),
  new Components.ImageLocator("hamburgerMenu", 98, 95, 0, 0),
  new Components.ImageLocator("historyMenu", 98, 191, 0, 0),
  new Components.ImageLocator("historyPopup", 211, 130, 65, 15),
  new Components.ImageLocator("errorMessage", 133, 340, 250, 15),
  new Components.ImageLocator("guideMenu", 94, 225, 0, 0),
  new Components.ImageLocator("outside", 405, 93, 0, 0),
  new Components.ImageLocator("l2guide-1", 87, 97, 315, 440),
  new Components.ImageLocator("l2guide-2", 87, 97, 315, 440),
  new Components.ImageLocator("l2guide-3", 87, 97, 315, 440),
  new Components.ImageLocator("l2guide-4", 87, 97, 315, 440),
  new Components.ImageLocator("l2guide-5", 87, 97, 315, 440),
  new Components.ImageLocator("l2guide-6", 87, 97, 315, 440),
];