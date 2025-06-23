import { Components } from "sc-automation-core";


export const HappyFarmLocators = Components.BaseLocator.CascadingSlotLocatorsV3;
HappyFarmLocators.forEach((item, i) =>
{
    if (item.name == 'imgGameName'){
        item.x = 55  ;
        item.y = 583;
        item.width = 275;
        item.height = 114;
    }
    if (item.name == 'lblRoundID' || item.name == 'lblRoundIdFirstRoundTrialMode'){
        item.x = 993  ;
        item.y = 114;
        item.width = 204;
        item.height = 46;
    }
    if (item.name == 'lblTumbleWinList' || item.name == 'lblTumbleWinListTrialMode'){
        item.x = 984  ;
        item.y = 168;
        item.width = 224;
        item.height = 255;
    }
    if (item.name == 'imgBottomArea' || item.name == 'imgBottomAreaTrialMode'){
        item.x = 356  ;
        item.y = 606;
        item.width = 537;
        item.height = 109;
    }
    if (item.name == 'btnTrialMode'){
        item.x = 1014  ;
        item.y = 446;
        item.width = 166;
        item.height = 48;
    }

});