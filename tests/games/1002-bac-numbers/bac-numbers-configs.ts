import { Components } from "sc-automation-core";

export const BacNumbersConfigs: Components.GameConfiguration = {
  id: 1002,
  name: "bacball2",
  durations: {
    wholeRound: 25,
    placingBets: 12,
    lockingBet: 3,
    shakeThePlateDuration: 10,
  },
  choices: ["player", "banker", "tie", "drawId"],
  hedgeBetGroups: ["player", "banker"],
  maxTimeout: 150 * 1000, // miliseconds,
  odds: {
    player: 1.64,
    banker: 1.64,
    tie: 60,
  },
  accounts: {
    local: "222276",
    local1: "222276",
    local2: "222276",
    local3: "222276",
  },
  productId: { gn: 10803 },
  isDraw: true,
};

export const AdminDataSet_local2 = {
  settleDomain: process.env.npm_config_project + "-proxy",
  settlePath: "SetSlotResult",
  accountId: 222276,
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
      "//div[text()='Player']/following::div[1]/input": "9",
      "//div[text()='Banker']/following::div[1]/input": "6",
    },
    win_settle2: {
      "//div[text()='Player']/following::div[1]/input": "7",
      "//div[text()='Banker']/following::div[1]/input": "1",
    },
    win_expect1: {
      totalAmount: 10,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null,
    },
    loose_settle1: {
      "//div[text()='Player']/following::div[1]/input": "2",
      "//div[text()='Banker']/following::div[1]/input": "6",
    },
    loose_settle2: {
      "//div[text()='Player']/following::div[1]/input": "5",
      "//div[text()='Banker']/following::div[1]/input": "8",
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
      "//div[text()='Player']/following::div[1]/input": "9",
      "//div[text()='Banker']/following::div[1]/input": "6",
    },
    win_settle2: {
      "//div[text()='Player']/following::div[1]/input": "7",
      "//div[text()='Banker']/following::div[1]/input": "1",
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
      "//div[text()='Player']/following::div[1]/input": "2",
      "//div[text()='Banker']/following::div[1]/input": "6",
    },
    loose_settle2: {
      "//div[text()='Player']/following::div[1]/input": "5",
      "//div[text()='Banker']/following::div[1]/input": "8",
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
