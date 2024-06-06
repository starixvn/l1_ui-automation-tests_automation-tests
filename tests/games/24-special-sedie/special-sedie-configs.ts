import { Components } from "sc-automation-core";

export const SpecialSedieConfigs: Components.GameConfiguration = {
  id: 24,
  name: "SpecialSeDie", //specialsedie
  durations: {
    wholeRound: 39 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 4 * 1000,
  },
  choices: ["even", "odd"],
  hedgeBetGroups: [["even", "odd"]],
  maxTimeout: 180 * 1000, // miliseconds,
  odds: {
    even: 1.96,
    odd: 1.96,
  },
  betBoard: true,
  accounts: {
    local: "222242",
    local1: "222242",
    local2: "222242",
    local3: "222242",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201006",
    l2uat: "TestSep2742",
    l2prod: "VNtest044",
  },
  productId: { l1: "1635", l2: 3825 },
};
