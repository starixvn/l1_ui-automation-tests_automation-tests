import { Components } from "sc-automation-core";

export let GroupConfigs: Components.GameConfiguration = {
  id: 2,
  name: "bigsmall",
  durations: {
    wholeRound: 0,
    placingBets: 0,
    lockingBet: 0,
    shakeThePlateDuration: 0,
  },
  choices: [],
  hedgeBetGroups: [],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {},
  betBoard: true,
  accounts: {
    local: "222248",
    local1: "222248",
    local2: "222248",
    l2local2: "222248",
    local3: "222248",
  },
  productId: { l1: "1613", l2: 3803 },
};

export const gameConfigs = {
  1: { name: "bigsmall", betchoice: "big", betBoard: true },
  2: { name: "SeDie", betchoice: "odd", betBoard: false },
  3: { name: "fishprawncrab", betchoice: "fish", betBoard: false },
  4: { name: "TXTurbo", betchoice: "big", betBoard: true },
  6: { name: "OETurbo", betchoice: "odd", betBoard: true },
  7: { name: "dragontiger", betchoice: "dragon", betBoard: false },
  8: { name: "kenopromax", betchoice: "big", betBoard: false },
  9: { name: "minisedie", betchoice: "odd", betBoard: false },
  10: { name: "baccarat", betchoice: "big", betBoard: false },
  22: { name: "VipSeDie", betchoice: "odd", betBoard: false },
  24: { name: "SpecialSeDie", betchoice: "even", betBoard: true },
  25: { name: "SicBo", betchoice: "big", betBoard: false }, 
  31: { name: "Lottery", betchoice: "big", betBoard: false }, 
  52: { name: "minikeno", betchoice: "big", betBoard: false }, 
};
