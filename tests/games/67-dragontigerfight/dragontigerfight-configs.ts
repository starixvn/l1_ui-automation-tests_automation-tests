import { Components } from "sc-automation-core";

export const DragonTigerConfigs: Components.GameConfiguration = {
  id: 67,
  name: "dragontigerfight",
  durations: {
    wholeRound: 41 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: ["dragon","tiger","tie","blackDragon","redDragon","blackTiger","redTiger"],
  hedgeBetGroups: [["dragon", "tiger"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    dragon: 2,
    tiger: 2,
    tie: 11,
    redDragon: 1.96,
    blackDragon: 1.96,
    redTiger: 1.96,
    blackTiger: 1.96,
  },
  betBoard: false,
  accounts: {
    local: "222227",
    local1: "222227",
    local2: "222227",
    local3: "222227",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201009",
    l2uat: "TestSep2745",
    l2prod: "VNtest040",
  },
  productId: "1676",
  rebet: true
};
