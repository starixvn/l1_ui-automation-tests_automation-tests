import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extSedieLocators = [
  new ImageLocator("imgdealer", 553, 10, 150, 150),
  new ImageLocator("evenChoice", 256, 274, 160, 60),
  new ImageLocator("evenOwnbet", 384, 360, 30, 30),
  new ImageLocator("oddChoice", 740, 277, 76, 60),
  new ImageLocator("oddOwnbetl1", 884, 360, 30, 22),
  new ImageLocator("oddOwnbetl2", 884, 360, 30, 22),
  new ImageLocator("red2Choice", 572, 413, 30, 85),
  new ImageLocator("red2Ownbet", 630, 484, 30, 30),
  new ImageLocator("red3Choice", 405, 413, 30, 85),
  new ImageLocator("red3Ownbet", 464,  484, 30, 30),
  new ImageLocator("red4Choice", 245, 413, 30, 85),
  new ImageLocator("red4Ownbet", 294,  484, 30, 30),
  new ImageLocator("white3Choice", 739, 413, 30, 85),
  new ImageLocator("white3Ownbet", 800,  484, 30, 30),
  new ImageLocator("white4Choice", 907, 413, 30, 85),
  new ImageLocator("white4Ownbet", 967, 484, 30, 30),
  new ImageLocator("defaultChipBarl1", 306, 570, 670, 80),
  new ImageLocator("defaultChipBarl2", 306, 570, 670, 80),
  new ImageLocator("btnHome", 33, 111, 35, 35),
  new ImageLocator("hamburgerMenu",24, 146, 51, 56),
  new ImageLocator("historyMenu", 21, 346, 52, 42),
  new ImageLocator("historyPopup", 465, 70, 609, 186),
  new ImageLocator("guideMenu", 35, 416, 20, 20),
  new ImageLocator("stake1", 394, 593, 55, 55),
  new ImageLocator("stake10", 394, 593, 55, 55),
  new ImageLocator("lblHistoryFirstRow", 92, 175, 1120, 43),
  new ImageLocator("locHistoryRoundId", 249, 174, 80, 30),
  new ImageLocator("lblRoundIdOnTable", 353, 203, 100, 25),
  new ImageLocator("oddBar", 878, 533, 16, 16),
  new ImageLocator("evenBar", 878, 533, 16, 16),
  new ImageLocator("msgMaxbetred4l1", 478, 488, 400, 30),
  new ImageLocator("msgMaxbetred3l1", 478, 488, 400, 30),
  new ImageLocator("msgMaxbetred2l1", 478, 488, 400, 30),
  new ImageLocator("msgMaxbetwhite3l1", 478, 488, 400, 30),
  new ImageLocator("msgMaxbetwhite4l1", 478, 488, 400, 30),
  new ImageLocator("msgMaxbetred4l2", 478, 488, 400, 30),
  new ImageLocator("msgMaxbetred3l2", 478, 488, 400, 30),
  new ImageLocator("msgMaxbetred2l2", 478, 488, 400, 30),
  new ImageLocator("msgMaxbetwhite3l2", 478, 488, 400, 30),
  new ImageLocator("msgMaxbetwhite4l2", 478, 488, 400, 30),
  new ImageLocator("outside", 10, 10, 10, 10),
  new ImageLocator("btnRightArrow", 911, 580, 40, 40),
  new ImageLocator("btnLeftArrow", 360, 580, 40, 40),
];

export const SedieLocators = extSedieLocators.concat(Components.BaseLocator.GameLobbyLocator)


// export const SedieLocators = extSedieLocators.concat(Components.TableLocator.TableLocators).filter((item, index) => {
//   return !Components.TableLocator.TableLocators.some((array1Item, array1Index) => {
//     return array1Index === index && item === array1Item;
//   });
// });


// const lblHistoryDetailRoundId = {x: 639}
 
// HappyFishLocators.forEach((item, i)=>{ if (item.name == "lblHistoryDetailRoundId") item.x = lblHistoryDetailRoundId.x } )
