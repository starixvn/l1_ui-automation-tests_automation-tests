import { Components } from "sc-automation-core";

export const sicballConfigs: Components.GameConfiguration = {
  id: 1007,
  name: "sicball",
  durations: {
    wholeRound: 30,
    placingBets: 12,
    lockingBet: 3,
    shakeThePlateDuration: 10,
  },
  choices: [
    "specific1",
    "big",
    "small",
    "specific2",
    "specific3",
    "specific4",
    "specific5",
    "specific6",
    "drawId",
  ],
  hedgeBetGroups: ["big", "small"],
  maxTimeout: 300 * 1000, // miliseconds,
  odds: {},
  accounts: {AdminDataSet_local2222222
    local: "222282",
    local1: "222282",
    local2: "222282",
    local3: "222282",
  },
  productId: { gn: 10808 },
};

export const AdminDataSet_local2 = {
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
