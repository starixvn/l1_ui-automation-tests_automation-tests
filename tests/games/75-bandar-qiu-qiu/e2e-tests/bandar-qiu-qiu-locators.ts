import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extBandarQiuQiuLocators = [
    new ImageLocator("bankerChoice", 226, 368, 170, 40),

];

export const bandarQiuQiuLocators = Components.BaseLocator.TableLocators.concat(extBandarQiuQiuLocators,Components.BaseLocator.GameLobbyLocator)
