import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const VipBaccaratLocators = [
    new ImageLocator("dealer", 555, 30, 160, 130),
    new ImageLocator("bigChoice", 133, 350, 50, 40),
    new ImageLocator("bigOwnbet", 450, 370, 30, 30),
    new ImageLocator("smallChoice", 954, 355, 50, 50),
    new ImageLocator("playerBalance", 192, 644, 125, 23),
    new ImageLocator("hamburgerMenu", 40, 132, 0, 0), 
    new ImageLocator("historyMenu", 40, 325, 0, 0),
    new ImageLocator("historyPopup", 80, 109, 1134, 68),
    new ImageLocator("stake10", 441, 616, 0, 0),
    new ImageLocator("stake50", 441, 616, 0, 0),
    new ImageLocator("errorMessage", 460, 518, 350, 25),
    new ImageLocator("msgMaxbetLimit", 478, 520, 350, 22),
    new ImageLocator("btnRightArrow", 924, 600, 35, 35),
    new ImageLocator("guideMenu", 35, 380, 16, 18),
    new ImageLocator("outside", 5, 5, 5, 5),
];

export const MobiLocators = {
    inGameUI: [
      "//div[contains(@class,'game-header_title')][text()='Cào Baccarat VIP']",
    ],
    betchoices: {
      player: "(//div[contains(@class,'bet-options_bet-choice-name')][normalize-space()='Nhà Con'])[1]",
      banker: "(//div[contains(@class,'bet-options_bet-choice-name')][normalize-space()='Nhà Cái'])[1]",
    },
    hedgeBetError: {
      "#__next": "Chỉ có thể đặt cược trên Nhà Con hoặc Nhà Cái.",
    },
  };