import { Components } from "sc-automation-core";

export const MegaKenoLocators = [
  new Components.ImageLocator("bigChoice", 181, 384, 90, 60),
  new Components.ImageLocator("smallChoice", 715, 384, 90, 60),
  new Components.ImageLocator("outside", 10, 10, 10, 10),
  new Components.ImageLocator("hamburgerMenu", 50, 190, 51, 56),
  new Components.ImageLocator("historyMenu", 54, 510, 30, 25),
  new Components.ImageLocator("historyPopup", 574, 86, 130, 25),
  new Components.ImageLocator("errorMessage", 298, 482, 350, 35),
  new Components.ImageLocator("closeguide", 1223, 287, 40, 30),
  new Components.ImageLocator("big2Choice", 1047, 162, 50, 30),
  new Components.ImageLocator("small2Choice", 1168, 162, 50, 30),
  new Components.ImageLocator("big3Choice", 1045, 330, 50, 30),
  new Components.ImageLocator("small3Choice", 1168, 330, 50, 30),
  new Components.ImageLocator("big4Choice", 1045, 506, 50, 30),
  new Components.ImageLocator("small4Choice", 1168, 506, 50, 30),
  new Components.ImageLocator("errorMessage2", 1055, 161, 185, 50),
  new Components.ImageLocator("errorMessage3", 1055, 330, 185, 50),
  new Components.ImageLocator("errorMessage4", 1052, 505, 185, 50),
  new Components.ImageLocator("msgMaxbetLimit", 314, 480, 350, 30),
  new Components.ImageLocator("btnRightArrow", 700, 600, 35, 35),
  new Components.ImageLocator("imgGame3", 429, 189, 115, 28),
  new Components.ImageLocator("imgGame2", 1076, 102, 115, 28),
  new Components.ImageLocator("imgGame1", 1081, 275, 115, 28),
  new Components.ImageLocator("imgGame4", 1081, 448, 115, 25),
  new Components.ImageLocator("mnuKeno", 740, 88, 90, 30),
  new Components.ImageLocator("icoMegaKeno", 380, 400, 10, 10),
];

export const KenoLocators = {
  inGameUI: [
    "//div[contains(@class,'game-header_title')][text()='Mega Keno 2']",
  ],
  betchoices: {
    big: "//div[contains(@class,'base_bet-options-megakeno2')]//div[contains(@class,'bet-options_big')]",
    small: "//div[contains(@class,'base_bet-options-megakeno2')]//div[contains(@class,'bet-options_small')]",
  },
  hedgeBetError: {
    "#__next": "Chỉ có thể đặt cược trên Tài hoặc Xỉu.",
  },
  disconectError :
    `//div[contains(@class,'error-message-container')]//div//strong[(text() = "Mega Keno 2")]`,
  
  reconnectButton:
    `//div[contains(@class,'error-message-container')]//div//strong[(text() = "Mega Keno 2")]/parent::div//following-sibling::div//button`,
};

export const GameLocators = [
  new Components.ImageLocator("bigChoice", 180, 380, 0, 0),
  new Components.ImageLocator("smallChoice", 770, 380, 0, 0),
  new Components.ImageLocator("roundId", 155, 200, 80, 18),
  new Components.ImageLocator("switchMainView", 1245, 120, 0, 0),
  new Components.ImageLocator("outside", 5, 5, 5, 5),
]