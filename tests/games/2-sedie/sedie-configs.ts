import { Components } from "sc-automation-core";

export const SedieConfigs: Components.GameConfiguration = {
<<<<<<< HEAD
    id: 2,
    name: "SeDie",
    durations: {
        wholeRound: 39 * 1000,
        placingBets: 30 * 1000,
        lockingBet: 5 * 1000,
        shakeThePlateDuration: 2 * 1000,
    },
    choices: ["odd", "even", "red2", "red3", "red4", "white3", "white4"],
    hedgeBetGroups: [["even", "odd"]],
    maxTimeout: 100 * 1000, // miliseconds,
    odds: {
        even: 1.96,
        odd: 1.96,
        red2: 2.4,
        red3: 3.75,
        red4: 14.4,
        white3: 3.75,
        white4: 14.4,
    },
    accounts: {
        local: "222222",
        local1: "222222",
        local2: "222222",
        local3: "222222",
        sit: "supertestsaba67",
        uat: "IT56Test789",
        prod: "supertestte120201003",
        vguat: "TestSep2741",
        vgprod: "VNtest041",
    },
    productId: "1613"
=======
  id: 2,
  name: "SeDie",
  durations: {
    wholeRound: 39 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 2 * 1000,
  },
  choices: ["odd", "even", "red2", "red3", "red4", "white3", "white4"],
  hedgeBetGroups: [["even", "odd"]],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    even: 1.96,
    odd: 1.96,
    red2: 2.4,
    red3: 3.75,
    red4: 14.4,
    white3: 3.75,
    white4: 14.4,
  },
  accounts: {
    local: "222222",
    local1: "222222",
    local2: "222222",
    local3: "222222",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201003",
    l2uat: "TestSep2741",
    l2prod: "VNtest041",
  },
  productId: "1613",
>>>>>>> master
};
