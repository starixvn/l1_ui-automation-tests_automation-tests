import { Components } from "sc-automation-core";

export const AladdinLocators =  Components.BaseLocator.CascadingSlotLocatorsV3


AladdinLocators.forEach((item, i)=> 
    { 
        if (item.name == "btnSymbol"){
        item.x = 387;
        item.y= 514; 
    } });