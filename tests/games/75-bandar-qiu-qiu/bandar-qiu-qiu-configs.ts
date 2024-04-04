import { Components } from "sc-automation-core";

export const BandarQiuQiuConfigs: Components.GameConfiguration = {
  id: 75,
  name: "BandarQiuQiu",
  durations: {
    wholeRound: 39 * 1000,
    placingBets: 25 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 9 * 1000,
  },
  choices: ["spade","heart","club","diamond"],
  hedgeBetGroups: [],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    "sixDevil": 6,
    "twin": 5,
    "small": 3,
    "big": 3,
    "qiuQiu": 2.5,
    "ordinaryCard": 1.9
},
  betBoard: false,
  accounts: {
    local: "222227",
    local1: "222227",
    local2: "222227",
    local3: "222227",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201002",
    l2uat: "TestSep2741",
    l2prod: "VNtest040",
  },
  productId: { l1: "1680", l2: 3872 },
  rebet: true,
};

export const AdminDataSet_local ={
    tokenGameName: "BandarQiuQiu",
    settleRequestType: "ws",
    wsGameName: process.env.npm_config_project+'-services',
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
        totalWin: 1.9,
        validBetAmount: 1,
        errorCode: "0",
        errorDescription: null
      },
      "TC3_settle": `["06","66","11","26","35","13","00","04","55","12","03","36","16","14","23","25","33","44","34","15"]`,
      "TC4_expect": {
        totalAmount: 0,
        totalWin: 0,
        validBetAmount: 0,
        errorCode: "SB1001",
        errorDescription: "The game round does not exist."
      },
      "TC5_settle": `["15","03","25","16","13","66","56","45","44","55","06","22","26","01","33","00","36","46","34","35"]`,
      "TC5_expect": {
        totalAmount: 1,
        totalWin: 0,
        validBetAmount: 1,
        errorCode: "0",
        errorDescription: null
      },
      "TC6_settle": `["15","03","25","16","13","66","56","45","44","55","06","22","26","01","33","00","36","46","34","35"]`,
      "TC6_expect": {
        totalAmount: 2,
        totalWin: 0,
        validBetAmount: 2,
        errorCode: "0",
        errorDescription: null
      },
    }
}