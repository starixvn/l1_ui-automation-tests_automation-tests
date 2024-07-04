import { Components } from "sc-automation-core";

export const seballConfigs: Components.GameConfiguration = {
  id: 1005,
  name: "seball1",
  durations: {
    wholeRound: 30,
    placingBets: 12,
    lockingBet: 3,
    shakeThePlateDuration: 10,
  },
  choices: ["odd", "even", "red2", "red3", "red4", "blue3", "blue4","drawId"],
  hedgeBetGroups: ["odd", "even"],
  maxTimeout: 250 * 1000, // miliseconds,
  odds: {
    odd: 1.96,
    even: 1.96,
    red2: 2.53,
    red3: 3.75,
    red4: 14.4,
    blue3: 3.75,
    blue4: 14.4,
  },
  accounts: {
    local: "222280",
    local1: "222280",
    local2: "222280",
    local3: "222280",
  },
  productId: { gn: 10806 },
};

export const AdminDataSet_local = {
  settleDomain: process.env.npm_config_project + "-proxy",
  accountId: 222280,
  gndatasetRER: {
    operatorId: "ONEworksVGCash",
    runningRound: {
      totalAmount: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist.",
    },
    archivedRound: {
      totalAmount: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist.",
    },
    win_settle1: {
      "//input": "2,11,4,8",
    },
    win_settle2: {
      "//input": "3,12,25,7",
    },
    win_expect1: {
      totalAmount: 10,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null,
    },
    loose_settle1: {
      "//input": "3,6,9,4",
    },
    loose_settle2: {
      "//input": "11,21,31,5",
    },
    loose_expect1: {
      totalAmount: 10,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null,
    },
    loose_expect2: {
      totalAmount: 20,
      validBetAmount: 20,
      errorCode: "0",
      errorDescription: null,
    },
  },
  gndatasetTicket: {
    operatorId: "ONEworksVGCash",
    win_settle1: {
      "//input": "2,11,4,8",
    },
    win_settle2: {
      "//input": "3,12,25,7",
    },
    win_expect1: {
      snapshot: {
        "//*[@id='game-ticket']/table[1]/tbody//td[3]": "win_ballresult.png",
      },
    },
    win_expect2: {
      snapshot: {
        "//*[@id='game-ticket']/table[1]/tbody//td[3]": "win_ballresult.png",
      },
    },
    loose_settle1: {
      "//input": "3,6,9,4",
    },
    loose_settle2: {
      "//input": "11,21,31,5",
    },
    loose_expect1: {
      snapshot: {
        "//*[@id='game-ticket']/table[1]/tbody//td[3]": "loose_ballresult.png",
      },
    },
    loose_multiple_choices_expect: {
      snapshot: {
        "//*[@id='game-ticket']/table[1]/tbody//td[3]":
          "loose_mc_ballresult.png",
      },
    },
  },
};
