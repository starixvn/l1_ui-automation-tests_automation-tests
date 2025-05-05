import { Components } from "sc-automation-core";

export const BaccaratLocators = [
    new Components.ImageLocator("dealer", 555, 70, 160, 130),
    new Components.ImageLocator("playerChoice", 316, 390, 80, 24),
    new Components.ImageLocator("bigChoice", 276, 514, 40, 26),
    new Components.ImageLocator("bigOwnbet", 450, 370, 30, 30),
    new Components.ImageLocator("smallChoice", 786, 500, 50, 50),
    new Components.ImageLocator("playerBalance", 192, 644, 125, 23),
    new Components.ImageLocator("hamburgerMenu", 40, 161, 30, 30), 
    new Components.ImageLocator("historyMenu", 57, 366, 0, 0),
    new Components.ImageLocator("historyPopup", 80, 109, 1134, 68),
    new Components.ImageLocator("stake1", 441, 616, 0, 0),
    new Components.ImageLocator("stake10", 441, 616, 0, 0),
    new Components.ImageLocator("errorMessage", 500, 562, 300, 25),
    new Components.ImageLocator("msgMaxbetLimit", 481, 565, 350, 22),
    new Components.ImageLocator("btnRightArrow", 921, 616, 35, 35),
    new Components.ImageLocator("guideMenu", 47, 420, 15, 15),
    new Components.ImageLocator("outside", 5, 5, 5, 5),
    new Components.ImageLocator("guide-1", 150, 72, 976, 580),
    new Components.ImageLocator("guide-2", 150, 72, 976, 580),
    new Components.ImageLocator("guide-3", 150, 72, 976, 580),
    new Components.ImageLocator("guide-4", 150, 72, 976, 580),
    new Components.ImageLocator("guide-5", 150, 72, 976, 580),
    new Components.ImageLocator("guide-6", 150, 72, 976, 580),
    new Components.ImageLocator("guide-7", 150, 72, 976, 580),
    new Components.ImageLocator("guide-8", 150, 72, 976, 580),
    new Components.ImageLocator("roundId", 367, 210, 80, 24),
];

export const MobiLocators = {
    inGameUI: [
      "//div[contains(@class,'game-header_title')][text()='Cào Baccarat']",
    ],
    betchoices: {
      player: "(//div[contains(@class,'bet-options_bet-choice-name')][normalize-space()='Nhà Con'])[2]",
      banker: "(//div[contains(@class,'bet-options_bet-choice-name')][normalize-space()='Nhà Cái'])[2]",
    },
    hedgeBetError: {
      "#__next": "Chỉ có thể đặt cược trên Nhà Con hoặc Nhà Cái.",
    },
  };


    export const L1IsLocators = {
      player: {x: 365,y: 311},
      gameIcon: "//div[contains(@style,'Saba_Baccarat')]"
    }

    export const L2IsLocators = {
    player: {x: 365,y: 311},
    gameIcon: "//div[contains(@style,'3834_Vgaming_BaccaratRuby')]"
  }

  export const L1MobiDirectLocators = [
    new Components.ImageLocator("dealer", 213, 200, 81, 70),
    new Components.ImageLocator("l1playerChoice", 93, 293, 99, 26),
    new Components.ImageLocator("l1bankerChoice", 314, 291, 99, 26),
    new Components.ImageLocator("bigChoice", 73, 207, 37, 23),
    new Components.ImageLocator("smallChoice", 394, 207, 37, 23),
    new Components.ImageLocator("hamburgerMenu", 78, 80, 43, 37),
    new Components.ImageLocator("historyMenu", 92, 191, 0, 0),
    new Components.ImageLocator("historyPopup", 206, 87, 110, 20),
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
    new Components.ImageLocator("l2playerChoice", 118, 315, 70, 18),
    new Components.ImageLocator("l2bankerChoice", 311, 315, 70, 18),
    new Components.ImageLocator("bigChoice", 73, 207, 37, 23),
    new Components.ImageLocator("smallChoice", 394, 207, 37, 23),
    new Components.ImageLocator("hamburgerMenu", 111, 137, 0, 0),
    new Components.ImageLocator("historyMenu", 114, 225, 0, 0),
    new Components.ImageLocator("historyPopup", 206, 87, 110, 20),
    new Components.ImageLocator("errorMessage", 133, 340, 250, 15),
    new Components.ImageLocator("guideMenu", 112, 254, 0, 0),
    new Components.ImageLocator("outside", 404, 100, 0, 0),
    new Components.ImageLocator("l2guide-1", 87, 97, 315, 440),
    new Components.ImageLocator("l2guide-2", 87, 97, 315, 440),
    new Components.ImageLocator("l2guide-3", 87, 97, 315, 440),
    new Components.ImageLocator("l2guide-4", 87, 97, 315, 440),
    new Components.ImageLocator("l2guide-5", 87, 97, 315, 440),
    new Components.ImageLocator("l2guide-6", 87, 97, 315, 440),
  ];