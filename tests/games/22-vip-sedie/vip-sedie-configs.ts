import { Components } from "sc-automation-core";

export const VipSedieConfigs: Components.GameConfiguration = {
  id: 22,
  name: "VipSeDie",
  durations: {
    wholeRound: 39 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 2 * 1000,
  },
  choices: ["odd", "even", "red2", "red3", "red4", "white3", "white4"],
  hedgeBetGroups: [["even", "odd"]],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    even: 1.96,
    odd: 1.96,
    red2: 2.4,
    red3: 3.75,
    red4: 14.4,
    white3: 3.75,
    white4: 14.4,
  },
  socketName: "vsedie",
  accounts: {
    local: "222240",
    local1: "222240",
    local2: "222240",
    local3: "222240",
    sit: "supertestsaba70",
    uat: "IT57Test789",
    prod: "supertestte120201003",
    l2uat: "TestSep2750",
    l2prod: "VNtest040",
  },
  productId: { l1: "1633", l2: 3824 },
};

export const AdminDataSet_uat = {
  accountId: 222240,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='vipsedie']",
  isSettleNextRound: true,
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
  l1datasetTicket: {
    Settle_Win: {
      "//*/div[contains(@class,'vip-sedie_result')]/div[1]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[2]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[3]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[4]":
        "//*/div[@class='modal-content']//div[2]/img",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "winResult.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "winChoices.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png",
    },
    Settle_Lose: {
      "//*/div[contains(@class,'vip-sedie_result')]/div[1]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[2]":
        "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[3]":
        "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[4]":
        "//*/div[@class='modal-content']//div[1]/img",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "lossResult.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "lossChoices.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png",
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
      totalAmount: 50,
      validBetAmount: 50,
      errorCode: "0",
      errorDescription: null,
    },
    Expect_Lose: {
      totalAmount: 50,
      totalWin: 0,
      validBetAmount: 50,
      errorCode: "0",
      errorDescription: null,
    },
  },
  l2datasetTicket: {
    Settle_Win: {
      "//*/div[contains(@class,'vip-sedie_result')]/div[1]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[2]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[3]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[4]":
        "//*/div[@class='modal-content']//div[2]/img",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "winResult.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "winChoices.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png",
    },
    Settle_Lose: {
      "//*/div[contains(@class,'vip-sedie_result')]/div[1]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[2]":
        "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[3]":
        "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[4]":
        "//*/div[@class='modal-content']//div[1]/img",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "lossResult.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "lossChoices.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png",
    },
  },
};

export const AdminDataSet_local2 = {
  accountId: 222240,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='vipsedie']",
  isSettleNextRound: true,
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
  l1datasetTicket: {
    Settle_Win: {
      "//*/div[contains(@class,'vip-sedie_result')]/div[1]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[2]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[3]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[4]":
        "//*/div[@class='modal-content']//div[2]/img",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "winResult.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "winChoices.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png",
    },
    Settle_Lose: {
      "//*/div[contains(@class,'vip-sedie_result')]/div[1]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[2]":
        "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[3]":
        "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[4]":
        "//*/div[@class='modal-content']//div[1]/img",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "lossResult.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "lossChoices.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png",
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
      totalAmount: 50,
      validBetAmount: 50,
      errorCode: "0",
      errorDescription: null,
    },
    Expect_Lose: {
      totalAmount: 50,
      totalWin: 0,
      validBetAmount: 50,
      errorCode: "0",
      errorDescription: null,
    },
  },
  l2datasetTicket: {
    Settle_Win: {
      "//*/div[contains(@class,'vip-sedie_result')]/div[1]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[2]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[3]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[4]":
        "//*/div[@class='modal-content']//div[2]/img",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "winResult.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "winChoices.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png",
    },
    Settle_Lose: {
      "//*/div[contains(@class,'vip-sedie_result')]/div[1]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[2]":
        "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[3]":
        "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'vip-sedie_result')]/div[4]":
        "//*/div[@class='modal-content']//div[1]/img",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "lossResult.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "lossChoices.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png",
    },
  },
};
