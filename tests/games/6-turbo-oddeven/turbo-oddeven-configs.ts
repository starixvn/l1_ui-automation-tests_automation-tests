import { Components } from "sc-automation-core";

export const TurboOddEvenConfigs: Components.GameConfiguration = {
  id: 6,
  name: "OETurbo",
  durations: {
    wholeRound: 37 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 2 * 1000,
  },
  choices: ["odd", "even"],
  hedgeBetGroups: [["odd", "even"]],
  maxTimeout: 180 * 1000, // miliseconds,
  odds: {
    odd: 1.96,
    even: 1.96,
  },
  socketName: "turbooddeven",
  betBoard: true,
  accounts: {
    local: "222226",
    local1: "222226",
    local2: "222226",
    local3: "222226",
    sit: "supertestsaba66",
    uat: "IT55Test789",
    prod: "supertestte120201008",
    l2uat: "TestSep2744",
    l2prod: "VNtest050",
  },
  productId: { l1: "1617", l2: 3807 },
};

export const AdminDataSet_local ={
  accountId: 222226,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='oeturbo']",
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
      totalWin: 1.96,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "Settle_Win": {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    "Settle_Lose": {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    "Expect_Lose": {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null
    }
  },
  l2datasetTicket:{
    "Settle_Win": {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    "Expect_Win": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultWin.png",
      "//*[@id='game-ticket']/table[2]": "detailWin.png"
    },
    "Settle_Lose": {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    "Expect_Lose": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultLoss.png",
      "//*[@id='game-ticket']/table[2]": "detailLoss.png"
    },
  }
}
