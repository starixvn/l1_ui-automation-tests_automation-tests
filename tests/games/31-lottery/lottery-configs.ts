import { Components } from "sc-automation-core";

<<<<<<< HEAD
export const LotteryConfigs: Components.GameConfiguration = {
    id: 31,
    name: "Lottery",
    durations: {
        wholeRound: 54 * 1000,
        placingBets: 45 * 1000,
        lockingBet: 5 * 1000,
        shakeThePlateDuration: 4 * 1000,
    },
    choices: ["4Sets","special","head","tail","27Sets","others","occurrences"] ,
    hedgeBetGroups: [["big", "small"]],
    maxTimeout: 300 * 1000, // miliseconds,
    odds: {
        "4Sets": 24,
        special: 90,
        head: 9,
        others: 1.96,
        tail: 9,
        "27Sets": 3.6,
        parlay2: 13,
        parlay3: 50,
        parlay4: 120,
    },
    betBoard: false,
    accounts: {
        local: "222248",
        local1: "222248",
        local2: "222248",
        local3: "222248",
        sit: "supertestsaba68",
        uat: "IT57Test789",
        prod: "supertestte120201008",
        vguat: "TestSep2747",
        vgprod: "VNtest050",
    },
    productId: "1642"
};
=======
class ILotteryConfigs extends Components.GameConfiguration {
  l2odds: any;
}
>>>>>>> master

export const LotteryConfigs: ILotteryConfigs = {
  id: 31,
  name: "Lottery",
  durations: {
    wholeRound: 54 * 1000,
    placingBets: 45 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 4 * 1000,
  },
  choices: [
    "4Sets",
    "special",
    "head",
    "tail",
    "27Sets",
    "others",
    "occurrences",
  ],
  hedgeBetGroups: [["big", "small"]],
  maxTimeout: 300 * 1000, // miliseconds,
  odds: {
    "4Sets": 24,
    special: 90,
    head: 9,
    others: 1.96,
    tail: 9,
    "27Sets": 3.6,
    parlay2: 13,
    parlay3: 50,
    parlay4: 120,
  },
  l2odds: {
    "4Sets": 24,
    special: 90,
    head: 9,
    others: 1.96,
    tail: 9,
    "27Sets": 3.6,
  },
  betBoard: false,
  accounts: {
    local: "222248",
    local1: "222248",
    local2: "222248",
    local3: "222248",
    sit: "supertestsaba68",
    uat: "IT57Test789",
    prod: "supertestte120201008",
    l2uat: "TestSep2747",
    l2prod: "VNtest050",
  },
  productId: "1642",
};
