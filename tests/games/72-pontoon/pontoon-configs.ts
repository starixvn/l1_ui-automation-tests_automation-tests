import { Components } from "sc-automation-core";

export const pontoonConfigs: Components.GameConfiguration = {
  id: 72,
  name: "pontoon",
  durations: {
    wholeRound: 45 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 9 * 1000,
  },
  choices: ["1", "2", "3"],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    fiveCardTrick: 3,
    regular: 2,
    pontoon: 3,
  },
  cardgame: true,
  accounts: {
    local: "222241",
    local1: "222241",
    local2: "222241",
    local3: "222241",
    sit: "supertestsaba66",
    l2sit: "SIT_test_INH_017",
    uat: "IT55Test789",
    prod: "supertestte120201013",
    l2uat: "TestSep2740",
    l2prod: "VNtest050",
  },
  productId: { l1: "1679", l2: 3871 },
};

export const AdminDataSet_local ={
  accountId: 222241,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*/td[text()='Pontoon']//following::a[1]",
  isSettleNextRound: true,
  l2datasetRER:{
    "Expect_NoData": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "Expect_Running": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1005",
      errorDescription: "Game round is running."
    },
    "Expect_Win": {
      totalAmount: 10,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Lose": {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null
    },
  },
  l2datasetTicket:{
    "Settle_Win": {
      nickname: {locator: "#nickname", value: "Lavender99456"},
      dealer: {locator: "#dealer", value: "10h,8c"},
      hand: {locator: "#hand2", value: "Jh,Qs"},
      btnSubmit: "//button"
    },
    "Expect_Win": { 
      "//*[@id='game-ticket']/table[1]/tbody": "winResult.png",
    },
    "Settle_Lose": {
      nickname: {locator: "#nickname", value: "Lavender99456"},
      dealer: {locator: "#dealer", value: "Jc,9c"},
      hand: {locator: "#hand2", value: "Kh,7s"},
      btnSubmit: "//button"
    },
    "Expect_Lose": {
      "//*[@id='game-ticket']/table[1]/tbody": "lossResult.png",
    },
  }
}