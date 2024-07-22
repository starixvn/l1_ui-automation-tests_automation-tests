import { Components } from "sc-automation-core";

export const FPCLocators = [
    new Components.ImageLocator("fishChoice", 595, 399, 55, 60),
    new Components.ImageLocator("fishOwnbet", 590, 399, 60, 60),
    new Components.ImageLocator("crabChoice", 686, 399, 60, 60),
    new Components.ImageLocator("crabOwnbet", 686, 399, 60, 60),
    new Components.ImageLocator("prawnChoice", 812, 422, 292, 53),
    new Components.ImageLocator("roosterChoice", 810, 306, 97, 28),
    new Components.ImageLocator("stagChoice", 613, 309, 97, 28),
    new Components.ImageLocator("playerBalance", 192, 644, 125, 23),
    new Components.ImageLocator("hamburgerMenu", 0, 0, 0, 0), //no hamberger icon
    new Components.ImageLocator("historyMenu", 346, 360, 0, 0),
    new Components.ImageLocator("historyPopup", 455, 50, 300, 70),
    new Components.ImageLocator("stake1", 467, 525, 0, 0),
    new Components.ImageLocator("stake10", 467, 525, 0, 0),
    new Components.ImageLocator("msgMaxbetLimit", 512, 457, 350, 30),
    new Components.ImageLocator("btnRightArrow", 864, 509, 35, 35),
];

export const MobiLocators = {
    inGameUI: [
      "//div[contains(@class,'game-header_title')][text()='Bầu Cua']",
    ],
    betchoices: {
      stag: "//div[contains(@class,'bet-options_layout-FPC')]//div[1]//div[1]//div[1]//div[2]//img[1]",
      gourd: "//div[contains(@class,'bet-options_layout-FPC')]//div[2]//div[1]//div[1]//div[2]//img[1]",
    },
  };