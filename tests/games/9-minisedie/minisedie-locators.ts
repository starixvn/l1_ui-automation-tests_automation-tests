import { Components } from "sc-automation-core";

export const MiniSedieLocators = [
  new Components.ImageLocator("evenChoice", 255, 369, 100, 40),
  new Components.ImageLocator("evenOwnbet", 350, 356, 97, 28),
  new Components.ImageLocator("oddChoice", 572, 361, 100, 40),
  new Components.ImageLocator("oddOwnbet", 866, 356, 97, 28),
  new Components.ImageLocator("playerBalance", 192, 644, 125, 23),
  new Components.ImageLocator("outside", 10, 10, 0, 0),
  new Components.ImageLocator("historyMenu", 175, 415, 30, 30),
  new Components.ImageLocator("historyPopup", 555, 112, 180, 20),
  new Components.ImageLocator("errorMessage", 330, 392, 320, 35),
  new Components.ImageLocator("closeguide", 1132, 45, 25, 25),
  new Components.ImageLocator("even2Choice", 900, 168, 100, 40),
  new Components.ImageLocator("odd2Choice", 1005, 208, 35, 29),
  new Components.ImageLocator("even3Choice", 900, 350, 100, 40),
  new Components.ImageLocator("odd3Choice", 1008, 395, 40, 30),
  new Components.ImageLocator("even4Choice", 900, 544, 100, 40),
  new Components.ImageLocator("odd4Choice", 1008, 583, 38, 28),
  new Components.ImageLocator("errorMessage2", 839, 146, 200, 35),
  new Components.ImageLocator("errorMessage3", 839, 333, 200, 35),
  new Components.ImageLocator("errorMessage4", 839, 520, 200, 35),
  new Components.ImageLocator("msgMaxbetLimit", 350, 392, 300, 22),
  new Components.ImageLocator("btnRightArrow", 712, 503, 35, 35),
  new Components.ImageLocator("guideMenu",736, 513, 27, 25),
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

export const IsLocators = {
  odd: {x: 365,y: 311},
  gameIcon: "//div[contains(@style,'SBC_SeDie')]"
}


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

