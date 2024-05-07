import { Components } from "sc-automation-core";

export const LuckyNextConfigs: Components.GameConfiguration = {
  id: 1004,
  name: "luckynext2",
  durations: {
    wholeRound: 25,
    placingBets: 12,
    lockingBet: 3,
    shakeThePlateDuration: 10,
  },
  choices: ["over", "under","odd", "even", "drawId"],
  hedgeBetGroups: ["player", "banker"],
  maxTimeout: 150 * 1000, // miliseconds,
  odds: {
    player: 1.64,
    banker: 1.64,
    tie: 60,
  },
  accounts: {
    local: "222279",
    local1: "222279",
    local2: "222279",
    local3: "222279"
  },
  productId: { gn:10805 },
};

export const AdminDataSet_local ={
  settleDomain: process.env.npm_config_project+'-proxy',
  accountId: 222279,
  gndatasetRER:{
    "operatorId": "ONEworksVGCash",
    "runningRound": {
      totalAmount: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "archivedRound": {
      totalAmount: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "win_settle1": {
      "//input": "2",
    },
    "win_settle2": {
      "//input": "10",

    },
    "win_expect1": {
      totalAmount: 10,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null
    },
    "loose_settle1": {
      "//input": "42",
    },
    "loose_settle2": {
      "//input": "44"
    },
    "loose_expect1": {
      totalAmount: 10,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null
    },
    "loose_expect2": {
      totalAmount: 20,
      validBetAmount: 20,
      errorCode: "0",
      errorDescription: null
    },
  },
  gndatasetTicket:{
    "operatorId": "ONEworksVGCash",
    "win_settle1": {
      "//input": "2",
    },
    "win_settle2": {
      "//input": "10",

    },
    "win_expect1": {
    "snapshot":{
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "win_ballresult.png",
    }
  },
  "win_expect2": {
    "snapshot":{
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "win_ballresult.png",
    }
  },
  "loose_settle1": {
    "//input": "42",
  },
  "loose_settle2": {
    "//input": "44"
  },
  "loose_expect1": {
  "snapshot":{
    "//*[@id='game-ticket']/table[1]/tbody//td[3]": "loose_ballresult.png",
  }
},
"loose_multiple_choices_expect": {
  "snapshot":{
    "//*[@id='game-ticket']/table[1]/tbody//td[3]": "loose_mc_ballresult.png",
  }
},
}
}

