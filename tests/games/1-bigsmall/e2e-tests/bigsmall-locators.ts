import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extBigSmallLocators = [
  new Components.ImageLocator("dealer", 610, 230, 60, 30),
  new Components.ImageLocator("bigChoice", 415, 270, 90, 50),
  new Components.ImageLocator("bigOwnbetl1", 442, 406, 45, 35),
  new Components.ImageLocator("smallChoice", 774, 270, 89, 59),
  new Components.ImageLocator("smallOwnbetl1", 405, 790, 45, 35),
  new Components.ImageLocator("playerBalance", 192, 644, 125, 23),
  new Components.ImageLocator("historyMenu", 328, 317, 27, 27),
  new Components.ImageLocator("historyPopup", 465, 70, 300, 70),
  new Components.ImageLocator("errorMessage", 546, 385, 193, 30),
  new Components.ImageLocator("bigChoiceBetBoard", 391, 369, 157, 42),
  new Components.ImageLocator("smallChoiceBetBoard", 742, 369, 157, 42),
  new Components.ImageLocator("stake1", 436, 489, 97, 36),
  new Components.ImageLocator("stake10", 436, 489, 97, 36),
  new Components.ImageLocator("stake1000", 774, 552, 60, 20),
  new Components.ImageLocator("submitBetBoard", 730, 595, 119, 31),
  new Components.ImageLocator("outside", 5, 5, 5, 5),
  new Components.ImageLocator("msgMaxbetLimitl1", 488, 378, 350, 30),
  new Components.ImageLocator("msgMaxbetLimitl2", 488, 378, 350, 30),
];

export const BigSmallLocators = extBigSmallLocators.concat(Components.BaseLocator.MiniGameLocators, Components.BaseLocator.GameLobbyLocator)


// export const SedieLocators = extSedieLocators.concat(Components.TableLocator.TableLocators).filter((item, index) => {
//   return !Components.TableLocator.TableLocators.some((array1Item, array1Index) => {
//     return array1Index === index && item === array1Item;
//   });
// });


// const lblHistoryDetailRoundId = {x: 639}
 
// HappyFishLocators.forEach((item, i)=>{ if (item.name == "lblHistoryDetailRoundId") item.x = lblHistoryDetailRoundId.x } )
