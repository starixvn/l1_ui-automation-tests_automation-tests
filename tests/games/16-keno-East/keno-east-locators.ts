export const KenoLocators = {
  inGameUI: [
    "//div[contains(@class,'game-header_title')][text()='Keno Đông']",
  ],
  betchoices: {
    big: "//div[contains(@class,'game-base_bet-options-kenoeast_')]//div[contains(@class,'bet-options_big')]",
    small: "//div[contains(@class,'game-base_bet-options-kenoeast_')]//div[contains(@class,'bet-options_small')]",
  },
  hedgeBetError: {
    "#__next": "Chỉ có thể đặt cược trên Tài hoặc Xỉu.",
  },
};
