import { Components } from "sc-automation-core";

export const TurboBigSmallLocators = {
  ...Components.RoundGame_Locators,
  btnBetBig: "Canvas/mini-panel/MiniPanel/MiniGames/TurboBigSmall/Background/button-bet-big",
  btnBetSmall: "Canvas/mini-panel/MiniPanel/MiniGames/TurboBigSmall/Background/button-bet-small",
  chip1: "Canvas/mini-panel/MiniPanel/MiniGames/TurboBigSmall/Background/BetBoardContainer/BetBoard/background/BetChips/1",
  chip10: "Canvas/mini-panel/MiniPanel/MiniGames/TurboBigSmall/Background/BetBoardContainer/BetBoard/background/BetChips/10",
  uiLocatorsToVerify: {lblOdds:"Odds",lblRoundId:"Phien",tableStatistics:"statistics",lblMd5:"md5",lblMiniRoundHistory:"miniRoundHistoryContainer"},
  lblHedgeWarning: "Chỉ được cược 1 bên.",
  txtHistoryTitle: `Canvas/mini-panel/MiniPanel/Dialog/BigSmallHistory/history-frame/BetDetail/auto scale/back-wrapper/wrapper/Content/GameNameHistoryItem/node/Time`,
  txtHistoryRoundId: `Canvas/mini-panel/MiniPanel/Dialog/BigSmallHistory/history-frame/BetDetail/auto scale/back-wrapper/wrapper/Content/BigSmallHistoryItem/node/New Node/round`,
  txtHistoryTotalBet: `Canvas/mini-panel/MiniPanel/Dialog/BigSmallHistory/history-frame/BetDetail/auto scale/back-wrapper/wrapper/Content/BigSmallHistoryItem/node/Cuoc`,
  txtHistoryWin: `Canvas/mini-panel/MiniPanel/Dialog/BigSmallHistory/history-frame/BetDetail/auto scale/back-wrapper/wrapper/Content/GameNameHistoryItem/node/Win`,
  txtHistoryDetailInfo: `Canvas/mini-panel/MiniPanel/Dialog/BigSmallBetHistory/betdetail-frame/BetDetail/auto_scale/back_wrapper/wrapper/BetInfo`,
  btnCloseHistoryDetail: `Canvas/mini-panel/MiniPanel/Dialog/BigSmallBetHistory/betdetail-frame/BetDetail/auto_scale/back_wrapper/CloseButton`,
  btnCloseHistory: `Canvas/mini-panel/MiniPanel/Dialog/BigSmallHistory/history-frame/BetDetail/auto scale/back-wrapper/CloseButton`,
};

export const MobiLocators = {
  inGameUI: [
    "//div[contains(@class,'game-header_title')][text()='Tài Xỉu Siêu Tốc']",
  ],
  betchoices: {
    big: "//div[contains(@class,'game-container_game-container')][5]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,'bet-options_big')]",
    small:
      "//div[contains(@class,'game-container_game-container')][5]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,'bet-options_small')]",
  },
  hedgeBetError: {
    "#__next": "Chỉ được cược 1 bên."
  }
};
