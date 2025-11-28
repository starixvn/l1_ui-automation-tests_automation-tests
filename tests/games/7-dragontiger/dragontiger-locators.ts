import { Components } from "sc-automation-core";


export const DragonTigerLocators = {
  ...Components.RoundGame_Locators,
  btnDragon: "Canvas/mini-panel/MiniPanel/MiniGames/DragonTiger/Background/LinhVat/dragon",
  btnTiger: "Canvas/mini-panel/MiniPanel/MiniGames/DragonTiger/Background/LinhVat/tiger",
  btnTie: "Canvas/mini-panel/MiniPanel/MiniGames/DragonTiger/Background/LinhVat/tie",
  chip1: "Canvas/mini-panel/MiniPanel/MiniGames/DragonTiger/Background/BetChipsContainer/BetChips/scroll/mask/Chips/1",
  chip10: "Canvas/mini-panel/MiniPanel/MiniGames/DragonTiger/Background/BetChipsContainer/BetChips/scroll/mask/Chips/10",
  uiLocatorsToVerify: {btnCloseGame:"Canvas/mini-panel/MiniPanel/MiniGames/DragonTiger/Background/buttons/CloseButton",
    tableStatistics:"button-statistic",
  },
  lblRoundId:"Canvas/mini-panel/MiniPanel/MiniGames/DragonTiger/Background/gameround",
  btnguide: "button-help",
  btnHistory: "button-history",
  txtHistoryRoundId: `Canvas/mini-panel/MiniPanel/Dialog/RongHoHistory/backCloseButton/BetDetail/auto scale/back-wrapper/wrapper/content/RongHoHistoryItem/round`,
  txtHistoryTotalBet: `Canvas/mini-panel/MiniPanel/Dialog/RongHoHistory/backCloseButton/BetDetail/auto scale/back-wrapper/wrapper/content/RongHoHistoryItem/dragon`,
  txtHistoryWin: `Canvas/mini-panel/MiniPanel/Dialog/RongHoHistory/backCloseButton/BetDetail/auto scale/back-wrapper/wrapper/content/RongHoHistoryItem/win`,
  btnCloseHistory: "Canvas/mini-panel/MiniPanel/Dialog/RongHoHistory/backCloseButton/BetDetail/backClose",
  lblHedgeWarning: "Chỉ có thể đặt cược trên Rồng hoặc Hổ.",
  lblMiniWarning: "Canvas/mini-panel/MiniPanel/MiniGames/DragonTiger/Background/Notice/mini_warning/text",
};

export const DragonTigerLocatorsImages = [
    new Components.ImageLocator("dragonChoice", 420, 280, 100, 85),
    new Components.ImageLocator("dragonOwnbet", 450, 370, 30, 30),
    new Components.ImageLocator("tigerChoice", 776, 280, 100, 85),
    new Components.ImageLocator("tigerOwnbet", 790, 370, 30, 30),
    new Components.ImageLocator("tieChoice", 610, 385, 70, 30),
    new Components.ImageLocator("playerBalance", 192, 644, 125, 23),
    new Components.ImageLocator("hamburgerMenu", 0, 0, 0, 0), //no hamberger icon
    new Components.ImageLocator("historyMenu", 345, 321, 0, 0),
    new Components.ImageLocator("historyPopup", 566, 75, 150, 50),
    new Components.ImageLocator("stake1", 467, 497, 0, 0),
    new Components.ImageLocator("stake10", 467, 497, 0, 0),
    new Components.ImageLocator("errorMessage", 500, 423, 300, 18),
    new Components.ImageLocator("msgMaxbetLimit", 512, 422, 350, 25),
    new Components.ImageLocator("btnRightArrow", 864, 480, 35, 35),
    new Components.ImageLocator("guideMenu", 925, 308, 30, 27),
    new Components.ImageLocator("outside", 5, 5, 5, 5),
    new Components.ImageLocator("guide-1", 150, 72, 976, 580),
    new Components.ImageLocator("guide-2", 150, 72, 976, 580),
    new Components.ImageLocator("guide-3", 150, 72, 976, 580),
    new Components.ImageLocator("guide-4", 150, 72, 976, 580),
    new Components.ImageLocator("guide-5", 150, 72, 976, 580),
    new Components.ImageLocator("guide-6", 150, 72, 976, 580),
    new Components.ImageLocator("guide-7", 150, 72, 976, 580),
    new Components.ImageLocator("guide-8", 150, 72, 976, 580),
    new Components.ImageLocator("roundId", 615, 207, 70, 20),

];


export const L1IsLocators = {
  dragon: {x: 160,y: 170},
  gameIcon: "//div[contains(@style,'SBC_DragonTiger')]"
}

export const L2IsLocators = {
  dragon: {x: 160,y: 170},
  gameIcon: "//div[contains(@style,'3808_Vgaming_Dragontiger_')]"
}

export const MobiLocators = {
    inGameUI: [
      "//div[contains(@class,'game-header_title')][text()='Rồng Hổ']",
    ],
    betchoices: {
      dragon: "(//img[@alt='dragon'])[1]",
      tiger: "(//img[contains(@alt,'dragon')])[2]",
    },
    hedgeBetError: {
      "#__next": "Chỉ có thể đặt cược trên Rồng hoặc Hổ.",
    },
  };