import { Components } from "sc-automation-core";

class IFourGuardiansConfigs extends Components.GameConfiguration {
  l2odds: any;
}

export const FourGuardiansConfigs: IFourGuardiansConfigs = {
  id: 29,
  name: "FourGuardians",
  durations: {
    wholeRound: 0,
    placingBets: 0,
    lockingBet: 0,
    shakeThePlateDuration: 0,
  },
  choices: ["Payline1", "AllPayline", "OddPayline", "EvenPayline"],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    "0": { "2": 0, "3": 2, "4": 5, "5": 10 },
    "1": { "2": 0, "3": 5, "4": 10, "5": 25 },
    "10": { "2": 4, "3": 25, "4": 100, "5": 5000 },
    "2": { "2": 0, "3": 5, "4": 25, "5": 50 },
    "3": { "2": 0, "3": 10, "4": 30, "5": 150 },
    "4": { "2": 0, "3": 12, "4": 45, "5": 275 },
    "5": { "2": 0, "3": 16, "4": 60, "5": 375 },
    "6": { "2": 0, "3": 20, "4": 75, "5": 500 },
    "7": { "2": 0, "3": 3, "4": 6, "5": 18 },
    "8": { "2": 0, "3": 3, "4": 4, "5": 5 },
    "9": { "2": 8, "3": 50, "4": 1000, "5": 8000 },
  },
  l2odds: {
    "0": { "2": 0, "3": 2, "4": 5, "5": 10 },
    "1": { "2": 0, "3": 5, "4": 10, "5": 25 },
    "10": { "2": 4, "3": 25, "4": 100, "5": 0 },
    "2": { "2": 0, "3": 5, "4": 25, "5": 50 },
    "3": { "2": 0, "3": 10, "4": 30, "5": 150 },
    "4": { "2": 0, "3": 12, "4": 45, "5": 275 },
    "5": { "2": 0, "3": 16, "4": 60, "5": 375 },
    "6": { "2": 0, "3": 20, "4": 75, "5": 500 },
    "7": { "2": 0, "3": 3, "4": 6, "5": 18 },
    "8": { "2": 0, "3": 3, "4": 4, "5": 5 },
    "9": { "2": 8, "3": 50, "4": 1000, "5": 8000 },
  },
  slotsgame: true,
  accounts: {
    local: "222247",
    local1: "222247",
    local2: "222247",
    local3: "222247",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201013",
    l2uat: "TestSep2746",
    l2prod: "VNtest044",
  },
  productId: "1640",
};
