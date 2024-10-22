import { Components } from "sc-automation-core";

export const Baccarat7Configs: Components.GameConfiguration = {
  id: 91,
  name: "bac91",
  durations: {
    wholeRound: 50 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 7 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: [    
   "player",
    "banker",
    "tie",
    "playerPair",
    "bankerPair",
    "natural"
  ],
  hedgeBetGroups: [["player", "banker"]],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    player: 2,
    banker: 1.95,
    playerPair: 12,
    bankerPair: 12,
    tie: 9
  },
  accounts: {
    local: "222263",
    local1: "222263",
    local2: "222263",
    local3: "222263",
    sit: "supertestsaba70",
    uat: "IT49Test789",
    prod: "supertestte120201008",
    l2uat: "TestSep2749",
    l2prod: "VNtest041",
  },
  productId:  { l1: "1689", l2: "3881" },
};

export const AdminDataSet_local ={
  accountId: 222263,
  l1datasetRER:{
    "expect_running": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "expect_archive": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "expect_win": {
      totalAmount: 1.2,
      totalWin: 2,
      validBetAmount: 1.2,
      errorCode: "0",
      errorDescription: null
    },
    "settle_win": {
      "#cards": "1s,8h,9h,8c,10h,10d,9h,8c,10h,10d,2d,2h,2s,2c,3s,3c",
      "#cutCardIndex": "300",
      "#cards0": "2d",
      "#multiplier0": "4",
      "#cards1": "2s",
      "#multiplier1": "2",
      "#cards2": "2h",
      "#multiplier2": "3",
      "#cards3": "4c",
      "#multiplier3": "6",
      "#cards4": "13s",
      "#multiplier4": "5",
      "#cards5": "6s",
      "#multiplier5": "7",
      "#cards6": "7s",
      "#multiplier6": "8",
      "#cards7": "8s",
      "#multiplier7": "9"
    },
    "expect_lose": {
      totalAmount: 1.2,
      totalWin: 0,
      validBetAmount: 1.2,
      errorCode: "0",
      errorDescription: null
    },
    "expect_multiple_choices": {
      totalAmount: 4.8,
      totalWin: 245,
      validBetAmount: 4.8,
      errorCode: "0",
      errorDescription: null
    },
  },
  l1datasetTicket:{
    "settle_win": {
      "#cards": "1s,8h,9h,8c,10h,10d,9h,8c,10h,10d,2d,2h,2s,2c,3s,3c",
      "#cutCardIndex": "300",
      "#cards0": "2d",
      "#multiplier0": "4",
      "#cards1": "2s",
      "#multiplier1": "2",
      "#cards2": "2h",
      "#multiplier2": "3",
      "#cards3": "4c",
      "#multiplier3": "6",
      "#cards4": "13s",
      "#multiplier4": "5",
      "#cards5": "6s",
      "#multiplier5": "7",
      "#cards6": "7s",
      "#multiplier6": "8",
      "#cards7": "8s",
      "#multiplier7": "9"
    },
    "expect_win": { "snapshot":{
      "//*[@id='game-ticket']/div": "TableName.png",
      "//*[@id='game-ticket']/table[1]/thead/tr": "RoundRessultHeader.png",
      "//*[@id='game-ticket']/table[3]/thead/tr": "BetDetailsHeader.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[1]/td[2]": "Player.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[2]": "TotalWin.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[3]": "WinLossWin.png"
    }},
    "expect_lose": { "snapshot":{
      "//*[@id='game-ticket']/table[3]/tbody/tr[1]/td[2]": "Banker.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[2]": "TotalLose.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[3]": "WinLossLose.png"
    }},
    "expect_multiple_choices": { "snapshot": {
      "//*[@id='game-ticket']/table[1]/tbody/tr/td[2]": "RoundResult.png",
      "//*[@id='game-ticket']/table[2]/tbody": "LuckyCards.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[1]/td[2]" : "BankerWin.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[2]/td[2]" : "Tie.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[3]/td[2]" : "BankerPair.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[4]/td[2]" : "PlayerPair.png"

    }},
}}

export const AdminDataSet_uat ={
  accountId: 44269329,
  l1datasetRER:{
    "expect_running": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "expect_archive": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "expect_win": {
      totalAmount: 1.2,
      totalWin: 2,
      validBetAmount: 1.2,
      errorCode: "0",
      errorDescription: null
    },
    "settle_win": {
      "#cards": "1s,8h,9h,8c,10h,10d,9h,8c,10h,10d,2d,2h,2s,2c,3s,3c",
      "#cutCardIndex": "300",
      "#cards0": "2d",
      "#multiplier0": "4",
      "#cards1": "2s",
      "#multiplier1": "2",
      "#cards2": "2h",
      "#multiplier2": "3",
      "#cards3": "4c",
      "#multiplier3": "6",
      "#cards4": "13s",
      "#multiplier4": "5",
      "#cards5": "6s",
      "#multiplier5": "7",
      "#cards6": "7s",
      "#multiplier6": "8",
      "#cards7": "8s",
      "#multiplier7": "9"
    },
    "expect_lose": {
      totalAmount: 1.2,
      totalWin: 0,
      validBetAmount: 1.2,
      errorCode: "0",
      errorDescription: null
    },
    "expect_multiple_choices": {
      totalAmount: 4.8,
      totalWin: 245,
      validBetAmount: 4.8,
      errorCode: "0",
      errorDescription: null
    },
  },
  l1datasetTicket:{
    "settle_win": {
      "#cards": "1s,8h,9h,8c,10h,10d,9h,8c,10h,10d,2d,2h,2s,2c,3s,3c",
      "#cutCardIndex": "300",
      "#cards0": "2d",
      "#multiplier0": "4",
      "#cards1": "2s",
      "#multiplier1": "2",
      "#cards2": "2h",
      "#multiplier2": "3",
      "#cards3": "4c",
      "#multiplier3": "6",
      "#cards4": "13s",
      "#multiplier4": "5",
      "#cards5": "6s",
      "#multiplier5": "7",
      "#cards6": "7s",
      "#multiplier6": "8",
      "#cards7": "8s",
      "#multiplier7": "9"
    },
    "expect_win": { "snapshot":{
      "//*[@id='game-ticket']/div": "TableName.png",
      "//*[@id='game-ticket']/table[1]/thead/tr": "RoundRessultHeader.png",
      "//*[@id='game-ticket']/table[3]/thead/tr": "BetDetailsHeader.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[1]/td[2]": "Player.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[2]": "TotalWin.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[3]": "WinLossWin.png"
    }},
    "expect_lose": { "snapshot":{
      "//*[@id='game-ticket']/table[3]/tbody/tr[1]/td[2]": "Banker.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[2]": "TotalLose.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[3]": "WinLossLose.png"
    }},
    "expect_multiple_choices": { "snapshot": {
      "//*[@id='game-ticket']/table[1]/tbody/tr/td[2]": "RoundResult.png",
      "//*[@id='game-ticket']/table[2]/tbody": "LuckyCards.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[1]/td[2]" : "BankerWin.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[2]/td[2]" : "Tie.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[3]/td[2]" : "BankerPair.png",
      "//*[@id='game-ticket']/table[3]/tbody/tr[4]/td[2]" : "PlayerPair.png"

    }},
}}
