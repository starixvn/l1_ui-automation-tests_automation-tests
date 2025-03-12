import { Components } from "sc-automation-core";

export const ColorGameConfigs: Components.GameConfiguration = {
  id: 71,
  name: "ColorGame",
  durations: {
    wholeRound: 37 * 1000,
    placingBets: 25 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 3 * 1000,
  },
  choices: ["cold", "hot", "yellow", "red", "white", "green", "pink", "blue"],
  hedgeBetGroups: [["hot", "cold"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    single: 2,
    double: 3.5,
    triple: 6,
    hot: 1.96,
    cold: 1.96,
  },
  betBoard: false,
  accounts: {
    local: "222276",
    local1: "222276",
    local2: "222276",
    local3: "222276",
    sit: "supertestsaba71",
    uat: "IT58Test789",
    prod: "supertestte120201012",
    l2uat: "TestSep2750",
    l2prod: "VNtest046",
  },
  productId: { l1: "1678", l2: 3870 },
  rebet: true,
};

export const Isconfigs = {
  gameIndex: 9,
  clickCount: 9,
};

export const AdminDataSet_local2 = {
  accountId: 222276,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='colorgame']",
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
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultWin.png",
      "//*[@id='game-ticket']/table[2]": "detailWin.png",
    },
    Settle_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultLoss.png",
      "//*[@id='game-ticket']/table[2]": "detailLoss.png",
    },
  },
  Expect_Lose: {
    "#dice-0": "//div[@class='modal-content']/div/div[4]",
    "#dice-1": "//div[@class='modal-content']/div/div[5]",
    "#dice-2": "//div[@class='modal-content']/div/div[6]",
  },
};
