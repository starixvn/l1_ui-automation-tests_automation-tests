export const BacNumbersLocators = {
  inGameUI: { "#img-game-name": "gamename.png" ,"#icon-pf": "icopf.png" ,"#icon-home": "icohome.png","#icon-menu": "icomenu.png"},
  inGameValues: {
    "//*[@class='text-center copyright']":
      "Copyright © 2024 SABA New Number Game",
  },
  menuItems:[
    "#icon-sound-off", "#sound-settings","#icon-history", "#icon-guide"
  ],
  betchoices: {
    player: "#BacBall-choice-player",
    banker: "#BacBall-choice-banker",
    tie: "#BacBall-choice-tie",
  },
  betchip: { Chip1: "", Chip10: "" },
  hedgeBetError: {
    ".modal-center": "Chỉ có thể đặt cược trên player hoặc banker.",
  },
};
