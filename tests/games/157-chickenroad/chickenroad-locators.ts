import { Components } from "sc-automation-core";

export const chickenroadLocators = {
  ...Components.TapGame_Locators,
  // btnHistory: "Canvas/full/content/scroll/scroll-content/bet-result-container-portrait/tabheader/toggle-my-bet",
  // lblHistoryDetailRoundId: "Canvas/auto-lazy-load-container/lazy-load-container/bet-history-details-container/bet-detail-dialog/popup/back-wrapper/defail-summary-table/bet-details-summary-table/result-table/round/roundId-value",
  // lblHistoryDetailCrashPoint: "Canvas/auto-lazy-load-container/lazy-load-container/bet-history-details-container/bet-detail-dialog/popup/back-wrapper/defail-summary-table/bet-details-summary-table/result-table/Node/crash-point-value",
  // lblHistoryDetailTotalBet: "Canvas/auto-lazy-load-container/lazy-load-container/bet-history-details-container/bet-detail-dialog/popup/back-wrapper/detail-log-table/bet-detail-log-table/detail-table/content/total/valueBet",
  // lblHistoryDetailTotalWin: "Canvas/auto-lazy-load-container/lazy-load-container/bet-history-details-container/bet-detail-dialog/popup/back-wrapper/detail-log-table/bet-detail-log-table/detail-table/content/total/valueWin",
  // lblHistoryDetailMultiplier: "Canvas/auto-lazy-load-container/lazy-load-container/bet-history-details-container/bet-detail-dialog/popup/back-wrapper/detail-log-table/bet-detail-log-table/detail-table/content/rows/bet-detail-item/lblMultiplier",
  // btnCloseHistoryDetail: "Canvas/auto-lazy-load-container/lazy-load-container/bet-history-details-container/bet-detail-dialog/popup/back-wrapper/btnClosed",  
  uiLocatorsToVerify: {
    btnPlay: "start-bet-button",   
    btnHalfBet: "half-bet",
    btnDoubleBet: "double-bet", 
    btnAutoPlay: "auto-play",
    btnGameMode: "game-mode",
    btnLedBar: "Canvas/full/content/scroll/scroll-content/led-steps-container",
    btnSound: "sfx",
    btnFp: "provably-fair-btn-001",
    lblGameName: "game-name",
    lblRtp: "rtp",
    lblAllBets: "lbl-top",
    btnLobby: "Canvas/full/content/scroll/scroll-content/back-to-lobby/outer-menu/lobby/lobby-out-side",
  },
};


