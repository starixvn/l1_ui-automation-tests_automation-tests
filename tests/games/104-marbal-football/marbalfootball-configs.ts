import { Components } from "sc-automation-core";

export const MarbalFootBallConfigs: Components.GameConfiguration = {
  id: 104,
  name: "marblefootball",
  durations: {
    wholeRound: 150 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 8 * 1000,
    shakeThePlateDuration: 10 * 1000,
  },
  choices: ["home", "away", "draw", "draw4","over", "under", "odd", "even"], 
  hedgeBetGroups: [["over", "under"]],
  maxTimeout: 350 * 1000, // miliseconds x,
  odds: {
    home: 2.4,
    away: 2.4,
    draw: 3.5,
    draw4: 50,
    over: 1.96,
    under: 1.96,
    odd: 1.95,
    even: 1.95,
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
  productId: { l1: "13213", l2: 13506 },
};

export const AdminDataSet_local2 = {
  accountId: 222221,
  l1datasetRER: {
    expect_running: {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist.",
    },
    expect_archive: {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist.",
    },
    expect_win: {
      totalAmount: 1,
      totalWin: 6,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null,
    },
    settle_win: {
      "//input[@name='dice1']": "5",
      "//input[@name='dice2']": "6",
    },
    expect_lose: {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null,
    },
    settle_lose: {
      "//input[@name='dice1']": "5",
      "//input[@name='dice2']": "6",
    },
  },
  l1datasetTicket: {
    settle_win: {
      "//input[@name='dice1']": "5",
      "//input[@name='dice2']": "5",
    },
    expect_win: {
      snapshot: {
        "//*[@id='game-ticket']/table[1]/tbody/tr/td[3]/div/span/div":
          "Biden.png",
        "//*[@id='game-ticket']/table[1]/thead": "Header.png",
        "//*[@id='game-ticket']/table[3]/thead": "HeaderDetails.png",
        "//*[@id='game-ticket']/table[2]": "MultiplierValue5xUp.png",
        "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "TotalWin.png",
      },
    },
    settle_lose: {
      "//*[@id='__next']/div/div[4]/div/input": true,
    },
    expect_lose: {
      snapshot: {
        "//*[@id='game-ticket']/table[3]/tbody/tr[3]": "WinLossLose.png",
        "//*[@id='game-ticket']/table[3]/tbody/tr[2]": "TotalLose.png",
      },
    },
    settle_lose_multiple_choices: {
      "#Result_home_0_": "5",
      "#Result_home_1_": "5",
      "#Result_away_0_": "6",
      "#Result_away_1_": "6",
    },
    expect_multiple_choices: {
      snapshot: {
        "//*[@id='game-ticket']/table[2]/tbody/tr[3]": `Total2.png`,
        "//*[@id='game-ticket']/table[2]/tbody/tr[4]": "WinLossLose.png",
      },
    },
    settle_draw: {
      "#Result_home_0_": "1",
      "#Result_home_1_": "1",
      "#Result_away_0_": "1",
      "#Result_away_1_": "1",
    },
    expect_draw: {
      snapshot: {
        "//*[@id='game-ticket']/table[2]/tbody/tr[3]/td[2]": "WinLossDraw.png",
      },
    },
  },
};

