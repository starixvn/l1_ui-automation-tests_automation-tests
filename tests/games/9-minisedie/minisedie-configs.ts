import { Components } from "sc-automation-core";

export const MiniSedie1Configs: Components.GameConfiguration = {
    id: 9,
    name: "MiniSeDie",
    durations: {
        wholeRound: 38 * 1000,
        placingBets: 28 * 1000,
        lockingBet: 5 * 1000,
        shakeThePlateDuration: 5 * 1000,
    },
    choices: ["odd", "even", "red3", "red4", "white3", "white4"],
    hedgeBetGroups: [["even", "odd"]],
    maxTimeout: 100 * 1000, // miliseconds,
    odds: {
        even: 1.96,
        odd: 1.96,
        red3: 3.75,
        white3: 3.75,
        red4: 14.4,
        white4: 14.4,
    },
    socketName: "minisedie",
    accounts: {
        local: "222229",
        local1: "222229",
        local2: "222229",
        local3: "222229",
        sit: "supertestsaba69",
        uat: "IT58Test789",
        prod: "supertestte120201012",
        vguat: "TestSep2747",
        vgprod: "VNtest044",
    },
    productId: "1620"
}

export const MiniSedie2Configs: Components.GameConfiguration = {
    id: 9,
    name: "MiniSeDie2",
    durations: {
        wholeRound: 38 * 1000,
        placingBets: 28 * 1000,
        lockingBet: 5 * 1000,
        shakeThePlateDuration: 5 * 1000,
    },
    choices: ["odd2", "even2"],
    hedgeBetGroups: [["even2", "odd2"]],
    maxTimeout: 100 * 1000, // miliseconds,
    odds: {
        even: 1.96,
        odd: 1.96,
        red3: 3.75,
        white3: 3.75,
        red4: 14.4,
        white4: 14.4,
    },
    accounts: {
        local: "222229",
        local1: "222229",
        local2: "222229",
        local3: "222229",
        sit: "supertestsaba69",
        uat: "IT58Test789",
        prod: "supertestte120201012",
    },
    productId: "1620"
}

export const MiniSedie3Configs: Components.GameConfiguration = {
    id: 9,
    name: "MiniSeDie3",
    durations: {
        wholeRound: 38 * 1000,
        placingBets: 35 * 1000,
        lockingBet: 5 * 1000,
        shakeThePlateDuration: 5 * 1000,
    },
    choices: ["odd3", "even3"],
    hedgeBetGroups: [["even3", "odd3"]],
    maxTimeout: 100 * 1000, // miliseconds,
    odds: {
        even: 1.96,
        odd: 1.96,
        red3: 14.4,
        white3: 14.4,
        red4: 3.75,
        white4: 3.75,
    },
    accounts: {
        local: "222229",
        local1: "222229",
        local2: "222229",
        local3: "222229",
        sit: "supertestsaba69",
        uat: "IT58Test789",
        prod: "supertestte120201012",
    },
    productId: "1620"
}

export const MiniSedie4Configs: Components.GameConfiguration = {
    id: 9,
    name: "MiniSeDie4",
    durations: {
        wholeRound: 38 * 1000,
        placingBets: 35 * 1000,
        lockingBet: 5 * 1000,
        shakeThePlateDuration: 5 * 1000,
    },
    choices: ["odd4", "even4"],
    hedgeBetGroups: [["even4", "odd4"]],
    maxTimeout: 100 * 1000, // miliseconds,
    odds: {
        even: 1.96,
        odd: 1.96,
        red3: 14.4,
        white3: 14.4,
        red4: 3.75,
        white4: 3.75,
    },
    accounts: {
        local: "222229",
        local1: "222229",
        local2: "222229",
        local3: "222229",
        sit: "supertestsaba69",
        uat: "IT58Test789",
        prod: "supertestte120201012",
    },
    productId: "1620"
}