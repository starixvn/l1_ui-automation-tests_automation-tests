import { Components } from "sc-automation-core";

export let GroupConfigs: Components.GameConfiguration = {
  id: 21,
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
  21: { name: "Roulette", betchoice: "straightUp", betBoard: true },
  26: { name: "VipFishPrawnCrab", betchoice: "mountain", betBoard: false },
  27: { name: "vipbaccarat", betchoice: "big", betBoard: false },
  28: { name: "VipSedieWar", betchoice: "player", betBoard: false },
  35: { name: "threecards", betchoice: "red", betBoard: false },
  48: { name: "blockchainbaccarat", betchoice: "player", betBoard: false },
  50: { name: "unbalancedbigsmall1", betchoice: "big", betBoard: false },
  59: { name: "fruitslot", betchoice: "big", betBoard: false },
  61: { name: "winthreecards", betchoice: "dragon", betBoard: false },
  71: { name: "colorgame", betchoice: "cold", betBoard: false },
  79: { name: "FootballSlot", betchoice: "big", betBoard: false },
  43: { name: "bitcoinmaster", betchoice: "up", betBoard: true },
  45: { name: "hilo", betchoice: "hi", betBoard: false },

};
