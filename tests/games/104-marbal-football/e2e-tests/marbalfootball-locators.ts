import { Components } from "sc-automation-core";
const ImageLocator = Components.ImageLocator;

export const extMarbalFootBallLocators = [
  new ImageLocator("homeChoice", 340, 316, 117, 15),
  new ImageLocator("awayChoice", 815, 316, 140, 15),
  new ImageLocator("overChoice", 175, 316, 40, 15),
  new ImageLocator("underChoice", 175, 454, 40, 15),
  new ImageLocator("oddChoice", 1024, 316, 67, 15),
  new ImageLocator("evenChoice", 1005, 454, 85, 15),
  new ImageLocator("drawChoice", 612, 316, 67, 15),
  new ImageLocator("hamburgerMenu", 60, 207, 30, 30),
  new ImageLocator("historyMenu", 66, 400, 10, 10),
  new ImageLocator("historyPopup", 544, 85, 180, 45),
  new ImageLocator("stake1", 405, 610, 30, 30),
  new ImageLocator("stake10", 405, 610, 30, 30),
  new ImageLocator("guideMenu", 73, 467, 10, 10),
  new ImageLocator("outside", 5, 5, 5, 5),
  new ImageLocator("guide-1", 98, 38, 1083, 643),
  new ImageLocator("guide-2", 98, 38, 1083, 643),
  new ImageLocator("guide-3", 98, 38, 1083, 643),
  new ImageLocator("guide-4", 98, 38, 1083, 643),
  new ImageLocator("guide-5", 98, 38, 1083, 643),
  new ImageLocator("guide-6", 98, 38, 1083, 643),
  new ImageLocator("guide-7", 98, 38, 1083, 643),
  new ImageLocator("guide-8", 98, 38, 1083, 643),
  new ImageLocator("btnRightArrow", 937, 614, 40, 40),
  new ImageLocator("btnLeftArrow", 332, 614, 40, 40),
  new ImageLocator("lblRoundId", 1164, 72, 100, 20),
  new ImageLocator("btnHome", 64, 141, 25, 25),
  new ImageLocator("historyRoundId", 403, 205, 70, 36),
  {
    detailhistory: [
      "Trận",
      "Thời Gian (GMT+7)",
      "Lựa Chọn",
      "Tỷ lệ cược",
      "Tiền Cược",
      "Thắng",
      "Tổng",
      "Thắng Thua",
      "Kết Quả", "(Đội Nhà", "Đội Khách)",
    ],
  },
  new ImageLocator("imgGameLobby", 220, 96, 800, 21),

];

export const MarbalFootBallLocators = extMarbalFootBallLocators.concat(
  Components.BaseLocator.GameLobbyLocator
);
