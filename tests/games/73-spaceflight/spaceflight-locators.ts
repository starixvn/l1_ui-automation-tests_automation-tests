import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const SpaceFlightLocatorsImage = [
    new ImageLocator("placeBetChoice", 770, 565, 150, 43),
    new ImageLocator("btnCashOut",  793, 555, 144, 46),
    new ImageLocator("hamburgerMenu", 40, 120, 20,20),
    new ImageLocator("historyMenu", 40, 308, 20,20),
    new ImageLocator("historyPopup", 554, 68, 150, 40),
    new ImageLocator("imgControlAreal1", 275, 543, 478, 135),
    new ImageLocator("imgControlAreal2", 275, 543, 478, 135),
    new ImageLocator("btnPlaceBetBetAccepted", 786, 567, 179, 88),
    new ImageLocator("btnPlaceBet", 786, 567, 179, 88),
    new ImageLocator("guideMenu", 35, 371, 20, 22),
    new ImageLocator("outside", 5, 5, 5, 5),
    new ImageLocator("guide-1", 150, 72, 976, 580),
    new ImageLocator("guide-2", 150, 72, 976, 580),
    new ImageLocator("guide-3", 150, 72, 976, 580),
    new ImageLocator("guide-4", 150, 72, 976, 580),
    new ImageLocator("guide-5", 150, 72, 976, 580),
    new ImageLocator("guide-6", 150, 72, 976, 580),
    new ImageLocator("guide-7", 150, 72, 976, 580),
    new ImageLocator("guide-8", 150, 72, 976, 580),
    new ImageLocator("roundId", 150, 72, 976, 580),
];

export const SpaceFlightLocators = {
    ...Components.CrashGame_Locators,
    btnBetChip1: {x: 542, y: 260},
    btnBetChip10: {x: 542, y: 260},
    uiLocatorsToVerify: {
        lblRoundId: "Canvas/center/auto-scale-widget/RoundID",
        playerProfile: "Canvas/center/auto-scale-widget/bottom-area/main-player/main-player-profile",
    }}
