import { Components } from "sc-automation-core";


export const DragonTigerLocators = [
    new Components.ImageLocator("dragonChoice", 420, 280, 100, 85),
    new Components.ImageLocator("dragonOwnbet", 450, 370, 30, 30),
    new Components.ImageLocator("tigerChoice", 776, 280, 100, 85),
    new Components.ImageLocator("tigerOwnbet", 790, 370, 30, 30),
    new Components.ImageLocator("tieChoice", 610, 385, 70, 30),
    new Components.ImageLocator("playerBalance", 192, 644, 125, 23),
    new Components.ImageLocator("hamburgerMenu", 0, 0, 0, 0), //no hamberger icon
    new Components.ImageLocator("historyMenu", 345, 321, 0, 0),
    new Components.ImageLocator("historyPopup", 566, 75, 150, 50),
    new Components.ImageLocator("stake1", 467, 497, 0, 0),
    new Components.ImageLocator("stake10", 467, 497, 0, 0),
    new Components.ImageLocator("errorMessage", 500, 423, 300, 18),
    new Components.ImageLocator("msgMaxbetLimit", 512, 422, 350, 25),
    new Components.ImageLocator("btnRightArrow", 864, 480, 35, 35),
    new Components.ImageLocator("guideMenu", 925, 308, 30, 27),
    new Components.ImageLocator("outside", 5, 5, 5, 5),
];

export const IsLocators = [
  new Components.ImageLocator("dragonChoice", 1030, 460, 0, 0),
];

export const MobiLocators = {
    inGameUI: [
      "//div[contains(@class,'game-header_title')][text()='Rồng Hổ']",
    ],
    betchoices: {
      dragon: "(//img[@alt='dragon'])[1]",
      tiger: "(//img[contains(@alt,'dragon')])[2]",
    },
    hedgeBetError: {
      "#__next": "Chỉ có thể đặt cược trên Rồng hoặc Hổ.",
    },
  };