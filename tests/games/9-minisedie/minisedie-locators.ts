import { Components } from "sc-automation-core";

export const MiniSedieLocators = [
  new Components.ImageLocator("evenChoice", 255, 299, 100, 40),
  new Components.ImageLocator("evenOwnbet", 350, 356, 97, 28),
  new Components.ImageLocator("oddChoice", 572, 291, 100, 40),
  new Components.ImageLocator("oddOwnbet", 866, 356, 97, 28),
  new Components.ImageLocator("playerBalance", 192, 644, 125, 23),
  new Components.ImageLocator("outside", 10, 10, 0, 0),
  new Components.ImageLocator("historyMenu", 186, 361, 52, 42),
  new Components.ImageLocator("historyPopup", 555, 112, 180, 20),
  new Components.ImageLocator("errorMessage", 330, 392, 320, 35),
  new Components.ImageLocator("closeguide", 953, 571),
  new Components.ImageLocator("even2Choice", 900, 168, 100, 40),
  new Components.ImageLocator("odd2Choice", 1022, 168, 100, 40),
  new Components.ImageLocator("even3Choice", 900, 350, 100, 40),
  new Components.ImageLocator("odd3Choice", 1022, 350, 100, 40),
  new Components.ImageLocator("even4Choice", 900, 544, 100, 40),
  new Components.ImageLocator("odd4Choice", 1022, 544, 100, 40),
  new Components.ImageLocator("errorMessage2", 839, 146, 200, 35),
  new Components.ImageLocator("errorMessage3", 839, 333, 200, 35),
  new Components.ImageLocator("errorMessage4", 839, 520, 200, 35),
  new Components.ImageLocator("msgMaxbetLimit", 350, 392, 300, 22),
  new Components.ImageLocator("btnRightArrow", 712, 503, 35, 35),
];

export const IsMiniSedieLocators = [
  new Components.ImageLocator("oddChoice", 1027, 418, 0, 0),
  new Components.ImageLocator("stake1", 1035, 609, 0, 0),
  new Components.ImageLocator("stake10", 1035, 609, 0, 0),
];

export const MobiLocators = {
  inGameUI: [
    "//div[contains(@class,'game-header_title')][text()='Xóc Đĩa Mini']",
  ],
  betchoices: {
    even: "//div[contains(@class,'game-container_game-container')][3]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,' bet-options_even')]",
    odd: "//div[contains(@class,'game-container_game-container')][3]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,' bet-options_odd')]",
  },
  hedgeBetError: {
    "#__next": "Chỉ có thể đặt cược trên Chẵn hoặc Lẻ.",
  },
};

