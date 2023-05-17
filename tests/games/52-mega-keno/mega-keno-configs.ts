import { Components } from "sc-automation-core";

export const generateConfig = (
  gamename: string,
  durations: any,
  choices: any
): Components.GameConfiguration => {
  return {
    id: 52,
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
    socketName: "minikeno",
    accounts: {
      local: "222242",
      local1: "222242",
      local2: "222242",
      local3: "222242",
      sit: "supertestsaba68",
      uat: "IT57Test789",
      prod: "supertestte120201001",
      vguat: "TestSep2749",
      vgprod: "VNtest041",
    },
    productId: "0",
  };
};

export const MegaKenoConfigs: Components.GameConfiguration = generateConfig(
  "megakeno",
  {
    wholeRound: 58 * 1000,
    placingBets: 45 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 8 * 1000,
  },
  ["big", "small", "odd", "even", "gold", "wood", "water", "fire", "earth"]
);
export const MegaKeno2Configs: Components.GameConfiguration = generateConfig(
  "megakeno2",
  {
    wholeRound: 43 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 8 * 1000,
  },
  ["big2", "small2", "odd", "even", "gold", "wood", "water", "fire", "earth"]
);
export const KenoMiniConfigs: Components.GameConfiguration = generateConfig(
  "kenomini",
  {
    wholeRound: 58 * 1000,
    placingBets: 40 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 8 * 1000,
  },
  ["big3", "small3", "odd", "even", "gold", "wood", "water", "fire", "earth"]
);
export const KenoMini2Configs: Components.GameConfiguration = generateConfig(
  "kenomini2",
  {
    wholeRound: 43 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 8 * 1000,
  },
  ["big4", "small4", "odd", "even", "gold", "wood", "water", "fire", "earth"]
);
export const KenoEastConfigs: Components.GameConfiguration = generateConfig(
  "kenoeast",
  {
    wholeRound: 43 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 8 * 1000,
  },
  ["big", "small", "odd", "even", "gold", "wood", "water", "fire", "earth"]
);
export const KenoWestConfigs: Components.GameConfiguration = generateConfig(
  "kenowest",
  {
    wholeRound: 43 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 8 * 1000,
  },
  ["big", "small", "odd", "even", "gold", "wood", "water", "fire", "earth"]
);
export const KenoSounthConfigs: Components.GameConfiguration = generateConfig(
  "kenosouth",
  {
    wholeRound: 43 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 8 * 1000,
  },
  ["big", "small", "odd", "even", "gold", "wood", "water", "fire", "earth"]
);
export const KenoNorthConfigs: Components.GameConfiguration = generateConfig(
  "kenonorth",
  {
    wholeRound: 43 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 8 * 1000,
  },
  ["big", "small", "odd", "even", "gold", "wood", "water", "fire", "earth"]
);
