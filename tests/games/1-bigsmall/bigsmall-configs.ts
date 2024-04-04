import { Components } from "sc-automation-core";

export const BigSmallConfigs: Components.GameConfiguration = {
  id: 1,
  name: "BigSmall",
  durations: {
    wholeRound: 61 * 1000,
    placingBets: 50 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: ["big", "small"],
  hedgeBetGroups: [["big", "small"]],
  maxTimeout: 200 * 1000, // miliseconds x,
  odds: {
    big: 1.96,
    small: 1.96,
  },
  betBoard: true,
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
  productId: { l1: "1612", l2: 3802 },
};
