import { Components } from "sc-automation-core";

export const ColorGameConfigs: Components.GameConfiguration = {
  id: 71,
  name: "ColorGame",
  durations: {
    wholeRound: 37 * 1000,
    placingBets: 25 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 3 * 1000,
  },
  choices: ["cold","hot","yellow","red","white","green","pink","blue"],
  hedgeBetGroups: [["hot", "cold"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    single: 2.,
    double: 3.5,
    triple: 6,
    hot: 1.96,
    cold: 1.96
  },
  betBoard: false,
  accounts: {
    local: "222276",
    local1: "222276",
    local2: "222276",
    local3: "222276",
    sit: "supertestsaba71",
    uat: "IT58Test789",
    prod: "supertestte120201012",
    l2uat: "TestSep2750",
    l2prod: "VNtest046",
  },
  productId: { l1: "1678", l2: 3870 },
  rebet: true
};

export const Isconfigs = {
  gameIndex: 9,
  clickCount: 9,
};