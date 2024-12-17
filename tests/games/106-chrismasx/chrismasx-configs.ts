import { Components } from "sc-automation-core";

export const chrismasxConfigs: Components.GameConfiguration = {
  id: 106,
  name: "christmascrash",
  durations: {
    wholeRound: 3*1000,
    placingBets: 0,
    lockingBet: 0,
    shakeThePlateDuration: 0,
  },
  choices: ["placeBet"],
  maxTimeout: 300 * 1000, // miliseconds,
  odds: {},
  cardgame: false,
  accounts: {
    local: "222244",
    local1: "222244",
    local2: "222244",
    local3: "222244",
    sit: "supertestsaba68",
    l2sit: "SIT_test_INH_017",
    uat: "IT57Test789",
    prod: "supertestte120201013",
    l2uat: "TestSep2740",
    l2prod: "VNtest050",
  },
  productId: { l1: "1681", l2: 3873 },
};
