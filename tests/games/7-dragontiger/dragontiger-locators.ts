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
    new Components.ImageLocator("guide-1", 150, 72, 976, 580),
    new Components.ImageLocator("guide-2", 150, 72, 976, 580),
    new Components.ImageLocator("guide-3", 150, 72, 976, 580),
    new Components.ImageLocator("guide-4", 150, 72, 976, 580),
    new Components.ImageLocator("guide-5", 150, 72, 976, 580),
    new Components.ImageLocator("guide-6", 150, 72, 976, 580),
    new Components.ImageLocator("guide-7", 150, 72, 976, 580),
    new Components.ImageLocator("guide-8", 150, 72, 976, 580),
    new Components.ImageLocator("roundId", 615, 207, 70, 20),

];


export const L1IsLocators = {
  dragon: {x: 365,y: 311},
  gameIcon: "//div[contains(@style,'SBC_DragonTiger')]"
}

export const L2IsLocators = {
  dragon: {x: 365,y: 311},
  gameIcon: "//div[contains(@style,'3808_Vgaming_Dragontiger_')]"
}

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