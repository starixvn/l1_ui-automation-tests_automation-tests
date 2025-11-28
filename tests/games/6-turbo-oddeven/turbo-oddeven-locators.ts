import { Components } from "sc-automation-core";

export const TurboOddEvenLocators = {
    ...Components.RoundGame_Locators,
    btnBetOdd: "Canvas/mini-panel/MiniPanel/MiniGames/TurboOddEven/Background/button-bet-odd",
    btnBetEven: "Canvas/mini-panel/MiniPanel/MiniGames/TurboOddEven/Background/button-bet-even",
    chip1: "Canvas/mini-panel/MiniPanel/MiniGames/TurboOddEven/Background/BetBoardContainer/BetBoard/background/BetChips/1",
    chip10: "Canvas/mini-panel/MiniPanel/MiniGames/TurboOddEven/Background/BetBoardContainer/BetBoard/background/BetChips/10",
    uiLocatorsToVerify: {lblOdds:"Odds",lblRoundId:"Phien",tableStatistics:"statistics",lblMd5:"md5",lblMiniRoundHistory:"miniRoundHistoryContainer"},
    lblHedgeWarning: "Chỉ được cược 1 bên.",
    txtHistoryTitle: `Canvas/mini-panel/MiniPanel/Dialog/BigSmallHistory/history-frame/BetDetail/auto scale/back-wrapper/wrapper/Content/GameNameHistoryItem/node/Time`,
    txtHistoryRoundId: `Canvas/mini-panel/MiniPanel/Dialog/BigSmallHistory/history-frame/BetDetail/auto scale/back-wrapper/wrapper/Content/BigSmallHistoryItem/node/New Node/round`,
    txtHistoryTotalBet: `Canvas/mini-panel/MiniPanel/Dialog/BigSmallHistory/history-frame/BetDetail/auto scale/back-wrapper/wrapper/Content/BigSmallHistoryItem/node/Cuoc`,
    txtHistoryWin: `Canvas/mini-panel/MiniPanel/Dialog/BigSmallHistory/history-frame/BetDetail/auto scale/back-wrapper/wrapper/Content/GameNameHistoryItem/node/Win`,
    txtHistoryDetailInfo: `Canvas/mini-panel/MiniPanel/Dialog/TurboOddEvenBetHistory/detail-frame/BetDetail/auto_scale/back_wrapper/wrapper/BetInfo`,
    btnCloseHistoryDetail: `Canvas/mini-panel/MiniPanel/Dialog/TurboOddEvenBetHistory/detail-frame/BetDetail/auto_scale/back_wrapper/CloseButton`,
    btnCloseHistory: `Canvas/mini-panel/MiniPanel/Dialog/BigSmallHistory/history-frame/BetDetail/auto scale/back-wrapper/CloseButton`,
  };


