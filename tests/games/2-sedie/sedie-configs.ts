import { Components } from "sc-automation-core";

export const SedieConfigs: Components.GameConfiguration = {
  id: 2,
  name: "SeDie",
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
  accounts: {
    local: "222222",
    local1: "222222",
    local2: "222222",
    l2local2: "222222",
    local3: "222222",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201003",
    l2uat: "TestSep2741",
    l2prod: "VNtest041",
  },
  productId: "1613",
};

export const AdminDataSet_local ={
  tokenGameName: "xocxoc",
  settleRequestType: "ws",
  wsGameName: process.env.npm_config_project+'-proxy',
  dataset:{
    "TC1_expect": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "TC2_expect": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "TC3_expect": {
      totalAmount: 1,
      totalWin: 1.96,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "TC3_settle": `{"red1":true,"red2":true,"red3":true,"red4":true}`,
    "TC4_expect": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "TC5_settle": `{"red1":true,"red2":false,"red3":false,"red4":false}`,
    "TC5_expect": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "TC6_settle": `{"red1":true,"red2":false,"red3":false,"red4":false}`,
    "TC6_expect": {
      totalAmount: 2,
      totalWin: 0,
      validBetAmount: 2,
      errorCode: "0",
      errorDescription: null
    },
  }
}