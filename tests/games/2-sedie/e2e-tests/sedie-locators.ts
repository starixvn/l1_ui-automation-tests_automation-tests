import { Components } from "sc-automation-core";

export const extSedieLocators = [
  new Components.ImageLocator("imgdealer", 553, 10, 150, 150),
  new Components.ImageLocator("evenChoice", 256, 274, 160, 60),
  new Components.ImageLocator("evenOwnbet", 384, 360, 30, 30),
  new Components.ImageLocator("oddChoice", 740, 277, 76, 60),
  new Components.ImageLocator("oddOwnbetl1", 884, 360, 30, 22),
  new Components.ImageLocator("oddOwnbetl2", 884, 360, 30, 22),
  new Components.ImageLocator("red2Choice", 572, 413, 30, 85),
  new Components.ImageLocator("red2Ownbet", 630, 484, 30, 30),
  new Components.ImageLocator("red3Choice", 405, 413, 30, 85),
  new Components.ImageLocator("red3Ownbet", 464,  484, 30, 30),
  new Components.ImageLocator("red4Choice", 245, 413, 30, 85),
  new Components.ImageLocator("red4Ownbet", 294,  484, 30, 30),
  new Components.ImageLocator("white3Choice", 739, 413, 30, 85),
  new Components.ImageLocator("white3Ownbet", 800,  484, 30, 30),
  new Components.ImageLocator("white4Choice", 907, 413, 30, 85),
  new Components.ImageLocator("white4Ownbet", 967, 484, 30, 30),
  new Components.ImageLocator("defaultChipBarl1", 306, 570, 670, 80),
  new Components.ImageLocator("defaultChipBarl2", 306, 570, 670, 80),
  new Components.ImageLocator("btnHome", 33, 111, 35, 35),
  new Components.ImageLocator("hamburgerMenu",24, 146, 51, 56),
  new Components.ImageLocator("historyMenu", 21, 346, 52, 42),
  new Components.ImageLocator("historyPopup", 465, 70, 609, 186),
  new Components.ImageLocator("guideMenu", 35, 416, 20, 20),
  new Components.ImageLocator("stake1", 394, 593, 55, 55),
  new Components.ImageLocator("stake10", 394, 593, 55, 55),
  new Components.ImageLocator("lblHistoryFirstRow", 92, 175, 1120, 43),
  new Components.ImageLocator("locHistoryRoundId", 249, 174, 80, 30),
  new Components.ImageLocator("lblRoundIdOnTable", 353, 203, 100, 25),
  new Components.ImageLocator("oddBar", 878, 533, 16, 16),
  new Components.ImageLocator("evenBar", 878, 533, 16, 16),
  new Components.ImageLocator("msgMaxbetred4l1", 478, 488, 400, 30),
  new Components.ImageLocator("msgMaxbetred3l1", 478, 488, 400, 30),
  new Components.ImageLocator("msgMaxbetred2l1", 478, 488, 400, 30),
  new Components.ImageLocator("msgMaxbetwhite3l1", 478, 488, 400, 30),
  new Components.ImageLocator("msgMaxbetwhite4l1", 478, 488, 400, 30),
  new Components.ImageLocator("msgMaxbetred4l2", 478, 488, 400, 30),
  new Components.ImageLocator("msgMaxbetred3l2", 478, 488, 400, 30),
  new Components.ImageLocator("msgMaxbetred2l2", 478, 488, 400, 30),
  new Components.ImageLocator("msgMaxbetwhite3l2", 478, 488, 400, 30),
  new Components.ImageLocator("msgMaxbetwhite4l2", 478, 488, 400, 30),
  new Components.ImageLocator("outside", 10, 10, 10, 10),
  new Components.ImageLocator("btnRightArrow", 911, 580, 40, 40),
  new Components.ImageLocator("btnLeftArrow", 360, 580, 40, 40),
];

export const SedieLocators = extSedieLocators.concat(Components.GameLobbyLocator.GameLobbyLocator)


// export const SedieLocators = extSedieLocators.concat(Components.TableLocator.TableLocators).filter((item, index) => {
//   return !Components.TableLocator.TableLocators.some((array1Item, array1Index) => {
//     return array1Index === index && item === array1Item;
//   });
// });


// const lblHistoryDetailRoundId = {x: 639}
 
// HappyFishLocators.forEach((item, i)=>{ if (item.name == "lblHistoryDetailRoundId") item.x = lblHistoryDetailRoundId.x } )
