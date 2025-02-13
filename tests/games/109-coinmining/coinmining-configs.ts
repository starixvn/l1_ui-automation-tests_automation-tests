import { Components } from "sc-automation-core";

export const coinminingConfigs: Components.GameConfiguration = {
  id: 109,
  name: "coinmining",
  durations: {
    wholeRound: 0,
    placingBets: 0,
    lockingBet: 0,
    shakeThePlateDuration: 0,
  },
  choices: ["spin"],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: undefined,
  slotsgame: false,
  accounts: {
    local: "222276",
    local1: "222276",
    local2: "222276",
    local3: "222276",
    sit: "supertestsaba71",
    uat: "IT56Test789",
    prod: "supertestte120201008",
    l2uat: "TestSep2745",
    l2prod: "VNtest050",
  },
  productId: { l1: "109", l2: 109 },
};

