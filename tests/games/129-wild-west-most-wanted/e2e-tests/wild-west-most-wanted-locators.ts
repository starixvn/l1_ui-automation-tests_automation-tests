import { Components } from "sc-automation-core";


export const WildWestMostWantedLocators = Components.BaseLocator.CascadingSlotLocatorsV3;
WildWestMostWantedLocators.forEach((item, i) =>
{
    if (item.name == 'imgGameName'){
        item.x = 31  ;
        item.y = 614;
        item.width = 276;
        item.height = 96;
    }
    if (item.name == 'lblRoundIdFirstRoundTrialMode' || item.name == 'lblRoundID'){
       item.x = 992  ;
        item.y = 114;
        item.width = 205;
        item.height = 46;
    }
    if (item.name == 'lblTumbleWinList' || item.name == 'lblTumbleWinListTrialMode'){
        item.x = 1092  ;
        item.y = 174;
        item.width = 117;
        item.height = 73;
    }
    if (item.name == 'imgBottomArea' || item.name == 'imgBottomAreaTrialMode'){
        item.x = 355  ;
        item.y = 612;
        item.width = 539;
        item.height = 97;
    }
    if (item.name == 'btnTrialMode'){
        item.x = 167  ;
        item.y = 62;
        item.width = 130;
        item.height = 36;
    }

});