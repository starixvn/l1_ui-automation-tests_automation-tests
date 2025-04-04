import { Components } from "sc-automation-core";

export const generateConfig = (
  gamename: string,
  durations: any,
  choices: any
): Components.GameConfiguration => {
  return {
    id: 36,
    name: gamename,
    durations: durations,
    choices: choices,
    hedgeBetGroups: [["blue", "red"]],
    maxTimeout: 200 * 1000, // miliseconds,
    odds: {
    },
    accounts: {
      local: "222242",
      local1: "222242",
      local2: "222242",
      local3: "222242",
      sit: "supertestsaba68",
      uat: "IT57Test789",
      prod: "supertestte120201006",
      l2uat: "TestSep2748",
      l2prod: "VNtest040",
    },
    productId: { l1: "3848", l2: 3848 },
  };
};

export const KenoSoccerConfigs: Components.GameConfiguration = generateConfig(
  "kenomatch1",
  {
    wholeRound: 58 * 1000,
    placingBets: 45 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 8 * 1000,
  },
  ["blue", "red","tie", "over", "under", "odd", "even"]
);
