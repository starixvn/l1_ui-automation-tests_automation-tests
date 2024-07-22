import { Components } from "sc-automation-core";

export const generateConfig = (
  gamename: string,
  durations: any,
  choices: any
): Components.GameConfiguration => {
  return {
    id: 14,
    name: gamename,
    durations: durations,
    choices: choices,
    hedgeBetGroups: [["big", "small"]],
    maxTimeout: 200 * 1000, // miliseconds,
    odds: {
      big: 1.96,
      small: 1.96,
      even: 1.96,
      odd: 1.96,
      earth: 9.2,
      fire: 4.6,
      gold: 9.2,
      water: 2.4,
      wood: 4.6,
    },
    socketName: "KenoMini",
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

export const KenoConfigs: Components.GameConfiguration = generateConfig(
  "KenoMini",
  {
    wholeRound: 58 * 1000,
    placingBets: 45 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 8 * 1000,
  },
  ["big", "small", "odd", "even", "gold", "wood", "water", "fire", "earth"]
);
