import { Components } from "sc-automation-core";

export const generateConfig = (
  gamename: string,
  durations: any,
  choices: any
): Components.GameConfiguration => {
  return {
    id: 52,
    name: gamename,
    durations: durations,
    choices: choices,
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
    socketName: "minikeno",
    accounts: {
      local: "222242",
      local1: "222242",
      local2: "222242",
      local3: "222242",
      sit: "supertestsaba68",
      uat: "IT57Test789",
      prod: "supertestte120201006",
      l2uat: "TestSep2748",
      l2prod: "VNtest040",
    },
    productId: { l1: "3848", l2: 3848 },

  };
};

export const KenoConfigs: Components.GameConfiguration = generateConfig(
  "KenoSouth",
  {
    wholeRound: 58 * 1000,
    placingBets: 45 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 8 * 1000,
  },
  ["big", "small", "odd", "even", "gold", "wood", "water", "fire", "earth"]
);

export const AdminDataSet_local ={
  accountId: 222242,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='kenosouth']",
  isSettleNextRound: true,
  l2datasetRER:{
    "Expect_NoData": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
     "Expect_Win": {
      totalAmount: 10,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Lose": {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null
    }
  }, 
  l2datasetTicket:{
    "Settle_Win": {
      "//*/div[contains(@class,'keno-result_keno-result')]/div[1]": ["//*/div[text()='Big']/following::input[1]", "//*/div[text()='Fire']/following::input[1]", "//*/div[text()='Odd']/following::input[1]"],
    },
    "Expect_Win": { 
      "//*[@id='game-ticket']/table[2]": "detailWin.png",
    },
    "Settle_Lose": {
      "//*/div[contains(@class,'keno-result_keno-result')]/div[1]": ["//*/div[text()='Small']/following::input[1]", "//*/div[text()='Water']/following::input[1]", "//*/div[text()='Even']/following::input[1]"],
    },
    "Expect_Lose": { 
      "//*[@id='game-ticket']/table[2]": "detailLoss.png",
    }
  }
}
