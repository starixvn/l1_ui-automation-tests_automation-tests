import { Components } from "sc-automation-core";

export let GroupConfigs: Components.GameConfiguration = {
  id: 29,
  name: "QuickSmokeTestsSlots",
  durations:{ wholeRound: 0,
    placingBets: 0,
    lockingBet: 0,
    shakeThePlateDuration: 0,},
  choices: ["1"],
  hedgeBetGroups: [],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
  },
  slotsgame: true,
  accounts: {
    local: "222247",
    local1: "222247",
    local2: "222247",
    l2local2: "222247",
    local3: "222247",
  },
  productId: { l1: "1640", l2: 3829 },
};


export const gameConfigs = {
  29: {name: "fourguardians"},
  38: {name: "heroesslot"},
  46: {name: "nightclub"},
  47: {name: "treasureisland"},
  49: {name: "waytogoal"},
  62: {name: "fortunecat"},
  63: {name: "happyfish"},
  64: {name: "magicforest"},
  65: {name: "djclub"},
  66: {name: "candyland"},
  68: {name: "missionimpossible"},
  69: {name: "blackpink"},
  70: {name: "transformers"},
  74: {name: "onepiece"},
  76: {name: "dragonball"},
};
