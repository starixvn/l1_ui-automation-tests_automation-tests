import { Components } from "sc-automation-core";

export const SedieLocators = [
  new Components.ImageLocator("dealer", 579, 44, 140, 156),
  new Components.ImageLocator("evenChoice", 256, 277, 150, 53),
  new Components.ImageLocator("evenOwnbet", 350, 356, 97, 28),
  new Components.ImageLocator("oddChoice", 741, 277, 150, 53),
  new Components.ImageLocator("oddOwnbet", 866, 356, 97, 28),
  new Components.ImageLocator("red4Choice", 245, 413, 30, 85),
  new Components.ImageLocator("playerBalance", 192, 644, 125, 23),
  new Components.ImageLocator("hamburgerMenu", 24, 146, 51, 56),
  new Components.ImageLocator("historyMenu", 21, 346, 52, 42),
  new Components.ImageLocator("historyPopup", 100, 90, 1090, 90),
  new Components.ImageLocator("errorMessage", 459, 492, 380, 37),
  new Components.ImageLocator("msgMaxbetLimit", 478, 488, 400, 30),
  new Components.ImageLocator("btnRightArrow", 911, 588, 35, 35),
  new Components.ImageLocator("roundId", 350, 205, 110, 20),
  new Components.ImageLocator("guideMenu", 35, 416, 20, 20),
  new Components.ImageLocator("outside", 5, 5, 5, 5),
  new Components.ImageLocator("guide-1", 150, 72, 976, 580),
  new Components.ImageLocator("guide-2", 150, 72, 976, 580),
  new Components.ImageLocator("guide-3", 150, 72, 976, 580),
  new Components.ImageLocator("guide-4", 150, 72, 976, 580),
  new Components.ImageLocator("guide-5", 150, 72, 976, 580),
  new Components.ImageLocator("guide-6", 150, 72, 976, 580),
  new Components.ImageLocator("minigamesicon", 1201, 641, 10, 10),
];

export const MobiLocators = {
  inGameUI: ["//div[contains(@class,'game-header_title')][text()='Xóc Đĩa']"],
  betchoices: {
    even: "//div[contains(@class,'game-container_game-container')][1]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,'bet-options_even')]",
    odd: "//div[contains(@class,'game-container_game-container')][1]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,'bet-options_odd')]",
  },
  hedgeBetError: {
    "#__next": "Chỉ có thể đặt cược trên Chẵn hoặc Lẻ.",
  },
};

export const L1MobiDirectLocators = [
  new Components.ImageLocator("dealer", 213, 200, 81, 70),
  new Components.ImageLocator("l1evenChoice", 83, 303, 80, 35),
  new Components.ImageLocator("l1oddChoice", 256, 303, 40, 35),
  new Components.ImageLocator("hamburgerMenu", 112, 140, 0, 0),
  new Components.ImageLocator("historyMenu", 110, 225, 0, 0),
  new Components.ImageLocator("historyPopup", 180, 53, 140, 15),
  new Components.ImageLocator("errorMessage", 133, 340, 250, 15),
  new Components.ImageLocator("guideMenu", 90, 225, 0, 0),
  new Components.ImageLocator("outside", 404, 100, 0, 0),
  new Components.ImageLocator("l1guide-1", 87, 97, 315, 440),
  new Components.ImageLocator("l1guide-2", 87, 97, 315, 440),
  new Components.ImageLocator("l1guide-3", 87, 97, 315, 440),
  new Components.ImageLocator("l1guide-4", 87, 97, 315, 440),
  new Components.ImageLocator("l1guide-5", 87, 97, 315, 440),
  new Components.ImageLocator("l1guide-6", 87, 97, 315, 440),
];

export const L2MobiDirectLocators = [
  new Components.ImageLocator("dealer", 213, 200, 81, 70),
  new Components.ImageLocator("l2evenChoice", 110, 330, 95, 30),
  new Components.ImageLocator("l2oddChoice", 260, 330, 95, 30),
  new Components.ImageLocator("hamburgerMenu", 105, 140, 0, 0),
  new Components.ImageLocator("historyMenu", 105, 220, 0, 0),
  new Components.ImageLocator("historyPopup", 180, 53, 140, 15),
  new Components.ImageLocator("errorMessage", 133, 340, 250, 15),
  new Components.ImageLocator("guideMenu", 103, 256, 0, 0),
  new Components.ImageLocator("outside", 386, 140, 0, 0),
  new Components.ImageLocator("l2guide-1", 105, 150, 274, 383),
  new Components.ImageLocator("l2guide-2", 105, 150, 274, 383),
  new Components.ImageLocator("l2guide-3", 105, 150, 274, 383),
  new Components.ImageLocator("l2guide-4", 105, 150, 274, 383),
  new Components.ImageLocator("l2guide-5", 105, 150, 274, 383),
  new Components.ImageLocator("l2guide-6", 105, 150, 274, 383),
];

