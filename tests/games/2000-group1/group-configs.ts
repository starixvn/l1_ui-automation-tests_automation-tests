import { Components } from "sc-automation-core";

export let GroupConfigs: Components.GameConfiguration = {
  id: 2,
  name: "SeDie",
  durations: {
    wholeRound: 0,
    placingBets: 0,
    lockingBet: 0,
    shakeThePlateDuration: 0,
  },
  choices: [],
  hedgeBetGroups: [],
  maxTimeout: 150 * 1000, // miliseconds,
  odds: {},
  betBoard: true,
  accounts: {
    local: "222222",
    local1: "222222",
    local2: "222222",
    l2local2: "222222",
    local3: "222222",
  },
  productId: { l1: "1613", l2: 3803 },
};

export const gameConfigs = {
  2: { name: "SeDie", betchoice: "odd", betBoard: false },
  22: { name: "VipSeDie", betchoice: "odd", betBoard: false },
  9: { name: "minisedie", betchoice: "odd", betBoard: false },
  24: { name: "SpecialSeDie", betchoice: "even", betBoard: true },
  28: { name: "VipSedieWar", betchoice: "player", betBoard: false },
  1: { name: "bigsmall", betchoice: "big", betBoard: true },
  4: { name: "TXTurbo", betchoice: "big", betBoard: true },
  6: { name: "OETurbo", betchoice: "odd", betBoard: true },
  25: { name: "SicBo", betchoice: "big", betBoard: false },
  50: { name: "unbalancedbigsmall1", betchoice: "big", betBoard: false },
  59: { name: "fruitslot", betchoice: "big", betBoard: false },
  7: { name: "dragontiger", betchoice: "dragon", betBoard: false },
  61: { name: "winthreecards", betchoice: "dragon", betBoard: false },
  48: { name: "blockchainbaccarat", betchoice: "player", betBoard: false },
  27: { name: "vipbaccarat", betchoice: "big", betBoard: false },
  10: { name: "baccarat", betchoice: "big", betBoard: false },
  35: { name: "threecards", betchoice: "red", betBoard: false },
};
