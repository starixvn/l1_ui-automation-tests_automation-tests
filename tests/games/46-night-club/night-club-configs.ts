import { Components } from "sc-automation-core";

export const NightClubConfigs: Components.GameConfiguration = {
  id: 46,
  name: "NightClub",
  durations: {
    wholeRound: 0,
    placingBets: 0,
    lockingBet: 0,
    shakeThePlateDuration: 0,
  },
<<<<<<< HEAD
    choices: ["1","25"],
    maxTimeout: 100 * 1000, // miliseconds,
    odds: {
        '0': { '2': 0, '3': 2, '4': 5, '5': 10 },
        '1': { '2': 0, '3': 5, '4': 10, '5': 25 },
        '2': { '2': 0, '3': 5, '4': 25, '5': 50 },
        '3': { '2': 0, '3': 10, '4': 30, '5': 150 },
        '4': { '2': 0, '3': 12, '4': 45, '5': 275 },
        '5': { '2': 0, '3': 16, '4': 60, '5': 375 },
        '6': { '2': 0, '3': 20, '4': 75, '5': 500 },
        '7': { '2': 0, '3': 3, '4': 6, '5': 18 },
        '8': { '2': 0, '3': 3, '4': 4, '5': 5 },
        '9': { '2': 8, '3': 50, '4': 1000, '5': 8000 },
        '10': { '2': 4, '3': 25, '4': 100, '5': 5000 }
      },
    slotsgame: true,
    accounts: {
      local: "222258",
      local1: "222258",
      local2: "222258",
      local3: "222258",
      sit: "supertestsaba68",
      uat: "IT57Test789",
      prod: "supertestte120201007",
      vguat: "TestSep2744",
      vgprod: "VNtest041",
=======
  choices: ["1", "25"],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    "0": { "2": 0, "3": 2, "4": 5, "5": 10 },
    "1": { "2": 0, "3": 5, "4": 10, "5": 25 },
    "2": { "2": 0, "3": 5, "4": 25, "5": 50 },
    "3": { "2": 0, "3": 10, "4": 30, "5": 150 },
    "4": { "2": 0, "3": 12, "4": 45, "5": 275 },
    "5": { "2": 0, "3": 16, "4": 60, "5": 375 },
    "6": { "2": 0, "3": 20, "4": 75, "5": 500 },
    "7": { "2": 0, "3": 3, "4": 6, "5": 18 },
    "8": { "2": 0, "3": 3, "4": 4, "5": 5 },
    "9": { "2": 8, "3": 50, "4": 1000, "5": 8000 },
    "10": { "2": 4, "3": 25, "4": 100, "5": 5000 },
>>>>>>> master
  },
  slotsgame: true,
  accounts: {
    local: "222258",
    local1: "222258",
    local2: "222258",
    local3: "222258",
    sit: "supertestsaba68",
    uat: "IT57Test789",
    prod: "supertestte120201007",
    l2uat: "TestSep2744",
    l2prod: "VNtest041",
  },
  productId: "1653",
};
