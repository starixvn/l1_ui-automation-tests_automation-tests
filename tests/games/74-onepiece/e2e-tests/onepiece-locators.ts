import { Components } from "sc-automation-core";

let OnePieceLocators =  Components.BaseLocator.ClassicSlotLocators

const lblHistoryDetailRoundId = {x: 650}
 
OnePieceLocators.forEach((item, i)=>{ if (item.name == "lblHistoryDetailRoundId") item.x = lblHistoryDetailRoundId.x } )

const imgGameName = {x: 476, y:25, width: 44, height : 51}
 
OnePieceLocators.forEach((item, i)=>{ if (item.name == "imgGameName"){ item.x = imgGameName.x , item.y = imgGameName.y, item.width = imgGameName.width , item.height = imgGameName.height}} )

export const extOnePieceLocators = OnePieceLocators
