import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extKaraKrusLocators = [
  new ImageLocator("karaChoice", 215, 271, 81, 44),
  new ImageLocator("karaOwnbetl1", 348, 357, 30, 26),
  new ImageLocator("karaOwnbetl2", 348, 357, 30, 26),
  new ImageLocator("krusChoice", 755, 271, 163, 46),
  new ImageLocator("krusOwnbetl1", 903, 356, 29, 27),
  new ImageLocator("krusOwnbetl2", 903, 356, 29, 27),
  new ImageLocator("head3Choice", 206, 410, 34, 106),
  new ImageLocator("head2Choice", 437, 415, 29, 98),
  new ImageLocator("head1Choice", 666, 416, 27, 99),
  new ImageLocator("tail3Choice", 896, 416, 27, 96),
  new ImageLocator("playerBalance", 192, 644, 125, 23),
  new ImageLocator("hamburgerMenu", 37, 167, 21, 21),
  new ImageLocator("historyMenu", 37, 357, 21, 21),
  new ImageLocator("historyPopup", 120, 90, 1040, 120),
  new ImageLocator("defaultChipBarl1", 325, 598, 637, 79),
  new ImageLocator("defaultChipBarl2", 325, 598, 637, 79),
  new ImageLocator("btnHome", 33, 111, 35, 35),
  new ImageLocator("guideMenu", 35, 416, 20, 20),
  new ImageLocator("imgStatistic", 792, 7, 68, 123),
  new ImageLocator("txtMD5", 797, 138, 84, 22),
  new ImageLocator("imgDealer", 550, 7, 170, 216),
  new ImageLocator("stake1", 394, 593, 55, 55),
  new ImageLocator("stake5", 482, 617, 50, 45),
  new ImageLocator("stake10", 394, 593, 55, 55),
  new ImageLocator("stake5", 555, 593, 55, 55),
  new ImageLocator("lblHistoryFirstRow", 246, 193, 711, 30),
  new ImageLocator("locHistoryRoundId", 397, 201, 35, 11),
  new ImageLocator("karaBar", 900, 560, 12, 10),
  new ImageLocator("krusBar", 900, 560, 12, 10),
  new ImageLocator("msgMaxbethomel1", 452, 545, 364, 32),
  new ImageLocator("msgMaxbetawayl1", 452, 545, 364, 32),
  new ImageLocator("msgMaxbetdrawl1", 452, 545, 364, 32),
  new ImageLocator("msgMaxbethomel2", 452, 545, 364, 32),
  new ImageLocator("msgMaxbetawayl2", 452, 545, 364, 32),
  new ImageLocator("msgMaxbetdrawl2", 452, 545, 364, 32),
  new ImageLocator("outside", 10, 10, 10, 10),
  new ImageLocator("btnRightArrow", 926, 613, 30, 48),
  new ImageLocator("btnLeftArrow", 322, 620, 35, 35),
  new ImageLocator("lblRoundIdOnTable", 321, 190, 119, 22),
];

export const KaraKrusLocators = extKaraKrusLocators.concat(Components.BaseLocator.GameLobbyLocator)


// export const KaraKrusLocators = extKaraKrusLocators.concat(TableLocator.TableLocators).filter((item, index) => {
//   return !TableLocator.TableLocators.some((array1Item, array1Index) => {
//     return array1Index === index && item === array1Item;
//   });
// });


// const lblHistoryDetailRoundId = {x: 639}
 
// HappyFishLocators.forEach((item, i)=>{ if (item.name == "lblHistoryDetailRoundId") item.x = lblHistoryDetailRoundId.x } )
