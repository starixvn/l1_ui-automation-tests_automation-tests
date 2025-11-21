import { Components } from "sc-automation-core";

export const SoccerPingoalConfigs: Components.GameConfiguration = {
  id: 156,
  name: "soccerpingoal",
  durations: {
    wholeRound: 0,
    placingBets: 0,
    lockingBet: 0,
    shakeThePlateDuration: 0,
  },
  choices: [    
   "red",
    "blue",
    "draw"
  ],
  hedgeBetGroups: [["red", "blue"]],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    red: 2.1,
    blue: 2.1,
    draw: 12,
  },
  accounts: {
    local: "222263",
    local1: "222263",
    local2: "222263",
    local3: "222263",
    sit: "supertestsaba70",
    uat: "IT49Test789",
    prod: "supertestte120201008",
    l2uat: "TestSep2749",
    l2prod: "VNtest041",
  },
  productId:  { l1: "1689", l2: "3881" },
};