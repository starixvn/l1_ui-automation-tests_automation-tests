import { Components } from "sc-automation-core";

export const TurboBigSmallConfigs: Components.GameConfiguration = {
  id: 4,
  name: "TXTurbo",
  durations: {
    wholeRound: 37 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 3 * 1000,
    shakeThePlateDuration: 3 * 1000,
  },
  choices: ["big", "small"],
  hedgeBetGroups: [["big", "small"]],
  maxTimeout: 200 * 1000, // miliseconds, should not over 2 * wholeRound
  odds: {
    big: 1.96,
    small: 1.96,
  },
  socketName: "turbobigsmall",
  betBoard: true,
  accounts: {
    local: "222224",
    local1: "222224",
    local2: "222224",
    local3: "222224",
    sit: "supertestsaba69",
    uat: "IT58Test789",
    prod: "supertestte120201006",
    l2uat: "TestSep2743",
    l2prod: "VNtest046",
  },
  productId: { l1: "1615", l2: 3805 },

};

export const AdminDataSet_local ={
  accountId: 222224,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='txturbo']",
  l2datasetRER:{
    "TC1_expect": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "TC2_expect": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "TC3_expect": {
      totalAmount: 10,
      totalWin: 1.96,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "TC3_settle": {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    "TC4_settle": {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    "TC4_expect": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "TC5_settle": {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    "TC5_expect": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "TC6_settle": {
      "//*/div[contains(@class,'shake-the-plate_result')]/div[1]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[2]": "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[3]": "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[4]": "//*/div[@class='modal-content']//div[1]/img"
    },
    "TC6_expect": {
      totalAmount: 2,
      totalWin: 0,
      validBetAmount: 2,
      errorCode: "0",
      errorDescription: null
    },
  },
  l2datasetTicket:{
    "TC3_settle": {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    "TC3_expect": { "snapshot":{
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultWin.png",
      "//*[@id='game-ticket']/table[2]": "detailWin.png",}
    },
    "TC4_settle": {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    "TC5_settle": {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    "TC5_expect": { "snapshot":{
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultLoss.png",
      "//*[@id='game-ticket']/table[2]": "detailLoss.png",} 
    },
  }
}
