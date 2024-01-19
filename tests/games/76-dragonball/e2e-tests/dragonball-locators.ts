import { Components } from "sc-automation-core";

let dragonballLocators =  Components.BaseLocator.ClassicSlotLocators

const lblHistoryDetailRoundId = {x: 650}
 
dragonballLocators.forEach((item, i)=>{ if (item.name == "lblHistoryDetailRoundId") item.x = lblHistoryDetailRoundId.x } )

export const extdragonballLocators = dragonballLocators
