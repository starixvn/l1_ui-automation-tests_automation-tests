export const KenoLocators = {
  inGameUI: [
    "//div[contains(@class,'game-header_title')][text()='Keno Bắc']",
  ],
  betchoices: {
    big: "(//div[contains(@class,'bet-options_big')][contains(text(),'Tài')])[8]",
    small: "(//div[contains(@class,'bet-options_small')][contains(text(),'Xỉu')])[8]",
  },
  hedgeBetError: {
    "#__next": "Chỉ có thể đặt cược trên Tài hoặc Xỉu.",
  },
};
