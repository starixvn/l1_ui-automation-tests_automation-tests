import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const HiLoLocators = [
    new ImageLocator("hiChoice", 750, 240, 110, 75),
    new ImageLocator("loChoice", 750, 337, 110, 75),
    new ImageLocator("historyMenu", 369, 193, 30, 30),
    new ImageLocator("historyPopup", 560, 75, 180, 30),
    new ImageLocator("stake1", 448, 465, 50, 30),
    new ImageLocator("stake10", 448, 465, 50, 30),
    new ImageLocator("startbet", 440, 311, 100, 30),
    new ImageLocator("collect", 600, 350, 110, 30),

];
