import { Components } from "sc-automation-core";

export const DragonTigerConfigs: Components.GameConfiguration = {
  id: 7,
  name: "dragontiger",
  durations: {
    wholeRound: 36 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 3 * 1000,
  },
  choices: ["dragon", "tiger", "tie"],
  hedgeBetGroups: [["dragon", "tiger"]],
  maxTimeout: 300 * 1000, // miliseconds,
  odds: {
    dragon: 2,
    tiger: 2,
    tie: 11,
  },
  betBoard: false,
  accounts: {
    local: "222227",
    local1: "222227",
    local2: "222227",
    local3: "222227",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201009",
    l2uat: "TestSep2745",
    l2prod: "VNtest040",
  },
  productId: { l1: "1618", l2: 3808 },
};

export const Isconfigs = {
  gameIndex: 4,
  clickCount: 4,
};

export const AdminDataSet_local2 = {
  accountId: 222227,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='dragontiger']",
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
      totalWin: 1.96,
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
      "//div[contains(@class,'dragon-tiger-result_dragonCol')]":
        "//div[@class='modal-body']/div[1]/div[10]",
      "//div[contains(@class,'dragon-tiger-result_tigerCol')]":
        "//div[@class='modal-body']/div[1]/div[2]",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultWin.png",
      "//*[@id='game-ticket']/table[2]": "detailWin.png",
    },
    Settle_Lose: {
      "//div[contains(@class,'dragon-tiger-result_dragonCol')]":
        "//div[@class='modal-body']/div[1]/div[2]",
      "//div[contains(@class,'dragon-tiger-result_tigerCol')]":
        "//div[@class='modal-body']/div[1]/div[10]",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultLoss.png",
      "//*[@id='game-ticket']/table[2]": "detailLoss.png",
    },
  },
};
