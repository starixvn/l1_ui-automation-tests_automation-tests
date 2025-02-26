import { Components } from "sc-automation-core";

export const FruitSlotConfigs: Components.GameConfiguration = {
  id: 59,
  name: "FruitSlot",
  durations: {
    wholeRound: 50 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 7 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: [
    "bar",
    "tripleSeven",
    "watermelon",
    "star",
    "bell",
    "orange",
    "lemon",
    "cherry",
    "big",
    "small",
    "bar25",
    "tripleSeven3",
    "watermelon3",
    "star3",
    "bell3",
    "orange3",
    "lemon3",
    "cherry3",
    "bar50",
    "lucky",
  ],
  hedgeBetGroups: [["big", "small"]],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    bar: 100,
    bar50: 50,
    bar25: 25,
    tripleSeven: 40,
    tripleSeven3: 3,
    star: 30,
    star3: 3,
    watermelon: 20,
    watermelon3: 3,
    bell: 20,
    bell3: 3,
    lemon: 15,
    lemon3: 3,
    orange: 10,
    orange3: 3,
    cherry: 5,
    cherry3: 3,
    big: 1.96,
    small: 1.96,
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
  productId: { l1: "1666", l2: 3858 },

};


export const AdminDataSet_local ={
  accountId: 222263,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='fruitslot']",
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
      "//select": "4",
    },
    "Expect_Win": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "winResult.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png"
    },
    "Settle_Lose": {
      "//select": "12",
    },
    "Expect_Lose": {
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "lossResult.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png"
    },
  }
}