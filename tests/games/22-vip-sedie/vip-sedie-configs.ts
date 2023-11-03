import { Components } from "sc-automation-core";

export const VipSedieConfigs: Components.GameConfiguration = {
  id: 22,
  name: "VipSeDie",
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
  socketName: "vsedie",
  accounts: {
    local: "222240",
    local1: "222240",
    local2: "222240",
    local3: "222240",
    sit: "supertestsaba70",
    uat: "IT59Test789",
    prod: "supertestte120201003",
    l2uat: "TestSep2750",
    l2prod: "VNtest040",
  },
  productId: "1633",
};
