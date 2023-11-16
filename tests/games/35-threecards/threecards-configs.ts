import { Components } from "sc-automation-core";

export const ThreeCardsConfigs: Components.GameConfiguration = {
  id: 35,
  name: "threecards",
  durations: {
    wholeRound: 39 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 4 * 1000,
  },
  choices: ["red", "black", "diamonds", "hearts", "spades", "clubs"],
  hedgeBetGroups: [["red", "black"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    red: 1.96,
    black: 1.96,
    diamonds: 1.68,
    hearts: 1.68,
    spades: 1.68,
    clubs: 1.68,
  },
  betBoard: false,
  accounts: {
    local: "222264",
    local1: "222264",
    local2: "222264",
    local3: "222264",
    sit: "supertestsaba70",
    uat: "IT55Test789",
    prod: "supertestte120201003",
    l2uat: "TestSep2749",
    l2prod: "VNtest050",
  },
  productId: "1643",
};
