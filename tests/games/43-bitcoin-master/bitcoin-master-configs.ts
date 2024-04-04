import { Components } from "sc-automation-core";

export const BitCoinMasterConfigs: Components.GameConfiguration = {
  id: 43,
  name: "bitcoinmaster",
  durations: {
    wholeRound: 117 * 1000,
    placingBets: 45 * 1000,
    lockingBet: 60 * 1000,
    shakeThePlateDuration: 14 * 1000,
  },
  choices: ["up", "down", "odd", "even"],
  hedgeBetGroups: [["up", "down"]],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    up: 1.96,
    down: 1.96,
    odd: 1.96,
    even: 1.96,
  },
  betBoard: true,
  accounts: {
    local: "222256",
    local1: "222256",
    local2: "222256",
    local3: "222256",
    sit: "supertestsaba66",
    uat: "IT58Test789",
    prod: "supertestte120201009",
    l2uat: "TestSep2741",
    l2prod: "VNtest046",
  },
  productId: { l1: "1649", l2: 3843 },

};
