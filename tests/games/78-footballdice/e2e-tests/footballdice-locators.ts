import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extFootballDiceLocators = [
  new ImageLocator("imgdealer", 580, 120, 125, 93),
  new ImageLocator("homeChoice", 232, 387, 229, 51),
  new ImageLocator("homeOwnbetl1", 327, 520, 44, 30),
  new ImageLocator("homeOwnbetl2", 327, 520, 44, 30),
  new ImageLocator("awayChoice", 790, 386, 296, 56),
  new ImageLocator("awayOwnbetl1", 884, 360, 30, 22),
  new ImageLocator("awayOwnbetl2", 884, 360, 30, 22),
  new ImageLocator("drawChoice", 588, 438, 111, 35),
  new ImageLocator("draw12Choice", 588, 438, 111, 35),
  new ImageLocator("drawOwnbetl1", 884, 360, 30, 22),
  new ImageLocator("drawOwnbetl2", 884, 360, 30, 22),
  new ImageLocator("defaultChipBarl1", 325, 598, 637, 79),
  new ImageLocator("defaultChipBarl2", 325, 598, 637, 79),
  new ImageLocator("btnHome", 33, 111, 35, 35),
  new ImageLocator("hamburgerMenu",24, 146, 51, 56),
  new ImageLocator("historyMenu", 21, 346, 52, 42),
  new ImageLocator("historyPopup", 465, 70, 609, 186),
  new ImageLocator("guideMenu", 35, 416, 20, 20),
  new ImageLocator("stake1", 394, 593, 55, 55),
  new ImageLocator("stake5", 482, 617, 50, 45),
  new ImageLocator("stake10", 394, 593, 55, 55),
  new ImageLocator("stake5", 555, 593, 55, 55),
  new ImageLocator("lblHistoryFirstRow", 246, 193, 711, 30),
  new ImageLocator("locHistoryRoundId", 397, 201, 35, 11),
  new ImageLocator("lblRoundIdOnTable", 598, 286, 106, 23),
  new ImageLocator("awayBar", 938, 567, 13, 13),
  new ImageLocator("homeBar", 938, 567, 13, 13),
  new ImageLocator("drawBar", 938, 567, 13, 13),
  new ImageLocator("msgMaxbethomel1", 452, 545, 364, 32),
  new ImageLocator("msgMaxbetawayl1", 452, 545, 364, 32),
  new ImageLocator("msgMaxbetdrawl1", 452, 545, 364, 32),
  new ImageLocator("msgMaxbethomel2", 452, 545, 364, 32),
  new ImageLocator("msgMaxbetawayl2", 452, 545, 364, 32),
  new ImageLocator("msgMaxbetdrawl2", 452, 545, 364, 32),
  new ImageLocator("outside", 10, 10, 10, 10),
  new ImageLocator("btnRightArrow", 926, 613, 30, 48),
  new ImageLocator("btnLeftArrow", 322, 620, 35, 35),
];

export const FootballDiceLocators = extFootballDiceLocators.concat(Components.BaseLocator.GameLobbyLocator)


// export const FootballDiceLocators = extFootballDiceLocators.concat(Components.TableLocator.TableLocators).filter((item, index) => {
//   return !Components.TableLocator.TableLocators.some((array1Item, array1Index) => {
//     return array1Index === index && item === array1Item;
//   });
// });


// const lblHistoryDetailRoundId = {x: 639}
 
// HappyFishLocators.forEach((item, i)=>{ if (item.name == "lblHistoryDetailRoundId") item.x = lblHistoryDetailRoundId.x } )
