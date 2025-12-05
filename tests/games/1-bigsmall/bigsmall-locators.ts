import { Components } from "sc-automation-core";

export const BigSmallLocators = {
  ...Components.RoundGame_Locators,
  btnBetBig: "Canvas/mini-panel/MiniPanel/MiniGames/BigSmall/Background/button-bet-big",
  btnBetSmall: "Canvas/mini-panel/MiniPanel/MiniGames/BigSmall/Background/button-bet-small",
  chip1: "Canvas/mini-panel/MiniPanel/MiniGames/BigSmall/Background/BetBoardContainer/BetBoard/background/BetChips/1",
  chip10: "Canvas/mini-panel/MiniPanel/MiniGames/BigSmall/Background/BetBoardContainer/BetBoard/background/BetChips/10",
  uiLocatorsToVerify: {lblOdds:"Odds",lblRoundId:"Phien",tableStatistics:"statistics",lblMd5:"md5",lblMiniRoundHistory:"miniRoundHistoryContainer"},
  lblHedgeWarning: "Chỉ được cược 1 bên.",
  txtHistoryRoundId: `/BigSmallHistoryItem/node/New Node/round`,
  txtHistoryTotalBet: `/BigSmallHistoryItem/node/Cuoc`,
  txtHistoryWin: `/BigSmallHistoryItem/node/Win`,
  btnCloseHistory: "/auto scale/back-wrapper/CloseButton",
};


export const MobiLocators = {
  inGameUI: ["//div[contains(@class,'game-header_title')][text()='Tài Xỉu']"],
  betchoices: {
    big: "//div[contains(@class,'game-container_game-container')][4]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,'bet-options_big')]",
    small:
      "//div[contains(@class,'game-container_game-container')][4]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,'bet-options_small')]",
  },
  hedgeBetError: {
    "#__next": "Chỉ được cược 1 bên.",
  },
};

export const L1IsLocators = {
  big: { x: 150, y: 160 },
  gameIcon: "//div[contains(@style,'SBC_BigSmall')]",
};
