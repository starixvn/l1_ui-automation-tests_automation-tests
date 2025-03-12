import { Components } from "sc-automation-core";

export const luckythreeConfigs: Components.GameConfiguration = {
  id: 1006,
  name: "luckythree",
  durations: {
    wholeRound: 30,
    placingBets: 12,
    lockingBet: 3,
    shakeThePlateDuration: 10,
  },
  choices: ["over", "under", "red2", "red3", "blue2", "blue3", "drawId"],
  hedgeBetGroups: ["over", "under"],
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
    local: "222281",
    local1: "222281",
    local2: "222281",
    local3: "222281",
  },
  productId: { gn: 10807 },
};

export const AdminDataSet_local2 = {
  settleDomain: process.env.npm_config_project + "-proxy",
  accountId: 222281,
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
