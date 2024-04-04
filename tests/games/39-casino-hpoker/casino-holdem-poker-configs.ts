import { Components } from "sc-automation-core";

export const CasinoHoldemPokerConfigs: Components.GameConfiguration = {
  id: 39,
  name: "CasinoHoldemPoker",
  durations: {
    wholeRound: 45 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 9 * 1000,
  },
  choices: ["ante", "aa"],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    CallBet_callBet: 2,
    AnteBet_highCards: 2,
    AnteBet_onePair: 2,
    AnteBet_twoPairs: 2,
    AABet_flush: 21,
    AABet_fourKind: 41,
    AABet_fullHouse: 31,
    AABet_pairAces: 8,
    AABet_royalFlush: 101,
    AABet_straight: 8,
    AABet_straightFlush: 51,
    AABet_threeKind: 8,
    AABet_twoPairs: 8,
    AnteBet_flush: 3,
    AnteBet_fourKind: 11,
    AnteBet_fullHouse: 4,
    AnteBet_royalFlush: 101,
    AnteBet_straight: 2,
    AnteBet_straightFlush: 21,
    AnteBet_threeKind: 2,
  },
  cardgame: true,
  accounts: {
    local: "222252",
    local1: "222252",
    local2: "222252",
    local3: "222252",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201006",
    l2uat: "TestSep2750",
    l2prod: "VNtest041",
  },
  productId: { l1: "1650", l2: 3836 },

};

export const AdminDataSet_local ={
  accountId: 222275,
  settlePath: "SetHoldemPokerResult",
  wsGameName: process.env.npm_config_project+'-proxy',
  datasetRER:{
    "TC1_expect": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1005",
      errorDescription: "Game round is running."
    },
    "TC2_expect": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "TC3_expect": {
      totalAmount: 3,
      totalWin: 6,
      validBetAmount: 3,
      errorCode: "0",
      errorDescription: null
    },
    "TC3_settle": `gameConfigName=casinoholdempoker&roundName=Banana73390&player%5B0%5D%5Brank%5D=9&player%5B0%5D%5Bsuit%5D=0&player%5B1%5D%5Brank%5D=10&player%5B1%5D%5Bsuit%5D=0&dealer%5B0%5D%5Brank%5D=2&dealer%5B0%5D%5Bsuit%5D=2&dealer%5B1%5D%5Brank%5D=3&dealer%5B1%5D%5Bsuit%5D=2&communityCards%5B0%5D%5Brank%5D=8&communityCards%5B0%5D%5Bsuit%5D=3&communityCards%5B1%5D%5Brank%5D=1&communityCards%5B1%5D%5Bsuit%5D=3&communityCards%5B2%5D%5Brank%5D=8&communityCards%5B2%5D%5Bsuit%5D=2&communityCards%5B3%5D%5Brank%5D=10&communityCards%5B3%5D%5Bsuit%5D=2&communityCards%5B4%5D%5Brank%5D=2&communityCards%5B4%5D%5Bsuit%5D=3`,
    "TC4_settle": `gameConfigName=casinoholdempoker&roundName=Banana73390&player%5B0%5D%5Brank%5D=2&player%5B0%5D%5Bsuit%5D=2&player%5B1%5D%5Brank%5D=3&player%5B1%5D%5Bsuit%5D=2&dealer%5B0%5D%5Brank%5D=9&dealer%5B0%5D%5Bsuit%5D=0&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=0&communityCards%5B0%5D%5Brank%5D=9&communityCards%5B0%5D%5Bsuit%5D=1&communityCards%5B1%5D%5Brank%5D=10&communityCards%5B1%5D%5Bsuit%5D=1&communityCards%5B2%5D%5Brank%5D=0&communityCards%5B2%5D%5Bsuit%5D=2&communityCards%5B3%5D%5Brank%5D=9&communityCards%5B3%5D%5Bsuit%5D=2&communityCards%5B4%5D%5Brank%5D=8&communityCards%5B4%5D%5Bsuit%5D=3`,
    "TC4_expect": {
      totalAmount: 3,
      totalWin: 0,
      validBetAmount: 3,
      errorCode: "0",
      errorDescription: null
    },
    "TC5_expect": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "TC6_settle":  `gameConfigName=casinoholdempoker&roundName=Banana73390&player%5B0%5D%5Brank%5D=9&player%5B0%5D%5Bsuit%5D=0&player%5B1%5D%5Brank%5D=10&player%5B1%5D%5Bsuit%5D=0&dealer%5B0%5D%5Brank%5D=2&dealer%5B0%5D%5Bsuit%5D=2&dealer%5B1%5D%5Brank%5D=3&dealer%5B1%5D%5Bsuit%5D=2&communityCards%5B0%5D%5Brank%5D=8&communityCards%5B0%5D%5Bsuit%5D=3&communityCards%5B1%5D%5Brank%5D=1&communityCards%5B1%5D%5Bsuit%5D=3&communityCards%5B2%5D%5Brank%5D=8&communityCards%5B2%5D%5Bsuit%5D=2&communityCards%5B3%5D%5Brank%5D=10&communityCards%5B3%5D%5Bsuit%5D=2&communityCards%5B4%5D%5Brank%5D=2&communityCards%5B4%5D%5Bsuit%5D=3`,
    "TC6_expect": {
      totalAmount: 4,
      totalWin: 6,
      validBetAmount: 4,
      errorCode: "0",
      errorDescription: null
    },
  }
}

export const AdminDataSet_uat ={
  tokenGameName: "",
  settlePath: "SetHoldemPokerResult",
  settleRequestType: "POST",
  wsGameName: process.env.npm_config_project+'-proxy',
  dataset:{
    "TC1_expect": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1005",
      errorDescription: "Game round is running."
    },
    "TC2_expect": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "TC3_expect": {
      totalAmount: 3,
      totalWin: 6,
      validBetAmount: 3,
      errorCode: "0",
      errorDescription: null
    },
    "TC3_settle": `gameConfigName=casinoholdempoker&roundName=Banana73390&player%5B0%5D%5Brank%5D=9&player%5B0%5D%5Bsuit%5D=0&player%5B1%5D%5Brank%5D=10&player%5B1%5D%5Bsuit%5D=0&dealer%5B0%5D%5Brank%5D=2&dealer%5B0%5D%5Bsuit%5D=2&dealer%5B1%5D%5Brank%5D=3&dealer%5B1%5D%5Bsuit%5D=2&communityCards%5B0%5D%5Brank%5D=8&communityCards%5B0%5D%5Bsuit%5D=3&communityCards%5B1%5D%5Brank%5D=1&communityCards%5B1%5D%5Bsuit%5D=3&communityCards%5B2%5D%5Brank%5D=8&communityCards%5B2%5D%5Bsuit%5D=2&communityCards%5B3%5D%5Brank%5D=10&communityCards%5B3%5D%5Bsuit%5D=2&communityCards%5B4%5D%5Brank%5D=2&communityCards%5B4%5D%5Bsuit%5D=3`,
    "TC4_settle": `gameConfigName=casinoholdempoker&roundName=Banana73390&player%5B0%5D%5Brank%5D=2&player%5B0%5D%5Bsuit%5D=2&player%5B1%5D%5Brank%5D=3&player%5B1%5D%5Bsuit%5D=2&dealer%5B0%5D%5Brank%5D=9&dealer%5B0%5D%5Bsuit%5D=0&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=0&communityCards%5B0%5D%5Brank%5D=9&communityCards%5B0%5D%5Bsuit%5D=1&communityCards%5B1%5D%5Brank%5D=10&communityCards%5B1%5D%5Bsuit%5D=1&communityCards%5B2%5D%5Brank%5D=0&communityCards%5B2%5D%5Bsuit%5D=2&communityCards%5B3%5D%5Brank%5D=9&communityCards%5B3%5D%5Bsuit%5D=2&communityCards%5B4%5D%5Brank%5D=8&communityCards%5B4%5D%5Bsuit%5D=3`,
    "TC4_expect": {
      totalAmount: 3,
      totalWin: 0,
      validBetAmount: 3,
      errorCode: "0",
      errorDescription: null
    },
    "TC5_expect": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "TC6_settle":  `gameConfigName=casinoholdempoker&roundName=Banana73390&player%5B0%5D%5Brank%5D=9&player%5B0%5D%5Bsuit%5D=0&player%5B1%5D%5Brank%5D=10&player%5B1%5D%5Bsuit%5D=0&dealer%5B0%5D%5Brank%5D=2&dealer%5B0%5D%5Bsuit%5D=2&dealer%5B1%5D%5Brank%5D=3&dealer%5B1%5D%5Bsuit%5D=2&communityCards%5B0%5D%5Brank%5D=8&communityCards%5B0%5D%5Bsuit%5D=3&communityCards%5B1%5D%5Brank%5D=1&communityCards%5B1%5D%5Bsuit%5D=3&communityCards%5B2%5D%5Brank%5D=8&communityCards%5B2%5D%5Bsuit%5D=2&communityCards%5B3%5D%5Brank%5D=10&communityCards%5B3%5D%5Bsuit%5D=2&communityCards%5B4%5D%5Brank%5D=2&communityCards%5B4%5D%5Bsuit%5D=3`,
    "TC6_expect": {
      totalAmount: 4,
      totalWin: 6,
      validBetAmount: 4,
      errorCode: "0",
      errorDescription: null
    },
  }
}