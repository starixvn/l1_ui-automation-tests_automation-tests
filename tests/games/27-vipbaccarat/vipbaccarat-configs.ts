import { Components } from "sc-automation-core";

export const VipBaccaratConfigs: Components.GameConfiguration = {
  id: 27,
  name: "VipBaccarat",
  durations: {
    wholeRound: 45 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 10 * 1000,
  },
  choices: [
    "player",
    "banker",
    "tie",
    "big",
    "small",
    "playerPair",
    "bankerPair",
    "natural",
  ],
  hedgeBetGroups: [["big", "small"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    player: 2,
    banker: 1.95,
    big: 1.54,
    small: 2.5,
    tie: 9,
    playerPair: 12,
    bankerPair: 12,
  },
  betBoard: false,
  accounts: {
    local: "222245",
    local1: "222245",
    local2: "222245",
    local3: "222245",
    sit: "supertestsaba70",
    uat: "IT58Test789",
    prod: "supertestte120201011",
    l2uat: "TestSep2744",
    l2prod: "VNtest040",
  },
  productId: { l1: "1638", l2: 3827 },

};

export const AdminDataSet_local ={
  accountId: 222245,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='vipbaccarat']",
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
      totalAmount: 50,
      validBetAmount: 50,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Lose": {
      totalAmount: 50,
      totalWin: 0,
      validBetAmount: 50,
      errorCode: "0",
      errorDescription: null
    },
  },
  l2datasetTicket:{
    "Settle_Win": {
      "//*/div[contains(@class,'col-12 col-xl-6')][1]/div[2]/div[1]": "//*/div[contains(@class,'modal-body')]/div[1]/div[4]",
      "//*/div[contains(@class,'col-12 col-xl-6')][1]/div[2]/div[2]": "//*/div[contains(@class,'modal-body')]/div[1]/div[5]",
      "//*/div[contains(@class,'col-12 col-xl-6')][2]/div[2]/div[1]": "//*/div[contains(@class,'modal-body')]/div[1]/div[2]",
      "//*/div[contains(@class,'col-12 col-xl-6')][2]/div[2]/div[2]": "//*/div[contains(@class,'modal-body')]/div[1]/div[3]"
    },
    "Expect_Win": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "winResult.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "winChoices.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png"
    },
    "Settle_Lose": {
      "//*/div[contains(@class,'col-12 col-xl-6')][1]/div[2]/div[1]": "//*/div[contains(@class,'modal-body')]/div[1]/div[2]",
      "//*/div[contains(@class,'col-12 col-xl-6')][1]/div[2]/div[2]": "//*/div[contains(@class,'modal-body')]/div[1]/div[3]",
      "//*/div[contains(@class,'col-12 col-xl-6')][2]/div[2]/div[1]": "//*/div[contains(@class,'modal-body')]/div[1]/div[4]",
      "//*/div[contains(@class,'col-12 col-xl-6')][2]/div[2]/div[2]": "//*/div[contains(@class,'modal-body')]/div[1]/div[5]"
    },
    "Expect_Lose": {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "lossResult.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "lossChoices.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png"
    },
  }
}