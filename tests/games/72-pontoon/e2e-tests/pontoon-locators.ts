import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extPontoonLocators = [
    new ImageLocator("stake20", 481, 597, 40, 40),
];

export const PontoonLocatorsLocators = Components.BaseLocator.CardLocators.concat(Components.BaseLocator.GameLobbyLocator,extPontoonLocators)
