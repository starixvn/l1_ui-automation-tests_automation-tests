import { Components } from "sc-automation-core";

let BlackPinkLocators =  Components.BaseLocator.ClassicSlotLocators

const lblHistoryDetailRoundId = {x: 650}
 
BlackPinkLocators.forEach((item, i)=>{ if (item.name == "lblHistoryDetailRoundId") item.x = lblHistoryDetailRoundId.x } )

export const extBlackPinkLocators = BlackPinkLocators
