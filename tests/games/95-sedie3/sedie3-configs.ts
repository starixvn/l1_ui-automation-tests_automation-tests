import { Components } from "sc-automation-core";

export const SeDie3Configs: Components.GameConfiguration = {
  id: 95,
  name: "SeDie3",
  durations: {
    wholeRound: 38 * 1000,
    placingBets: 20 * 1000,
    lockingBet: 3 * 1000,
    shakeThePlateDuration: 2 * 1000,
  },
  choices: ["red", "white", "red1", "red2", "red3", "white3"],
  hedgeBetGroups: [["red", "white"]],
  maxTimeout: 180 * 1000, // miliseconds,
  odds: {
    red: 1.96,
    white: 1.96,
    red1: 2.5,
    red2: 2.5,
    red3: 7.5,
    white3: 7.5,

  },
  accounts: {
    local: "222222",
    local1: "222222",
    local2: "222222",
    l2local2: "222222",
    local3: "222222",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201003",
    l2uat: "TestSep2741",
    l2prod: "VNtest041",
  },
  productId: { l1: "1690", l2: "3882" },
}

export const AdminDataSet_local ={
  accountId: 222222,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='sedie3']",
  isSettleNextRound: true,
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
      "//*/div[contains(@class,'dice_dice')][1]": "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'dice_dice')][2]": "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'dice_dice')][3]": "//*/div[@class='modal-content']//div[1]/img",
    },
    "Expect_Win": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[2]": "winResult.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png"
    },
    "Settle_Lose": {
        "//*/div[contains(@class,'dice_dice')][1]": "//*/div[@class='modal-content']//div[2]/img",
        "//*/div[contains(@class,'dice_dice')][2]": "//*/div[@class='modal-content']//div[2]/img",
        "//*/div[contains(@class,'dice_dice')][3]": "//*/div[@class='modal-content']//div[2]/img",
    },
    "Expect_Lose": {
      "//*[@id='game-ticket']/table[1]/tbody//td[2]": "lossResult.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png"
    },
  }
}