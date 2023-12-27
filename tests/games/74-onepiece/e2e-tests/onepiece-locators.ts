import { Components } from "sc-automation-core";

let OnePieceLocators =  Components.BaseLocator.ClassicSlotLocators

const lblHistoryDetailRoundId = {x: 650}
 
OnePieceLocators.forEach((item, i)=>{ if (item.name == "lblHistoryDetailRoundId") item.x = lblHistoryDetailRoundId.x } )

export const extOnePieceLocators = OnePieceLocators
