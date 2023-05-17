import { Components } from "sc-automation-core";

export const BaccaratConfigs: Components.GameConfiguration = {
    id: 10,
    name: "baccarat",
    durations: {
        wholeRound: 45 * 1000,
        placingBets: 30 * 1000,
        lockingBet: 5 * 1000,
        shakeThePlateDuration: 9 * 1000,
    },
    choices: ["player", "banker", "tie", "big", "small", "playerPair", "bankerPair", "natural"],
    hedgeBetGroups: [["big", "small"]],
    maxTimeout: 200 * 1000, // miliseconds,
    odds: {
        player: 2,
        banker: 1.95,
        big: 1.54,
        small: 2.5,
        tie: 9,
        playerPair: 12,
        bankerPair: 12,
    },
    betBoard: false,
    accounts: {
        local: "222230",
        local1: "222230",
        local2: "222230",
        local3: "222230",
        sit: "supertestsaba70",
        uat: "IT59Test789",
        prod: "supertestte120201013",
        vguat: "TestSep2748",
        vgprod: "VNtest046",
    },
    productId: "1621"
};
