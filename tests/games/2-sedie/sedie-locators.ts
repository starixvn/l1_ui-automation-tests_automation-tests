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
];

export const MobiLocators = {
    inGameUI: [
      "//div[contains(@class,'game-header_title')][text()='Xóc Đĩa']",
    ],
    betchoices: {
      even: "//div[contains(@class,'game-container_game-container')][1]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,'bet-options_even')]",
      odd: "//div[contains(@class,'game-container_game-container')][1]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,'bet-options_odd')]",
    },
    hedgeBetError: {
      "#__next": "Chỉ có thể đặt cược trên Chẵn hoặc Lẻ.",
    },
  };
  