import { Components } from "sc-automation-core";

export const CoinTossConfigs: Components.GameConfiguration = {
  id: 80,
  name: "CoinToss",
  durations: {
    wholeRound: 61 * 1000,
    placingBets: 50 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: ["head", "tail"], // head = biden, tail = trump
  hedgeBetGroups: [["head", "tail"]],
  maxTimeout: 250 * 1000, // miliseconds x,
  odds: {
    head: 1.98,
    tail: 1.98,
  },
  betBoard: false,
  accounts: {
    local: "222221",
    local1: "222221",
    local2: "222221",
    local3: "222221",
    sit: "supertestsaba66",
    uat: "IT55Test789",
    prod: "supertestte120201002",
    l2uat: "TestSep2740",
    l2prod: "VNtest040",
  },
  productId: { l1: "1687", l2: 3879 },
};

export const AdminDataSet_local3 ={
  accountId: 222221,
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
      totalAmount: 1,
      totalWin: 1.96,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "settle_win": {
      "//*[@id='__next']/div/div[3]/div/input": true
    },
    "expect_lose": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "settle_lose": {
      "//*[@id='__next']/div/div[3]/div/input": true
    }
  },
  l1datasetTicket:{
    "settle_win": {
      "//*[@id='__next']/div/div[3]/div/input": true
    },
    "expect_win": { "snapshot":{
      "//*[@id='game-ticket']/table[1]/tbody/tr/td[3]/div/span/div": "Biden.png",
      "//*[@id='game-ticket']/table[1]/thead": "Header.png",
      "//*[@id='game-ticket']/table[2]/thead": "HeaderDetails.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": "WinLossWin.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "Total.png"
    }},
    "settle_lose": {
      "//*[@id='__next']/div/div[4]/div/input": true
    },
    "expect_lose": { "snapshot":{
      "//*[@id='game-ticket']/table[1]/tbody/tr/td[3]/div/span/div": "Trump.png",
      "//*[@id='game-ticket']/table[1]/thead": "Header.png",
      "//*[@id='game-ticket']/table[2]/thead": "HeaderDetails.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": "WinLossLose.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "Total.png"
    }},
    "settle_lose_multiple_choices": {
      "#Result_home_0_": "5",
      "#Result_home_1_": "5",
      "#Result_away_0_": "6",
      "#Result_away_1_": "6"
    },  
    "expect_multiple_choices": { "snapshot":{
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": `Total2.png`,
      "//*[@id='game-ticket']/table[2]/tbody/tr[4]": "WinLossLose.png",
    }},
    "settle_draw": {
      "#Result_home_0_": "1",
      "#Result_home_1_": "1",
      "#Result_away_0_": "1",
      "#Result_away_1_": "1",
    },
    "expect_draw": { "snapshot":{
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]/td[2]": "WinLossDraw.png"
    },
  }
}}

export const Isconfigs = {
  gameIndex: 10,
  clickCount: 10,
};
