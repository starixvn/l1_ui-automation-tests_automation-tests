export const KenoLocators = {
  inGameUI: [
    "//div[contains(@class,'game-header_title')][text()='Keno Soccer']",
  ],
  betchoices: {
    over: "(//div[contains(@class,'bet-options')][contains(text(),'Tài')])[7]",
  },
  hedgeBetError: {
    "#__next": "Chỉ có thể đặt cược trên Tài hoặc Xỉu.",
  },
  disconectError :
    `//div[contains(@class,'error-message-container')]//div//strong[(text() = "Keno Soccer")]`,
  
  reconnectButton:
    `//div[contains(@class,'error-message-container')]//div//strong[(text() = "Keno Soccer")]/parent::div//following-sibling::div//button`,
};
