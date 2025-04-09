import { Components } from "sc-automation-core";

export const RocketXConfigs: Components.GameConfiguration = {
  id: 113,
  name: "rocketx",
  durations: {
    wholeRound: 14 * 1000,
    placingBets: 10 * 1000,
    lockingBet: 3 * 1000,
    shakeThePlateDuration: 1 * 1000,
  },
  choices: ["key0", "key1"],
  hedgeBetGroups: [["even", "odd"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: "",
  accounts: {
    local: "222277",
    local1: "222277",
    local2: "222277",
    l2local2: "222277",
    local3: "222277",
  },
  productId: { l1: "1613", l2: 3803 },
};
