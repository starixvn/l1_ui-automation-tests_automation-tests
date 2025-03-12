import { Components } from "sc-automation-core";

export const ThreeCardsConfigs: Components.GameConfiguration = {
  id: 35,
  name: "threecards",
  durations: {
    wholeRound: 39 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 4 * 1000,
  },
  choices: ["red", "black", "diamonds", "hearts", "spades", "clubs"],
  hedgeBetGroups: [["red", "black"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    red: 1.96,
    black: 1.96,
    diamonds: 1.68,
    hearts: 1.68,
    spades: 1.68,
    clubs: 1.68,
  },
  betBoard: false,
  accounts: {
    local: "222264",
    local1: "222264",
    local2: "222264",
    local3: "222264",
    sit: "supertestsaba70",
    uat: "IT55Test789",
    prod: "supertestte120201003",
    l2uat: "TestSep2749",
    l2prod: "VNtest050",
  },
  productId: { l1: "1643", l2: 3831 },
};

export const AdminDataSet_local2 = {
  accountId: 222264,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='threecards']",
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
    Settle_Win: {
      "//div[contains(@class,'styles_result')]/div[1]":
        "//*/div[contains(@class,'modal-body')]/div[1]/div[1]",
      "//div[contains(@class,'styles_result')]/div[2]":
        "//*/div[contains(@class,'modal-body')]/div[1]/div[2]",
      "//div[contains(@class,'styles_result')]/div[3]":
        "//*/div[contains(@class,'modal-body')]/div[1]/div[3]",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "winResult.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png",
    },
    Settle_Lose: {
      "//div[contains(@class,'styles_result')]/div[1]":
        "//*/div[contains(@class,'modal-body')]/div[3]/div[1]",
      "//div[contains(@class,'styles_result')]/div[2]":
        "//*/div[contains(@class,'modal-body')]/div[3]/div[2]",
      "//div[contains(@class,'styles_result')]/div[3]":
        "//*/div[contains(@class,'modal-body')]/div[3]/div[3]",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "lossResult.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png",
    },
  },
};
