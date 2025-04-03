import { Components } from "sc-automation-core";

export const KenoProMaxConfigs: Components.GameConfiguration = {
  id: 8,
  name: "kenopromax",
  durations: {
    wholeRound: 39 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 4 * 1000,
  },
  choices: [
    "big",
    "small",
    "odd",
    "even",
    "gold",
    "wood",
    "water",
    "fire",
    "earth",
  ],
  hedgeBetGroups: [["big", "small"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    big: 1.96,
    small: 1.96,
    even: 1.96,
    odd: 1.96,
    earth: 9.2,
    fire: 4.6,
    gold: 9.2,
    water: 2.4,
    wood: 4.6,
  },
  betBoard: false,
  accounts: {
    local: "222228",
    local1: "222228",
    local2: "222228",
    local3: "222228",
    sit: "supertestsaba68",
    uat: "IT57Test789",
    prod: "supertestte120201011",
    l2uat: "TestSep2746",
    l2prod: "VNtest041",
  },
  productId: { l1: "1619", l2: 3809 },
};

export const AdminDataSet_uat = {
  accountId: 222228,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='kenopromax']",

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
    Expect_Lose: {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null,
    },
  },
  l1datasetTicket: {
    Settle_Win: {
      "//*/div[contains(@class,'keno-result_keno-result')]/div[1]": [
        "//*/div[text()='Small']/following::input[1]",
        "//*/div[text()='Fire']/following::input[1]",
        "//*/div[text()='Odd']/following::input[1]",
      ],
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[2]": "detailWin.png",
    },
    Settle_Lose: {
      "//*/div[contains(@class,'keno-result_keno-result')]/div[1]": [
        "//*/div[text()='Big']/following::input[1]",
        "//*/div[text()='Fire']/following::input[1]",
        "//*/div[text()='Odd']/following::input[1]",
      ],
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[2]": "detailLoss.png",
    },
  },
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
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null,
    },
    Expect_Lose: {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null,
    },
  },
  l2datasetTicket: {
    Settle_Win: {
      "//*/div[contains(@class,'keno-result_keno-result')]/div[1]": [
        "//*/div[text()='Small']/following::input[1]",
        "//*/div[text()='Fire']/following::input[1]",
        "//*/div[text()='Odd']/following::input[1]",
      ],
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[2]": "detailWin.png",
    },
    Settle_Lose: {
      "//*/div[contains(@class,'keno-result_keno-result')]/div[1]": [
        "//*/div[text()='Big']/following::input[1]",
        "//*/div[text()='Fire']/following::input[1]",
        "//*/div[text()='Odd']/following::input[1]",
      ],
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[2]": "detailLoss.png",
    },
  },
};

export const AdminDataSet_local2 = {
  accountId: 222228,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='kenopromax']",

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
    Expect_Lose: {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null,
    },
  },
  l1datasetTicket: {
    Settle_Win: {
      "//*/div[contains(@class,'keno-result_keno-result')]/div[1]": [
        "//*/div[text()='Small']/following::input[1]",
        "//*/div[text()='Fire']/following::input[1]",
        "//*/div[text()='Odd']/following::input[1]",
      ],
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[2]": "detailWin.png",
    },
    Settle_Lose: {
      "//*/div[contains(@class,'keno-result_keno-result')]/div[1]": [
        "//*/div[text()='Big']/following::input[1]",
        "//*/div[text()='Fire']/following::input[1]",
        "//*/div[text()='Odd']/following::input[1]",
      ],
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[2]": "detailLoss.png",
    },
  },
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
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null,
    },
    Expect_Lose: {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null,
    },
  },
  l2datasetTicket: {
    Settle_Win: {
      "//*/div[contains(@class,'keno-result_keno-result')]/div[1]": [
        "//*/div[text()='Small']/following::input[1]",
        "//*/div[text()='Fire']/following::input[1]",
        "//*/div[text()='Odd']/following::input[1]",
      ],
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[2]": "detailWin.png",
    },
    Settle_Lose: {
      "//*/div[contains(@class,'keno-result_keno-result')]/div[1]": [
        "//*/div[text()='Big']/following::input[1]",
        "//*/div[text()='Fire']/following::input[1]",
        "//*/div[text()='Odd']/following::input[1]",
      ],
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[2]": "detailLoss.png",
    },
  },
};