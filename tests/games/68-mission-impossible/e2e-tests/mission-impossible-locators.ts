import { Components } from "sc-automation-core";

let MissionImpossibleLocators =  Components.BaseLocator.ClassicSlotLocators

const lblHistoryDetailRoundId = {x: 650}
 
MissionImpossibleLocators.forEach((item, i)=>{ if (item.name == "lblHistoryDetailRoundId") item.x = lblHistoryDetailRoundId.x } )

export const extMissionImpossibleLocators = MissionImpossibleLocators
