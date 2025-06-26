import { Components } from "sc-automation-core";

export const FootballDiceConfigs: Components.GameConfiguration = {
  id: 78,
  name: "FootballDice",
  durations: {
    wholeRound: 38 * 1000,
    placingBets: 20 * 1000,
    lockingBet: 3 * 1000,
    shakeThePlateDuration: 2 * 1000,
  },
  choices: ["home", "draw", "away", "draw12"],
  hedgeBetGroups: [["home", "away"]],
  maxTimeout: 150 * 1000, // miliseconds,
  odds: {
    home: 1.96,
    away: 1.96,
    draw: 8,
    draw12: 50,
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
  productId: { l1: "1685", l2: 3877 },
}

export const AdminDataSet_local ={
  accountId: 222222,
  mornitorlocator: "//*[contains(@onclick,'FootballDice')]",
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
      "#Result_home_0_": "3",
      "#Result_home_1_": "4",
      "#Result_away_0_": "1",
      "#Result_away_1_": "2"
    },
    "Expect_Win": {
      "//*[@id='game-ticket']/table[1]/tbody/tr/td[3]/div/span/div": "Dice.png",
      "//*[@id='game-ticket']/table[1]/thead": "Header.png",
      "//*[@id='game-ticket']/table[2]/thead": "HeaderDetails.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": "WinLossWin.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "TotalWin.png"
    },
    "Settle_Lose": {
      "#Result_home_0_": "5",
      "#Result_home_1_": "5",
      "#Result_away_0_": "6",
      "#Result_away_1_": "6"
    },
    "Expect_Lose": {
      "//*[@id='game-ticket']/table[1]/tbody/tr/td[3]/div/span/div": "Dice2.png",
      "//*[@id='game-ticket']/table[1]/thead": "Header.png",
      "//*[@id='game-ticket']/table[2]/thead": "HeaderDetails.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": "WinLossLose.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "BetChoiceHome.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "TotalLose.png"
    },
    "Settle_Lose_multiple_choices": {
      "#Result_home_0_": "5",
      "#Result_home_1_": "5",
      "#Result_away_0_": "6",
      "#Result_away_1_": "6"
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
    "Expect_multiple_choices": {
      totalAmount: 2,
      totalWin: 0,
      validBetAmount: 2,
      errorCode: "0",
      errorDescription: null
    },
    "Settle_Lose_multiple_choices": {
      "#Result_home_0_": "6",
      "#Result_home_1_": "6",
      "#Result_away_0_": "5",
      "#Result_away_1_": "5"
    },  
    "Settle_draw": {
      "#Result_home_0_": "1",
      "#Result_home_1_": "1",
      "#Result_away_0_": "1",
      "#Result_away_1_": "1"
    },
    "Expect_draw": {
      totalAmount: 1,
      totalWin: 1,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
  },
  l2datasetTicket:{
    "Settle_Win": {
      "#Result_home_0_": "3",
      "#Result_home_1_": "4",
      "#Result_away_0_": "1",
      "#Result_away_1_": "2"
    },
    "Expect_Win": {
      "//*[@id='game-ticket']/table[1]/tbody/tr/td[3]/div/span/div": "Dice.png",
      "//*[@id='game-ticket']/table[1]/thead": "Header.png",
      "//*[@id='game-ticket']/table[2]/thead": "HeaderDetails.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": "l2WinLossWin.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "l2TotalWin.png"
    },
    "Settle_Lose": {
      "#Result_home_0_": "5",
      "#Result_home_1_": "5",
      "#Result_away_0_": "6",
      "#Result_away_1_": "6"
    },
    "Expect_Lose": {
      "//*[@id='game-ticket']/table[1]/tbody/tr/td[3]/div/span/div": "Dice2.png",
      "//*[@id='game-ticket']/table[1]/thead": "Header.png",
      "//*[@id='game-ticket']/table[2]/thead": "HeaderDetails.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": "l2WinLossLose.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "BetChoiceHome.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "l2TotalLose.png"
    },
  }
}

