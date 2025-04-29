import { Components } from "sc-automation-core";

export const rocketXConfigs: Components.GameConfiguration = {
  id: 113,
  name: "rocketx",
  durations: {
    wholeRound: 14 * 1000,
    placingBets: 10 * 1000,
    lockingBet: 3 * 1000,
    shakeThePlateDuration: 1 * 1000,
  },
  choices: ["key0", "key1"],
  hedgeBetGroups: [["even", "odd"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: "",
  accounts: {
    local: "222277",
    local1: "222277",
    local2: "222277",
    l2local2: "222277",
    local3: "222277",
    prod: "supertestte120201003",
    l2uat: "TestSep2741",
    l2prod: "VNtest041",
    l1modirectprod: "supertestte120201003",
    l2creditmodirectprod: "SUPERTESTIBCAge0248",

  },
  productId: { l1: "1613", l2: 3803 },
};

export const AdminDataSet_local3 = {
  accountId: 222221,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[text()='RocketX']//following::td[1]/a",
  betBoard: false,
  l1datasetRER: {
    Expect_NoData: {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist.",
    },
    Expect_Win: {
      totalAmount: 10,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null,
    },
    Settle_Win: {
      "//input[@type='number']": "20",
    },
    Settle_Lose: {
      "//input[@type='number']": "1",

    },
    Expect_Lose: {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null,
    },
  },
  l1datasetTicket: {
    Settle_Win: {
      "//input[@type='number']": "20",

    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultWin.png",
      "//*[@id='game-ticket']/table[2]": "detailWin.png",
    },
    Settle_Lose: {
      "//input[@type='number']": "1",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultLoss.png",
      "//*[@id='game-ticket']/table[2]": "detailLoss.png",
    },
  },

};