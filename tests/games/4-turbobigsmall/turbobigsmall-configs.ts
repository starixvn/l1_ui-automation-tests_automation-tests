import { Components } from "sc-automation-core";

export const TurboBigSmallConfigs: Components.GameConfiguration = {
<<<<<<< HEAD
    id: 4,
    name: "TXTurbo",
    durations: {
        wholeRound: 37 * 1000,
        placingBets: 30 * 1000,
        lockingBet: 3 * 1000,
        shakeThePlateDuration: 3 * 1000,
    },
    choices: ["big", "small"],
    hedgeBetGroups: [["big", "small"]],
    maxTimeout: 80 * 1000, // miliseconds, should not over 2 * wholeRound
    odds: {
        big: 1.96,
        small: 1.96,
    },
    socketName: "turbobigsmall",
    betBoard: true,
    accounts: {
        local: "222224",
        local1: "222224",
        local2: "222224",
        local3: "222224",
        sit: "supertestsaba69",
        uat: "IT58Test789",
        prod: "supertestte120201006",
        vguat: "TestSep2743",
        vgprod: "VNtest046",
    },
    productId: "1615"
=======
  id: 4,
  name: "TXTurbo",
  durations: {
    wholeRound: 37 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 3 * 1000,
    shakeThePlateDuration: 3 * 1000,
  },
  choices: ["big", "small"],
  hedgeBetGroups: [["big", "small"]],
  maxTimeout: 80 * 1000, // miliseconds, should not over 2 * wholeRound
  odds: {
    big: 1.96,
    small: 1.96,
  },
  socketName: "turbobigsmall",
  betBoard: true,
  accounts: {
    local: "222224",
    local1: "222224",
    local2: "222224",
    local3: "222224",
    sit: "supertestsaba69",
    uat: "IT58Test789",
    prod: "supertestte120201006",
    l2uat: "TestSep2743",
    l2prod: "VNtest046",
  },
  productId: "1615",
>>>>>>> master
};
