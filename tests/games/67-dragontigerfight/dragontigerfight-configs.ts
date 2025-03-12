import { Components } from "sc-automation-core";

export const DragonTigerConfigs: Components.GameConfiguration = {
  id: 67,
  name: "dragontigerfight",
  durations: {
    wholeRound: 45 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: [
    "dragon",
    "tiger",
    "tie",
    "blackDragon",
    "redDragon",
    "blackTiger",
    "redTiger",
  ],
  hedgeBetGroups: [["dragon", "tiger"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    dragon: 2,
    tiger: 2,
    tie: 11,
    redDragon: 1.96,
    blackDragon: 1.96,
    redTiger: 1.96,
    blackTiger: 1.96,
  },
  betBoard: false,
  accounts: {
    local: "222227",
    local1: "222227",
    local2: "222227",
    local3: "222227",
    sit: "supertestsaba67",
    uat: "IT58Test789",
    prod: "supertestte120201006",
    l2uat: "TestSep2746",
    l2prod: "VNtest050",
  },
  productId: { l1: "1676", l2: 3868 },
  rebet: true,
};

export const AdminDataSet_local2 = {
  accountId: 222227,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='dragontigerfight']",
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
      "//div[contains(@class,'dragontigerresult')]/div[1]/div[2]":
        "//*/div[contains(@class,'modal-body')]/div[1]/div[5]",
      "//div[contains(@class,'dragontigerresult')]/div[3]/div[2]":
        "//*/div[contains(@class,'modal-body')]/div[1]/div[2]",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "winResult.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png",
    },
    Settle_Lose: {
      "//div[contains(@class,'dragontigerresult')]/div[1]/div[2]":
        "//*/div[contains(@class,'modal-body')]/div[1]/div[3]",
      "//div[contains(@class,'dragontigerresult')]/div[3]/div[2]":
        "//*/div[contains(@class,'modal-body')]/div[1]/div[6]",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "lossResult.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png",
    },
  },
};
