import { Components } from "sc-automation-core";

export const RouletteConfigs: Components.GameConfiguration = {
  id: 21,
  name: "Roulette",
  durations: {
    wholeRound: 60 * 1000,
    placingBets: 45 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 9 * 1000,
  },
  choices: [
    "straightUp",
    "split",
    "street",
    "triangle",
    "corner",
    "fourNumbers",
    "line",
    "column",
    "dozen",
    "redBlack",
    "oddEven",
    "bigSmall",
  ],
  maxTimeout: 350 * 1000, // miliseconds,
  odds: {
    straightUp: 36,
    split: 18,
    street: 12,
    triangle: 12,
    corner: 9,
    dozen: 3,
    fourNumbers: 9,
    line: 6,
    column: 3,
    bigSmall: 2,
    oddEven: 2,
    redBlack: 2,
  },
  betBoard: true,
  accounts: {
    local: "222239",
    local1: "222239",
    local2: "222239",
    local3: "222239",
    sit: "supertestsaba69",
    uat: "IT56Test789",
    prod: "supertestte120201002",
    l2uat: "TestSep2749",
    l2prod: "VNtest050",
  },
  productId: { l1: "1632", l2: 3819 },
};

export const AdminDataSet_local2 = {
  accountId: 222239,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='roulette']",
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
      "//*/div[contains(@class,'styles_result')]":
        "//div[@class='modal-body']/div[1]/div[2]/div[2]",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "winResult.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png",
    },
    Settle_Lose: {
      "//*/div[contains(@class,'styles_result')]":
        "//div[@class='modal-body']/div[1]/div[2]/div[1]",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "lossResult.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png",
    },
  },
};
