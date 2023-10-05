import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extPontoonLocators = [
    new ImageLocator("lstMenuItems", 62, 231, 48, 308),
];

export const PontoonLocatorsLocators = Components.BaseLocator.CardLocators.concat(Components.BaseLocator.GameLobbyLocator)
