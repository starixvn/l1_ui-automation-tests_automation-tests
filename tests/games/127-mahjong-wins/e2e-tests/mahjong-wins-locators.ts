import { Components } from "sc-automation-core";


export const MahjongWinsLocators = Components.BaseLocator.CascadingSlotLocatorsV3;
MahjongWinsLocators.forEach((item, i) =>
{
    if (item.name == 'imgGameName'){
        item.x = 65  ;
        item.y = 575;
        item.width = 285;
        item.height = 128;
    }
    if (item.name == 'lblRoundID' || item.name == 'lblRoundIdFirstRoundTrialMode'){
        item.x = 1030  ;
        item.y = 123;
        item.width = 186;
        item.height = 40;
    }
    if (item.name == 'lblTumbleWinList' || item.name == 'lblTumbleWinListTrialMode'){
        item.x = 1015  ;
        item.y = 186;
        item.width = 224;
        item.height = 299;
    }
    if (item.name == 'imgBottomArea'){
        item.x = 356  ;
        item.y = 606;
        item.width = 537;
        item.height = 109;
    }
    if (item.name == 'btnTrialMode'){
        item.x = 1063  ;
        item.y = 507;
        item.width = 129;
        item.height = 44;
    }

});