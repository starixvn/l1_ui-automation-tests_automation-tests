import { Components } from "sc-automation-core";

export const winthreecardsConfigs: Components.GameConfiguration = {
    id: 61,
    name: "WinThreeCards",
    durations: {
        wholeRound: 45 * 1000,
        placingBets: 25 * 1000,
        lockingBet: 5 * 1000,
        shakeThePlateDuration: 15 * 1000,
    },
    choices: [
        "dragon",
        "phoenix",
        "tie",
        "threeOfAKind",
        "straightFlush",
        "flush",
        "straight",
        "pair",
        "pair8Plus",
        "highCard",
        "killer235",
    ],
    hedgeBetGroups: [["dragon", "phoenix"]],
    maxTimeout: 100 * 1000, // miliseconds,
    odds: {
        dragon: 1.96,
        phoenix: 1.96,
        pair8Plus: 3,
        straight: 8,
        flush: 9,
        straightFlush: 101,
        threeOfAKind: 121,
    },
    accounts: {
        local: "222230",
        local1: "222230",
        local2: "222230",
        local3: "222230",
        sit: "supertestsaba70",
        uat: "IT55Test789",
        prod: "supertestte120201002",
        vguat: "TestSep2741",
        vgprod: "VNtest050",
    },
    productId: "1668"
};
