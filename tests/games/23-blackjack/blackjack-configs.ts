import { Components } from "sc-automation-core";

export const BlackJackConfigs: Components.GameConfiguration = {
    id: 23,
    name: "BlackJack",
    durations: {
        wholeRound: 45 * 1000,
        placingBets: 30 * 1000,
        lockingBet: 5 * 1000,
        shakeThePlateDuration: 9 * 1000,
    },
    choices: [
        "1",
        "2",
        "3",
    ],
    maxTimeout: 200 * 1000, // miliseconds,
    odds: {
        regular: 2,
        blackjack: 2.5,
    },
    cardgame: true,
    accounts: {
        local: "222241",
        local1: "222241",
        local2: "222241",
        local3: "222241",
        sit: "supertestsaba66",
        uat: "IT55Test789",
        prod: "supertestte120201013",
        vguat: "TestSep2740",
        vgprod: "VNtest041",
    },
    productId: "1634"
};
