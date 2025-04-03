import { Components } from "sc-automation-core";

export const TurboBigSmallConfigs: Components.GameConfiguration = {
  id: 4,
  name: "TXTurbo",
  durations: {
    wholeRound: 37 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 3 * 1000,
    shakeThePlateDuration: 3 * 1000,
  },
  choices: ["big", "small"],
  hedgeBetGroups: [["big", "small"]],
  maxTimeout: 200 * 1000, // miliseconds, should not over 2 * wholeRound
  odds: {
    big: 1.96,
    small: 1.96,
  },
  socketName: "turbobigsmall",
  betBoard: true,
  accounts: {
    local: "222224",
    local1: "222224",
    local2: "222224",
    local3: "222224",
    sit: "supertestsaba69",
    uat: "IT58Test789",
    prod: "supertestte120201006",
    l2uat: "TestSep2743",
    l2prod: "VNtest046",
  },
  productId: { l1: "1615", l2: 3805 },
};

export const AdminDataSet_local2 = {
  accountId: 222224,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='txturbo']",
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
      totalWin: 1.96,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null,
    },
    Settle_Win: {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    Settle_Lose: {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
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
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultWin.png",
      "//*[@id='game-ticket']/table[2]": "detailWin.png",
    },
    Settle_Lose: {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultLoss.png",
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
      totalWin: 1.96,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null,
    },
    Settle_Win: {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    Settle_Lose: {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
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
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultWin.png",
      "//*[@id='game-ticket']/table[2]": "detailWin.png",
    },
    Settle_Lose: {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultLoss.png",
      "//*[@id='game-ticket']/table[2]": "detailLoss.png",
    },
  },
};

export const AdminDataSet_uat = {
  accountId: 222224,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='txturbo']",
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
      totalWin: 1.96,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null,
    },
    Settle_Win: {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    Settle_Lose: {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
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
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultWin.png",
      "//*[@id='game-ticket']/table[2]": "detailWin.png",
    },
    Settle_Lose: {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultLoss.png",
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
      totalWin: 1.96,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null,
    },
    Settle_Win: {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    Settle_Lose: {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
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
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultWin.png",
      "//*[@id='game-ticket']/table[2]": "detailWin.png",
    },
    Settle_Lose: {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultLoss.png",
      "//*[@id='game-ticket']/table[2]": "detailLoss.png",
    },
  },
};
