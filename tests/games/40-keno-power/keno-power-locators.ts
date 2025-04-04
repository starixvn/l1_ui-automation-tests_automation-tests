export const KenoLocators = {
  inGameUI: [
    "//div[contains(@class,'game-header_title')][text()='Keno Đối Kháng']",
  ],
  betchoices: {
    blue: "(//div[contains(@class,'bet-options')][contains(text(),'Đội Xanh')])[1]",
    red: "(//div[contains(@class,'bet-options')][contains(text(),'Đội Đỏ')])[1]",
  },
  hedgeBetError: {
    "(//div[contains(@class,'notice_warning')])": "Chỉ có thể đặt cược trên Đội Xanh hoặc Đội Đỏ.",
  },
  disconectError :
    `//div[contains(@class,'error-message-container')]//div//strong[(text() = "Keno Power")]`,
  
  reconnectButton:
    `//div[contains(@class,'error-message-container')]//div//strong[(text() = "Keno Power")]/parent::div//following-sibling::div//button`,
};
