import { Components } from "sc-automation-core";

export let GroupConfigs: Components.GameConfiguration = {
  id: 1,
  name: "SiSmokeTests",
  durations: {
    wholeRound: 0,
    placingBets: 0,
    lockingBet: 0,
    shakeThePlateDuration: 0,
  },
  choices: [],
  hedgeBetGroups: [],
  maxTimeout: 250 * 1000, // miliseconds,
  odds: {},
  betBoard: true,
  accounts: {
    local: "222222",
    local1: "222222",
    local2: "222222",
    l2local2: "222222",
    local3: "222222",
  },
  productId: { l1: "1638", l2: 3827 },
};

export const gameConfigs = {
  1: { name: "bigsmall", betchoice: "big", betBoard: false },
  3: { name: "fishprawncrab", betchoice: "fish", betBoard: false },
  7: { name: "dragontiger", betchoice: "dragon", betBoard: false },
  9: { name: "minisedie", betchoice: "odd", betBoard: false },
  10: { name: "baccarat", betchoice: "player", betBoard: false },
  45: { name: "hilo", betchoice: "hi", betBoard: false },
  25: { name: "sicbo", betchoice: "big", betBoard: false },
  71: { name: "colorgame", betchoice: "yellow", betBoard: false },
  80: { name: "cointoss", betchoice: "trump", betBoard: false },

};
