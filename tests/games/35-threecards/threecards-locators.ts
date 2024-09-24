import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const ThreeCardsLocators = [
    new ImageLocator("dealer", 560, 60, 140, 160),
    new ImageLocator("redChoice", 215, 260, 120, 85),
    new ImageLocator("blackOwnbet", 450, 370, 30, 30),
    new ImageLocator("blackChoice", 776, 260, 120, 85),
    new ImageLocator("playerBalance", 192, 644, 125, 23),
    new ImageLocator("hamburgerMenu", 16, 155, 41, 41),
    new ImageLocator("historyMenu", 17, 350, 43, 43),
    new ImageLocator("historyPopup", 195, 92, 906, 85),
    new ImageLocator("stake1", 467, 640, 0, 0),
    new ImageLocator("stake10", 467, 640, 0, 0),
    new ImageLocator("errorMessage", 466, 504, 350, 27),
    new ImageLocator("msgMaxbetLimit", 473, 505, 350, 30),
    new ImageLocator("btnRightArrow", 920, 615, 35, 35),
    new ImageLocator("guideMenu", 22, 418, 25, 25),
    new ImageLocator("outside", 5, 5, 5, 5),
];

export const MobiLocators = {
    inGameUI: [
      "//div[contains(@class,'game-header_title')][text()='3 Lá Đỏ Đen']",
    ],
    betchoices: {
      red: "(//div[contains(@class,'bet-options_red')])[1]",
      black: "(//div[contains(@class,'bet-options_black')])[1]",
    },
    hedgeBetError: {
      "#__next": "Chỉ có thể đặt cược trên Đỏ hoặc Đen.",
    },
  };