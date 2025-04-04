export const KenoLocators = {
  inGameUI: [
    "//div[contains(@class,'game-header_title')][text()='Keno Đối Kháng 2']",
  ],
  betchoices: {
    blue: "(//div[contains(@class,'bet-options')][contains(text(),'Đội Xanh')])[3]",
    red: "(//div[contains(@class,'bet-options')][contains(text(),'Đội Đỏ')])[3]",
  },
  hedgeBetError: {
    "(//div[contains(@class,'notice_warning')])": "Chỉ có thể đặt cược trên Đội Xanh hoặc Đội Đỏ.",
  },
  disconectError :
    `//div[contains(@class,'error-message-container')]//div//strong[(text() = "Keno Đối Kháng 2")]`,
  
  reconnectButton:
    `//div[contains(@class,'error-message-container')]//div//strong[(text() = "Keno Đối Kháng 2")]/parent::div//following-sibling::div//button`,
};
