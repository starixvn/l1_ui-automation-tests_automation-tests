import { Components } from "sc-automation-core";

class ILotteryConfigs extends Components.GameConfiguration {
  l2odds: any;
}

export const LotteryConfigs: ILotteryConfigs = {
  id: 31,
  name: "Lottery",
  durations: {
    wholeRound: 54 * 1000,
    placingBets: 45 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 4 * 1000,
  },
  choices: [
    "4Sets",
    "special",
    "head",
    "tail",
    "27Sets",
    "others",
    "occurrences",
  ],
  hedgeBetGroups: [["big", "small"]],
  maxTimeout: 300 * 1000, // miliseconds,
  odds: {
    "4Sets": 24,
    special: 90,
    head: 9,
    others: 1.96,
    tail: 9,
    "27Sets": 3.6,
    parlay2: 13,
    parlay3: 50,
    parlay4: 120,
  },
  l2odds: {
    "4Sets": 24,
    special: 90,
    head: 9,
    others: 1.96,
    tail: 9,
    "27Sets": 3.6,
  },
  betBoard: false,
  accounts: {
    local: "222248",
    local1: "222248",
    local2: "222248",
    local3: "222248",
    sit: "supertestsaba68",
    uat: "IT57Test789",
    prod: "supertestte120201002",
    l2uat: "TestSep2747",
    l2prod: "VNtest046",
  },
  productId: { l1: "1642", l2: 3830 },
};

export const AdminDataSet_local2 = {
  accountId: 222248,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='lottery']",
  isSettleNextRound: false,
  l2datasetRER: {
    Expect_NoData: {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist.",
    },
    Expect_Win: {
      totalAmount: 10,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null,
    },
    Expect_Lose: {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null,
    },
  },
  l2datasetTicket: {
    Expect_Win: {
      "//*[@id='game-ticket']/table[2]/tbody": "winDetail.png",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[2]/tbody": "lossDetail.png",
    },
  },
};
