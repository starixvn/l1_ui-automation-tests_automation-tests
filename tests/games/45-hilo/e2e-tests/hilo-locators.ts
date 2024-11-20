import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extHiloLocators = [
    new ImageLocator("hiChoice", 750, 240, 110, 75),
    new ImageLocator("loChoice", 750, 337, 110, 75),
    new ImageLocator("historyMenu", 369, 193, 30, 30),
    new ImageLocator("historyPopup", 560, 75, 180, 30),
    new ImageLocator("stake1", 448, 465, 50, 30),
    new ImageLocator("stake10", 448, 465, 50, 30),
    new ImageLocator("startbet", 440, 311, 100, 30),
    new ImageLocator("collect", 600, 350, 110, 30),
    new ImageLocator("guideMenu", 931, 288, 25, 27),
    new ImageLocator("outside", 5, 5, 5, 5),
    new ImageLocator("guide-1", 150, 72, 976, 580),
    new ImageLocator("guide-2", 150, 72, 976, 580),
    new ImageLocator("guide-3", 150, 72, 976, 580),
    new ImageLocator("guide-4", 150, 72, 976, 580),
    new ImageLocator("guide-5", 150, 72, 976, 580),
    new ImageLocator("guide-6", 150, 72, 976, 580),
    new ImageLocator("guide-7", 150, 72, 976, 580),
    new ImageLocator("guide-8", 150, 72, 976, 580),
    new ImageLocator("imgGameUI", 578, 231, 278, 190),
    new ImageLocator("imgStart", 428, 240, 125, 172),
    new ImageLocator("icoHistory", 370, 190, 32, 32),
    new ImageLocator("icoCloseGame", 881, 190, 30, 30),
    new ImageLocator("icoGameGuide", 927, 290, 30, 30),
    new ImageLocator("imgDefaultChipBarl1", 435, 458, 413, 42),
    new ImageLocator("imgDefaultChipBarl2", 435, 458, 413, 42),
    new ImageLocator("btnCollectDisable", 598, 343, 112, 40),
];

export const HiloLocatorsLocators = Components.BaseLocator.GameLobbyLocator.concat(extHiloLocators)
