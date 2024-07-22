export const KenoLocators = {
  inGameUI: [
    "//div[contains(@class,'game-header_title')][text()='Keno Mini']",
  ],
  betchoices: {
    big: "(//div[contains(@class,'bet-options_big')][contains(text(),'Tài')])[3]",
    small: "(//div[contains(@class,'bet-options_small')][contains(text(),'Xỉu')])[3]",
  },
  hedgeBetError: {
    "#__next": "Chỉ có thể đặt cược trên Tài hoặc Xỉu.",
  },
};
