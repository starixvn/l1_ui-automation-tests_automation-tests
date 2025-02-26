import { Components } from "sc-automation-core";

export const GameLocators = [
  new Components.ImageLocator("bigChoice", 180, 380, 0, 0),
  new Components.ImageLocator("smallChoice", 770, 380, 0, 0),
  new Components.ImageLocator("roundId", 155, 200, 80, 18),
  new Components.ImageLocator("switchMainView", 1244, 291, 0, 0),
  new Components.ImageLocator("outside", 5, 5, 5, 5),
]

export const KenoLocators = {
  inGameUI: [
    "//div[contains(@class,'game-header_title')][text()='Keno Mini']",
  ],
  betchoices: {
    big: "//div[contains(@class,'game-base_bet-options-kenomini_')]//div[contains(@class,'bet-options_big')]",
    small: "//div[contains(@class,'game-base_bet-options-kenomini_')]//div[contains(@class,'bet-options_small')]",
  },
  hedgeBetError: {
    "#__next": "Chỉ có thể đặt cược trên Tài hoặc Xỉu.",
  },
  disconectError :
      `//div[contains(@class,'error-message-container')]//div//strong[(text() = "Keno Mini")]`,
    
  reconnectButton:
      `//div[contains(@class,'error-message-container')]//div//strong[(text() = "Keno Mini")]/parent::div//following-sibling::div//button`,
};
