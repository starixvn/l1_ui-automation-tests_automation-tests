import { Components } from "sc-automation-core";

export let GroupConfigs: Components.GameConfiguration = {
  id: 81,
  name: "QuickSmokeTests",
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
  betBoard: false,
  accounts: {
    local: "222222",
    local1: "222222",
    local2: "222222",
    l2local2: "222222",
    local3: "222222",
  },
  productId: { l1: "1651", l2: 3844 },
};

export const gameConfigs = {
  81: { name: "bac81", betchoice: "player", betBoard: false },
  82: { name: "bac82", betchoice: "player", betBoard: false },
  83: { name: "bac83", betchoice: "player", betBoard: false },
  84: { name: "bac84", betchoice: "player", betBoard: false },
  85: { name: "bac85", betchoice: "player", betBoard: false },
  86: { name: "bac86", betchoice: "player", betBoard: false },
  87: { name: "bac87", betchoice: "player", betBoard: false },
  88: { name: "bac88", betchoice: "player", betBoard: false },
  89: { name: "bac89", betchoice: "player", betBoard: false },
  90: { name: "bac90", betchoice: "player", betBoard: false },
  91: { name: "bac91", betchoice: "player", betBoard: false },
  92: { name: "bac92", betchoice: "player", betBoard: false },
  97: { name: "bac97", betchoice: "player", betBoard: false },
  98: { name: "bac98", betchoice: "player", betBoard: false },
  100: { name: "bac100", betchoice: "player", betBoard: false },
  101: { name: "bac101", betchoice: "player", betBoard: false },
  102: { name: "bac102", betchoice: "player", betBoard: false },
};
