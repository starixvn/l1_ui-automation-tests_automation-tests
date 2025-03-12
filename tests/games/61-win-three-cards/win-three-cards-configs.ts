import { Components } from "sc-automation-core";

export const winthreecardsConfigs: Components.GameConfiguration = {
  id: 61,
  name: "WinThreeCards",
  durations: {
    wholeRound: 45 * 1000,
    placingBets: 25 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 15 * 1000,
  },
  choices: [
    "dragon",
    "phoenix",
    "tie",
    "threeOfAKind",
    "straightFlush",
    "flush",
    "straight",
    "pair",
    "pair8Plus",
    "highCard",
    "killer235",
  ],
  hedgeBetGroups: [["dragon", "phoenix"]],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    dragon: 1.96,
    phoenix: 1.96,
    pair8Plus: 3,
    straight: 8,
    flush: 9,
    straightFlush: 101,
    threeOfAKind: 121,
  },
  accounts: {
    local: "222230",
    local1: "222230",
    local2: "222230",
    local3: "222230",
    sit: "supertestsaba70",
    uat: "IT56Test789",
    prod: "supertestte120201011",
    l2uat: "TestSep2740",
    l2prod: "VNtest046",
  },
  productId: { l1: "1668", l2: 3860 },
};

export const AdminDataSet_local2 = {
  accountId: 222230,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='winthreecards']",
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
      "//input[@value='Set Result']":
        "//div[text()='Dragon']/following::div[1]/input",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "winResult.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png",
    },
    Settle_Lose: {
      "//input[@value='Set Result']":
        "//div[text()='Phoenix']/following::div[1]/input",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "lossResult.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png",
    },
  },
};
