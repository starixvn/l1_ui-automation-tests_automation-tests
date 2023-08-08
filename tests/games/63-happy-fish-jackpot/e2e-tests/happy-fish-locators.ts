import { Components } from "sc-automation-core";

let HappyFishLocators =  Components.ClassicSlotLocators

const lblHistoryDetailRoundId = {x: 639}
 
HappyFishLocators.forEach((item, i)=>{ if (item.name == "lblHistoryDetailRoundId") item.x = lblHistoryDetailRoundId.x } )

export const extHappyFishLocators = HappyFishLocators
