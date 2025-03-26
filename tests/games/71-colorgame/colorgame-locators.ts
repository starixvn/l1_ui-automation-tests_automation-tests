import { Components } from "sc-automation-core";

export const ColorGameLocators = [
  new Components.ImageLocator("dealer", 0, 0, 0, 0),
  new Components.ImageLocator("yellowChoice", 370, 393, 127, 40),
  new Components.ImageLocator("dragonOwnbetl1", 450, 370, 30, 30),
  new Components.ImageLocator("dragonOwnbetl2", 450, 370, 30, 30),
  new Components.ImageLocator("hotChoice", 180, 437, 125, 50),
  new Components.ImageLocator("tigerOwnbetl1", 790, 370, 30, 30),
  new Components.ImageLocator("tigerOwnbetl2", 790, 370, 30, 30),
  new Components.ImageLocator("coldChoice", 964, 437, 125, 50),
  new Components.ImageLocator("tieChoice", 610, 447, 70, 30),
  new Components.ImageLocator("playerBalance", 192, 644, 125, 23),
  new Components.ImageLocator("hamburgerMenu", 40, 160, 25, 25),
  new Components.ImageLocator("historyMenu", 40, 355, 25, 25),
  new Components.ImageLocator("historyPopup", 190, 92, 936, 90),
  new Components.ImageLocator("stake1", 421, 613, 30, 30),
  new Components.ImageLocator("stake10", 421, 613, 30, 30),
  new Components.ImageLocator("errorMessage", 440, 548, 300, 20),
  new Components.ImageLocator("msgMaxbetLimit", 512, 422, 350, 25),
  new Components.ImageLocator("btnRightArrow", 864, 480, 35, 35),
  new Components.ImageLocator("guideMenu", 54, 408, 20, 20),
  new Components.ImageLocator("outside", 5, 5, 5, 5),
  new Components.ImageLocator("guide-1", 150, 72, 976, 580),
  new Components.ImageLocator("guide-2", 150, 72, 976, 580),
  new Components.ImageLocator("guide-3", 150, 72, 976, 580),
  new Components.ImageLocator("guide-4", 150, 72, 976, 580),
  new Components.ImageLocator("guide-5", 150, 72, 976, 580),
  new Components.ImageLocator("guide-6", 150, 72, 976, 580),
  new Components.ImageLocator("guide-7", 150, 72, 976, 580),
  new Components.ImageLocator("guide-8", 150, 72, 976, 580),
  new Components.ImageLocator("roundId", 130, 170, 80, 23),
];


export const L1IsLocators = {
  yellow: {x: 614,y: 311},
  gameIcon: "//div[contains(@style,'Saba_Colorgame')]"
}

export const L2IsLocators = {
  yellow: {x: 614,y: 311},
  gameIcon: "//div[contains(@style,'3870_Vgaming_Colorgame')]"
}