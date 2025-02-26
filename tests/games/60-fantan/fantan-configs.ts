import { Components } from "sc-automation-core";

export const FanTanConfigs: Components.GameConfiguration = {
  id: 60,
  name: "FanTan",
  durations: {
    wholeRound: 50 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 15 * 1000,
  },
  choices: [
    "odd",
    "even",
    "fan1",
    "fan2",
    "fan3",
    "fan4",
    "kwok12",
    "kwok23",
    "kwok34",
    "kwok41",
    "chun123",
    "chun124",
    "chun134",
    "chun234",
  ],
  hedgeBetGroups: [["odd", "even"]],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    even: 1.96,
    odd: 1.96,
    fan1: 3.85,
    fan2: 3.85,
    fan3: 3.85,
    fan4: 3.85,
    kwok12: 1.96,
    kwok23: 1.96,
    kwok34: 1.96,
    kwok41: 1.96,
    chun123: 1.31,
    chun124: 1.31,
    chun134: 1.31,
    chun234: 1.31,
  },
  accounts: {
    local: "222264",
    local1: "222264",
    local2: "222264",
    local3: "222264",
    sit: "supertestsaba70",
    uat: "IT55Test789",
    prod: "supertestte120201009",
    l2uat: "TestSep2750",
    l2prod: "VNtest044",
  },
  productId: { l1: "1667", l2: 3859 },

};

export const AdminDataSet_local ={
  accountId: 222264,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='fantan']",
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
      "//div[contains(@class,'fan-tan_result')]": "//button[text()='36']",
      },
    "Expect_Win": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "winResult.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png"
    },
    "Settle_Lose": {
      "//div[contains(@class,'fan-tan_result')]": "//button[text()='31']"
      },
    "Expect_Lose": {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "lossResult.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png"
    },
  }
}