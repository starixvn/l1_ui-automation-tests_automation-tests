export const KenoLocators = {
  inGameUI: [
    "//div[contains(@class,'game-header_title')][text()='Keno Soccer 2']",
  ],
  betchoices: {
    over: "(//div[contains(@class,'bet-options')][contains(text(),'Tài')])[9]",
  },
  hedgeBetError: {
    "#__next": "Chỉ có thể đặt cược trên Tài hoặc Xỉu.",
  },
  disconectError :
    `//div[contains(@class,'error-message-container')]//div//strong[(text() = "Keno Soccer 2")]`,
  
  reconnectButton:
    `//div[contains(@class,'error-message-container')]//div//strong[(text() = "Keno Soccer 2")]/parent::div//following-sibling::div//button`,
};
