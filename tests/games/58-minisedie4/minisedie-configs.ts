import { Components } from "sc-automation-core";

export const MiniSedie1Configs: Components.GameConfiguration = {
  id: 9,
  name: "MiniSeDie",
  durations: {
    wholeRound: 38 * 1000,
    placingBets: 28 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: ["odd", "even", "red3", "red4", "white3", "white4"],
  hedgeBetGroups: [["even", "odd"]],
  maxTimeout: 300 * 1000, // miliseconds,
  odds: {
    even: 1.96,
    odd: 1.96,
    red3: 3.75,
    white3: 3.75,
    red4: 14.4,
    white4: 14.4,
  },
  socketName: "minisedie",
  accounts: {
    local: "222269",
    local1: "222269",
    local2: "222269",
    local3: "222269",
    sit: "supertestsaba69",
    uat: "IT58Test789",
    prod: "supertestte120201012",
    l2uat: "TestSep2747",
    l2prod: "VNtest044",
  },
  productId: { l1: "1620", l2: 3823 },
};

export const MiniSedie2Configs: Components.GameConfiguration = {
  id: 9,
  name: "minisedie2",
  socketName: "minisedie",
  durations: {
    wholeRound: 38 * 1000,
    placingBets: 28 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: ["odd", "even"],
  hedgeBetGroups: [["even", "odd"]],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    even: 1.96,
    odd: 1.96,
    red3: 3.75,
    white3: 3.75,
    red4: 14.4,
    white4: 14.4,
  },
  accounts: {
    local: "222269",
    local1: "222269",
    local2: "222269",
    local3: "222269",
    sit: "supertestsaba69",
    uat: "IT58Test789",
    prod: "supertestte120201012",
  },
  productId: { l1: "1620", l2: 3823 },
};

export const MiniSedie3Configs: Components.GameConfiguration = {
  id: 9,
  name: "MiniSeDie3",
  socketName: "minisedie",
  durations: {
    wholeRound: 38 * 1000,
    placingBets: 35 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: ["odd", "even"],
  hedgeBetGroups: [["even", "odd"]],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    even: 1.96,
    odd: 1.96,
    red3: 14.4,
    white3: 14.4,
    red4: 3.75,
    white4: 3.75,
  },
  accounts: {
    local: "222269",
    local1: "222269",
    local2: "222269",
    local3: "222269",
    sit: "supertestsaba69",
    uat: "IT58Test789",
    prod: "supertestte120201012",
  },
  productId: { l1: "1620", l2: 3823 },
};

export const MiniSedie4Configs: Components.GameConfiguration = {
  id: 9,
  name: "MiniSeDie4",
  socketName: "minisedie",
  durations: {
    wholeRound: 38 * 1000,
    placingBets: 35 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: ["odd", "even"],
  hedgeBetGroups: [["even", "odd"]],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    even: 1.96,
    odd: 1.96,
    red3: 14.4,
    white3: 14.4,
    red4: 3.75,
    white4: 3.75,
  },
  accounts: {
    local: "222269",
    local1: "222269",
    local2: "222269",
    local3: "222269",
    sit: "supertestsaba69",
    uat: "IT58Test789",
    prod: "supertestte120201012",
  },
  productId: { l1: "1620", l2: 3823 },
};

export const AdminDataSet_local2 = {
  accountId: 222269,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='minisedie2']",
  isSettleNextRound: true,
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
      totalWin: 19.6,
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
    Settle_Win: {
      "//*/div[contains(@class,'mini-sedie_result')]/div[1]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'mini-sedie_result')]/div[2]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'mini-sedie_result')]/div[3]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'mini-sedie_result')]/div[4]":
        "//*/div[@class='modal-content']//div[2]/img",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultWin.png",
      "//*[@id='game-ticket']/table[2]": "detailWin.png",
    },
    Settle_Lose: {
      "//*/div[contains(@class,'mini-sedie_result')]/div[1]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'mini-sedie_result')]/div[2]":
        "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'mini-sedie_result')]/div[3]":
        "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'mini-sedie_result')]/div[4]":
        "//*/div[@class='modal-content']//div[1]/img",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultLoss.png",
      "//*[@id='game-ticket']/table[2]": "detailLoss.png",
    },
  },
};
