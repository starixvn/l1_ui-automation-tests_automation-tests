import { Components } from "sc-automation-core";

export const VIPFPCConfigs: Components.GameConfiguration = {
  id: 26,
  name: "VipFishPrawnCrab",
  durations: {
    wholeRound: 42 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 2 * 1000,
  },
  choices: [
    "stag",
    "gourd",
    "rooster",
    "fish",
    "crab",
    "prawn",
    "anyTriple",
    "mountain",
    "ocean",
  ],
  hedgeBetGroups: [["mountain", "ocean"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    single: 2,
    double: 3.5,
    triple: 6,
    anyTriple: 31,
    mountain: 1.96,
    ocean: 1.96,
  },
  betBoard: false,
  accounts: {
    local: "222244",
    local1: "222244",
    local2: "222244",
    local3: "222244",
    sit: "supertestsaba69",
    uat: "IT57Test789",
    prod: "supertestte120201009",
    l2uat: "TestSep2743",
    l2prod: "VNtest050",
  },
  productId: { l1: "1637", l2: 3826 },

};


export const AdminDataSet_local ={
  accountId: 222244,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='vipfishprawncrab']",
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
      totalAmount: 100,
      validBetAmount: 100,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Lose": {
      totalAmount: 100,
      totalWin: 0,
      validBetAmount: 100,
      errorCode: "0",
      errorDescription: null
    },
  },
  l2datasetTicket:{
    "Settle_Win": {
      "#dice-0": "//*/div[@class='modal-content']//div[4]/img",
      "#dice-1": "//*/div[@class='modal-content']//div[5]/img",
      "#dice-2": "//*/div[@class='modal-content']//div[6]/img",
    },
    "Expect_Win": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "winResult.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png"
    },
    "Settle_Lose": {
      "#dice-0": "//*/div[@class='modal-content']//div[1]/img",
      "#dice-1": "//*/div[@class='modal-content']//div[2]/img",
      "#dice-2": "//*/div[@class='modal-content']//div[3]/img",
    },
    "Expect_Lose": {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "lossResult.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png"
    },
  }
}