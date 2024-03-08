import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extChineseBlackjackLocators = [
    new ImageLocator("stake20", 481, 597, 40, 40),
    new ImageLocator("btnConfirmStand", 507, 397, 98, 50),
    new ImageLocator("lblHistoryFirstRow", 105, 187, 1000, 40),
];

export const ChineseBlackjackLocatorsLocators = Components.BaseLocator.CardLocators.concat(Components.BaseLocator.GameLobbyLocator,extChineseBlackjackLocators)
