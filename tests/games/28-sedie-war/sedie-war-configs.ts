import { Components } from "sc-automation-core";

export const SedieWarConfigs: Components.GameConfiguration = {
  id: 28,
  name: "VipSedieWar",
  durations: {
    wholeRound: 54 * 1000,
    placingBets: 45 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 4 * 1000,
  },
  choices: [
    "player",
    "banker",
    "tie",
    "odd",
    "even",
    "playerOdd",
    "playerEven",
    "playerRed3",
    "playerRed4",
    "playerWhite3",
    "playerWhite4",
    "bankerOdd",
    "bankerEven",
    "bankerRed3",
    "bankerRed4",
    "bankerWhite3",
    "bankerWhite4",
  ],
  hedgeBetGroups: [["player", "banker"]],
  maxTimeout: 120 * 1000, // miliseconds,
  odds: {
    player: 2.6,
    banker: 2.6,
    tie: 3.5,
    even: 1.96,
    odd: 1.96,
    playerEven: 1.96,
    playerOdd: 1.96,
    playerRed3: 3.75,
    playerWhite3: 3.75,
    playerRed4: 14.4,
    playerWhite4: 14.4,
    bankerEven: 1.96,
    bankerOdd: 1.96,
    bankerRed3: 3.75,
    bankerWhite3: 3.75,
    bankerRed4: 14.4,
    bankerWhite4: 14.4,
  },
  accounts: {
    local: "222246",
    local1: "222246",
    local2: "222246",
    local3: "222246",
    sit: "supertestsaba66",
    uat: "IT55Test789",
    prod: "supertestte120201012",
    l2uat: "TestSep2745",
    l2prod: "VNtest041",
  },
  productId: { l1: "1639", l2: 3828 },
};


export const AdminDataSet_local ={
  accountId: 222246,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='vipsediewar']",
  isSettleNextRound: false,
  l2datasetRER:{
    "Expect_NoData": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "Expect_Win": {
      totalAmount: 10,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Lose": {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null
    },
  },
  l2datasetTicket:{
    "Settle_Win": {
      "#player-0": "//*/div[@class='modal-content']//div[1]/img",
      "#player-1": "//*/div[@class='modal-content']//div[1]/img",
      "#player-2": "//*/div[@class='modal-content']//div[1]/img",
      "#player-3": "//*/div[@class='modal-content']//div[1]/img"
    },
    "Expect_Win": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "winResult.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "winChoices.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png"
    },
    "Settle_Lose": {
      "#player-0": "//*/div[@class='modal-content']//div[2]/img",
      "#player-1": "//*/div[@class='modal-content']//div[1]/img",
      "#player-2": "//*/div[@class='modal-content']//div[1]/img",
      "#player-3": "//*/div[@class='modal-content']//div[1]/img"
    },
    "Expect_Lose": {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "lossResult.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "lossChoices.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png"
    },
  }
}