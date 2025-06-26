import { Components } from "sc-automation-core";

export const FootballSpinConfigs: Components.GameConfiguration = {
  id: 79,
  name: "FootballSlot",
  durations: {
    wholeRound: 50 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 7 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: [
    "big",
    "small",
    "cup",
    "mascot",
    "franceShirt",
    "hostCountry",
    "englandShirt",
    "tickets",
    "ball",
    "shoes",
    "cup25",
    "mascot3",
    "franceShirt3",
    "hostCountry3",
    "englandShirt3",
    "tickets3",
    "ball3",
    "shoes3",
    "cup50",
    "lucky"
  ],
  hedgeBetGroups: [["big", "small"]],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    cup: 100,
    cup50: 50,
    cup25: 25,
    mascot: 40,
    mascot3: 3,
    hostCountry: 30,
    hostCountry3: 3,
    franceShirt: 20,
    franceShirt3: 3,
    englandShirt: 20,
    englandShirt3: 3,
    ball: 15,
    ball3: 3,
    tickets: 10,
    tickets3: 3,
    shoes: 5,
    shoes3: 3,
    big: 1.96,
    small: 1.96
  },
  accounts: {
    local: "222263",
    local1: "222263",
    local2: "222263",
    local3: "222263",
    sit: "supertestsaba70",
    uat: "IT58Test789",
    prod: "supertestte120201008",
    l2uat: "TestSep2749",
    l2prod: "VNtest041",
  },
  productId:  { l1: "1686", l2: "3878" },
};

export const AdminDataSet_local ={
  accountId: 222263,
  mornitorlocator: "//*[@data-game-name='footballslot']",
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
      totalAmount: 1,
      totalWin: 1.96,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Lose": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
  },
  
  l1datasetTicket:{
    "Settle_Win": {
      "//*[@id='__next']/div/div[4]/div/select": "10"
    },
    "Expect_Win": {
      "//*[@id='game-ticket']/table[1]/tbody/tr/td[4]": "ResultBig.png",
      "//*[@id='game-ticket']/table[1]/thead": "Header.png",
      "//*[@id='game-ticket']/table[2]/thead": "HeaderDetails.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": "WinLossWin.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "TotalWin.png",

    },
    "Settle_Lose": {
      "//*[@id='__next']/div/div[4]/div/select": "5"
    },
    "Expect_Lose": {
      "//*[@id='game-ticket']/table[1]/tbody/tr/td[4]": "ResultSmall.png",
      "//*[@id='game-ticket']/table[1]/thead": "Header.png",
      "//*[@id='game-ticket']/table[2]/thead": "HeaderDetails.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": "WinLossLose.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "BetChoiceBig.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "TotalLose.png"
    }, 
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
      totalAmount: 10,
      totalWin: 19.6,
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
      "//*[@id='__next']/div/div[4]/div/select": "10"
    },
    "Expect_Win": {
      "//*[@id='game-ticket']/table[1]/tbody/tr/td[4]": "ResultBig.png",
      "//*[@id='game-ticket']/table[1]/thead": "Header.png",
      "//*[@id='game-ticket']/table[2]/thead": "HeaderDetails.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": "l2WinLossWin.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "l2TotalWin.png",
    },
    "Settle_Lose": {
      "//*[@id='__next']/div/div[4]/div/select": "5"
    },
    "Expect_Lose": {
      "//*[@id='game-ticket']/table[1]/tbody/tr/td[4]": "ResultSmall.png",
      "//*[@id='game-ticket']/table[1]/thead": "Header.png",
      "//*[@id='game-ticket']/table[2]/thead": "HeaderDetails.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": "l2WinLossLose.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "BetChoiceBig.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "l2TotalLose.png"
    }, 
  },
}
