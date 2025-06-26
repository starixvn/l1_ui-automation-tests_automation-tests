import { Components } from "sc-automation-core";

export const FortuneCatConfigs: Components.GameConfiguration = {
  id: 62,
  name: "FortuneCat",
  durations: {
    wholeRound: 0,
    placingBets: 0,
    lockingBet: 0,
    shakeThePlateDuration: 0,
  },
  choices: ["25"],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    "0": { "2": 0, "3": 2, "4": 5, "5": 10 },
    "1": { "2": 0, "3": 5, "4": 10, "5": 25 },
    "2": { "2": 0, "3": 5, "4": 25, "5": 50 },
    "3": { "2": 0, "3": 10, "4": 30, "5": 150 },
    "4": { "2": 0, "3": 12, "4": 45, "5": 275 },
    "5": { "2": 0, "3": 16, "4": 60, "5": 375 },
    "6": { "2": 0, "3": 20, "4": 75, "5": 500 },
    "7": { "2": 0, "3": 3, "4": 6, "5": 18 },
    "8": { "2": 0, "3": 3, "4": 4, "5": 5 },
    "9": { "2": 8, "3": 50, "4": 1000, "5": 8000 },
    "10": { "2": 4, "3": 25, "4": 100, "5": 5000 },
  },
  slotsgame: true,
  accounts: {
    local: "2222291",
    local1: "2222291",
    local2: "2222291",
    local3: "2222291",
    sit: "supertestsaba70",
    uat: "IT57Test789",
    prod: "supertestte120201012",
    l2uat: "TestSep2741",
    l2prod: "VNtest050",
  },
  productId: { l1: "1669", l2: 3861 },
};

export const AdminDataSet_local = {
  accountId: 2222291,
  mornitorlocator: "//*[contains(@onclick,'Fortune Cat')]",
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  l1datasetRER:{
    "Expect_NoData": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "Expect_Win": {
      totalAmount: 25,
      totalWin: 45,
      validBetAmount: 25,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Lose": {
      totalAmount: 25,
      totalWin: 0,
      validBetAmount: 25,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Freespin": {
      totalAmount: 25,
      totalWin: 0,
      validBetAmount: 25,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_FreespinRound": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Bonus": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },

  },
  l1datasetTicket:{
    "Settle_Win": {
      "#Nickname": "uusacc",
      "#Results": "1,2,6,7,2,3,3,2,0,4,7,4,5,2,10",
    },
    "Expect_Win": { "snapshot":{
      "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "l1boardresult_win.png",
      "//*/div[@id='game-ticket']/table[2]": "l1betresult_win.png",
    }},
    "Settle_Lose": {
      "#Nickname": "uusacc",
      "#Results": "1,4,4,3,7,3,2,6,0,1,9,3,10,5,10",
    },
    "Expect_Lose": { "snapshot":{
      "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "l1boardresult_lose.png",
      "//*/div[@id='game-ticket']/table[2]": "l1betresult_lose.png",
    }},
    "Settle_Freespin": {
      "#Nickname": "uusacc",
      "#Results": "1,1,6,7,2,3,7,0,0,7,4,4,5,2,10	",
    },
    "Expect_Freespin": { "snapshot":{
      "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "l1boardresult_freespin.png",
      "//*/div[@id='game-ticket']/table[2]": "l1betresult_freespin.png",}
  },
  
  "Settle_Bonus": {
    "#Nickname": "uusacc",
    "#Results": "1,1,6,8,2,3,8,0,0,8,4,4,5,2,10",
  },
  "expect_bonus": { "snapshot":{
    "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "l1boardresult_bonus.png",
    "//*/div[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "l1symbol_bonus.png",
    "//*/div[@id='game-ticket']/table[2]/tbody/tr[2]/td[1]": "lines_bonus.png",
  },
}
},
  l2datasetRER:{
    "Expect_NoData": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "Expect_Win": {
      totalAmount: 250,
      totalWin: 450,
      validBetAmount: 250,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Lose": {
      totalAmount: 250,
      totalWin: 0,
      validBetAmount: 250,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Freespin": {
      totalAmount: 250,
      totalWin: 0,
      validBetAmount: 250,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_FreespinRound": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Bonus": {
      totalAmount: 250,
      totalWin: 0,
      validBetAmount: 250,
      errorCode: "0",
      errorDescription: null
    },

  },
  l2datasetTicket:{
    "Settle_Win": {
      "#Nickname": "uusacc",
      "#Results": "1,2,6,7,2,3,3,2,0,4,7,4,5,2,10",
    },
    "Expect_Win": { "snapshot":{
      "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "l2boardresult_win.png",
      "//*/div[@id='game-ticket']/table[2]": "l2betresult_win.png",
    }},
    "Settle_Lose": {
      "#Nickname": "uusacc",
      "#Results": "1,4,4,3,7,3,2,6,0,1,9,3,10,5,10",
    },
    "Expect_Lose": { "snapshot":{
      "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "l2boardresult_lose.png",
      "//*/div[@id='game-ticket']/table[2]": "l2betresult_lose.png",
    }},
    "Settle_Freespin": {
      "#Nickname": "uusacc",
      "#Results": "1,1,6,7,2,3,7,0,0,7,4,4,5,2,10	",
    },
    "Expect_Freespin": { "snapshot":{
      "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "l2boardresult_freespin.png",
      "//*/div[@id='game-ticket']/table[2]": "l2betresult_freespin.png",}
  },

  "Settle_Bonus": {
    "#Nickname": "uusacc",
    "#Results": "1,1,6,8,2,3,8,0,0,8,4,4,5,2,10",
  },
  "expect_bonus": { "snapshot":{
    "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "l2boardresult_bonus.png",
    "//*/div[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "l2symbol_bonus.png",
  },
  }
  },

}
