import { Components } from "sc-automation-core";
import { l2creditisprod } from "sc-automation-core/lib/auth/configs/config.account";

export const MarbleSoccerConfigs: Components.GameConfiguration = {
  id: 2002,
  name: "Marble Soccer Galaxy",
  durations: {
    wholeRound: 0,
    placingBets: 0,
    lockingBet: 0,
    shakeThePlateDuration: 0,
  },
  choices: ["home", "away", "draw"],
  hedgeBetGroups: [["home", "away"]],
  maxTimeout: 250 * 1000, // miliseconds x,
  odds: {
  },
  accounts: {
    local: "222221",
    local1: "222221",
    local2: "222221",
    local3: "222221",
    sit: "supertestsaba66",
    uat: "IT55Test789",
    prod: "supertestte120201002",
    l2uat: "TestSep2740",
    l2prod: "VNtest040",
  },
  productId: { l1pingoal:" ", l2creditpingoal: " " , l2pingoal: " " },
};
