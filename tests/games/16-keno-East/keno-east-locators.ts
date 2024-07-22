export const KenoLocators = {
  inGameUI: [
    "//div[contains(@class,'game-header_title')][text()='Keno Đông']",
  ],
  betchoices: {
    big: "(//div[contains(@class,'bet-options_big')][contains(text(),'Tài')])[5]",
    small: "(//div[contains(@class,'bet-options_small')][contains(text(),'Xỉu')])[5]",
  },
  hedgeBetError: {
    "#__next": "Chỉ có thể đặt cược trên Tài hoặc Xỉu.",
  },
};
