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
    "sixDevil": 7,
    "twin": 6,
    "small": 5,
    "big": 4,
    "qiuQiu": 3,
    "ordinaryCard": 2
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
  productId: "1676",
  rebet: true
};
