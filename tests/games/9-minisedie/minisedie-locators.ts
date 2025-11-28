import { Components } from "sc-automation-core";

export const MiniSedieLocatorsImage = [
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
  new Components.ImageLocator("roundId", 310, 306, 60, 15),
];

export const L1IsLocators = {
  odd: {x: 180,y: 110},
  gameIcon: "//div[contains(@style,'SBC_SeDie')]"
}

export const L2IsLocators = {
  odd: {x: 180,y: 110},
  gameIcon: "//div[contains(@style,'Vgaming_MiniSeDie')]"
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

export const MiniSedie1Locators = {
  ...Components.RoundGame_Locators,
  btnEven: "Canvas/mini-panel/MiniPanel/MiniGames/MiniSedieMultiplay/New Layout/main_container/main/MiniSeDie/Background/betChoices/New Layout/even",
  btnOdd: "Canvas/mini-panel/MiniPanel/MiniGames/MiniSedieMultiplay/New Layout/main_container/main/MiniSeDie/Background/betChoices/New Layout/odd",
  chip1: "Canvas/mini-panel/MiniPanel/MiniGames/MiniSedieMultiplay/New Layout/main_container/betchip/BetChips/scroll/mask/Chips/1",
  chip10: "Canvas/mini-panel/MiniPanel/MiniGames/MiniSedieMultiplay/New Layout/main_container/betchip/BetChips/scroll/mask/Chips/10",
  uiLocatorsToVerify: {btnStatistic:"Canvas/mini-panel/MiniPanel/MiniGames/MiniSedieMultiplay/New Layout/main_container/main/MiniSeDie/Background/bR/button-statistic",
    btcClose:"Canvas/mini-panel/MiniPanel/MiniGames/MiniSedieMultiplay/New Layout/main_container/CloseButton",
    btnCloseGuide: "Canvas/mini-panel/MiniPanel/MiniGames/MiniSedieMultiplay/New Layout/sub_container/sub-games-area/groupStatic/promotion-guide/Promotion_guidelines/close-button"
  },
  lblRoundId:"Canvas/mini-panel/MiniPanel/MiniGames/MiniSedieMultiplay/New Layout/main_container/main/MiniSeDie/Background/phienLabel",
  btnguide: "Canvas/mini-panel/MiniPanel/MiniGames/MiniSedieMultiplay/New Layout/main_container/main/MiniSeDie/Background/bR/button-help",
  btnHistory: "Canvas/mini-panel/MiniPanel/MiniGames/MiniSedieMultiplay/New Layout/main_container/main/MiniSeDie/Background/bR/button-history",
  
  txtHistoryRoundId: `Canvas/mini-panel/MiniPanel/Dialog/MegaMiniSedieHistory/history-frame/BetDetail/auto scale/back-wrapper/wrapper/Content/MiniSedieHistoryItem/phien`,
  txtHistoryTotalBet: `Canvas/mini-panel/MiniPanel/Dialog/MegaMiniSedieHistory/history-frame/BetDetail/auto scale/back-wrapper/wrapper/Content/MiniSedieHistoryItem/chan`,
  txtHistoryWin: `Canvas/mini-panel/MiniPanel/Dialog/MegaMiniSedieHistory/history-frame/BetDetail/auto scale/back-wrapper/wrapper/Content/MiniSedieHistoryItem/win`,
  btnCloseHistory: "Canvas/mini-panel/MiniPanel/Dialog/MegaMiniSedieHistory/history-frame/BetDetail/auto scale/back-wrapper/CloseButton",
  lblHedgeWarning: "Chỉ có thể đặt cược trên Chẵn hoặc Lẻ.",
  lblMiniWarning: "Canvas/mini-panel/MiniPanel/MiniGames/MiniSedieMultiplay/New Layout/main_container/StaticGroupContainerNotice-0/Notice/mini_warining/text",
  btnCloseGuide: "Canvas/mini-panel/MiniPanel/MiniGames/MiniSedieMultiplay/New Layout/sub_container/sub-games-area/groupStatic/promotion-guide/Promotion_guidelines/close-button",
  btnEven2: "Canvas/mini-panel/MiniPanel/MiniGames/MiniSedieMultiplay/New Layout/sub_container/sub-games-area/groupStatic/StaticGroupContainer-11/New Node/BetChoices/even",
  btnOdd2: "Canvas/mini-panel/MiniPanel/MiniGames/MiniSedieMultiplay/New Layout/sub_container/sub-games-area/groupStatic/StaticGroupContainer-11/New Node/BetChoices/odd",
  lblRoundId2: "Canvas/mini-panel/MiniPanel/MiniGames/MiniSedieMultiplay/New Layout/sub_container/sub-games-area/groupStatic/StaticGroupContainer-11/New Node/Phien",
};
