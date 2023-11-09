import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extFantanLocators = [
    new ImageLocator("stake20", 481, 597, 40, 40),
];

export const FantanLocatorsLocators = Components.BaseLocator.CardLocators.concat(Components.BaseLocator.GameLobbyLocator,extFantanLocators)
