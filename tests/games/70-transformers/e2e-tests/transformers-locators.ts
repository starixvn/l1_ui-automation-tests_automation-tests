import { Components } from "sc-automation-core";

let transformersLocators =  Components.ClassicSlotLocators

const lblHistoryDetailRoundId = {x: 650}
 
transformersLocators.forEach((item, i)=>{ if (item.name == "lblHistoryDetailRoundId") item.x = lblHistoryDetailRoundId.x } )

export const exttransformersLocators = transformersLocators
