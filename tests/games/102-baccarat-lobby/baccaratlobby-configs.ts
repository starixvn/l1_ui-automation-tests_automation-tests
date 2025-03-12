import { Components } from "sc-automation-core";

export const BaccaratLobbyConfigs: Components.GameConfiguration = {
  id: 102,
  name: "",
  durations: {
    wholeRound: 0,
    placingBets: 0,
    lockingBet: 7 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: [],
  hedgeBetGroups: [],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
  },
  accounts: {
    local: "222264",
    local1: "222264",
    local2: "222264",
    local3: "222264",
    sit: "supertestsaba70",
    uat: "IT49Test789",
    prod: "supertestte120201008",
    l2uat: "TestSep2749",
    l2prod: "VNtest041",
  },
  productId:  { l1: "13503", l2: "3881" },
};
