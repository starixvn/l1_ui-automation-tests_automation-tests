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
    pontoon: 3.5,
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
    l2prod: "VNtest041",
  },
  productId: "1679",
};
