import { Components } from "sc-automation-core";

export const SpecialSedieLocators = [
    new Components.ImageLocator("evenChoice", 442, 280, 85, 30),
    new Components.ImageLocator("evenOwnbet", 497, 372, 55, 20),
    new Components.ImageLocator("oddChoice", 764, 280, 85, 30),
    new Components.ImageLocator("playerBalance", 192, 644, 125, 23),
    new Components.ImageLocator("historyMenu", 317, 316, 46, 46),
    new Components.ImageLocator("historyPopup", 471, 65, 350, 30),
    new Components.ImageLocator("errorMessage", 554, 395, 170, 18),
    new Components.ImageLocator("evenChoiceBetBoard", 391, 396, 123, 27),
    new Components.ImageLocator("oddChoiceBetBoard", 740, 393, 123, 27),
    new Components.ImageLocator("stake1", 436, 489, 97, 36),
    new Components.ImageLocator("stake10", 436, 489, 97, 36),
    new Components.ImageLocator("submitBetBoard", 730, 595, 119, 31),
    new Components.ImageLocator("outside", 5, 5, 5, 5),
    new Components.ImageLocator("msgMaxbetLimit", 492, 393, 350, 25),
    new Components.ImageLocator("stake1000", 770, 542, 60, 20),
    new Components.ImageLocator("guideMenu", 917, 321, 29, 24),
    new Components.ImageLocator("guide-1", 150, 72, 976, 580),
    new Components.ImageLocator("guide-2", 150, 72, 976, 580),
    new Components.ImageLocator("guide-3", 150, 72, 976, 580),
    new Components.ImageLocator("guide-4", 150, 72, 976, 580),
    new Components.ImageLocator("guide-5", 150, 72, 976, 580),
    new Components.ImageLocator("guide-6", 150, 72, 976, 580),
    new Components.ImageLocator("guide-7", 150, 72, 976, 580),
    new Components.ImageLocator("guide-8", 150, 72, 976, 580),
    new Components.ImageLocator("roundId", 614, 225, 80, 16),

];

export const MobiLocators = {
    inGameUI: [
      "//div[contains(@class,'game-header_title')][text()='Xóc Đĩa Cân Cửa']",
    ],
    betchoices: {
      even: "//div[contains(@class,'game-container_game-container')][6]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,'bet-options_even')]",
      odd: "//div[contains(@class,'game-container_game-container')][6]//div[contains(@class,'bet-container_bet-container')]//div[contains(@class,'bet-options_odd')]",
    },
    hedgeBetError: {
      "#__next": "Chỉ được cược 1 bên.",
    },
  };
  