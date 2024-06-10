import { Components } from "sc-automation-core";

export let GroupConfigs: Components.GameConfiguration = {
  id: 23,
  name: "QuickSmokeTestsCards",
  durations:{ wholeRound: 0,
    placingBets: 0,
    lockingBet: 0,
    shakeThePlateDuration: 0,},
  choices: ["1"],
  hedgeBetGroups: [],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
  },
  cardgame: true,
  accounts: {
    local: "222241",
    local1: "222241",
    local2: "222241",
    l2local2: "222241",
    local3: "222241",
  },
  productId: { l1: "1634", l2: 3820 },
};


export const gameConfigs = {
  23: {name: "blackjack", betchoice: "1"},
  77: {name: "chineseblackjack", betchoice: "1"},
  72: {name: "pontoon", betchoice: "1"},
  39: {name: "casinoholdempoker", betchoice: "ante"},
  42: {name: "texasholdempoker", betchoice: "ante"},
};
