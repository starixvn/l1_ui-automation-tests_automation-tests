import { Components } from "sc-automation-core";

export const BigSmallCity1Configs: Components.GameConfiguration = {
    id: 50,
    name: "unbalancedbigsmall1",
    durations: {
        wholeRound: 60 * 1000,
        placingBets: 50 * 1000,
        lockingBet: 5 * 1000,
        shakeThePlateDuration: 5 * 1000,
    },
    choices: ["big", "small"],
    hedgeBetGroups: [["big", "small"]],
    maxTimeout: 200 * 1000, // miliseconds,
    odds: {
        big: 1.96,
        small: 1.96,
    },
    socketName: "unbalancedbigsmall",
    accounts: {
        local: "222262",
        local1: "222262",
        local2: "222262",
        local3: "222262",
        sit: "supertestsaba67",
        uat: "IT56Test789",
        prod: "supertestte120201012",
        vguat: "TestSep2748",
        vgprod: "VNtest040",
    },
    productId: "1659"
}

export const BigSmallCity2Configs: Components.GameConfiguration = {
    id: 50,
    name: "unbalancedbigsmall2",
    durations: {
        wholeRound: 40 * 1000,
        placingBets: 30 * 1000,
        lockingBet: 5 * 1000,
        shakeThePlateDuration: 5 * 1000,
    },
    choices: ["big2", "small2"],
    hedgeBetGroups: [["big2", "small2"]],
    maxTimeout: 200 * 1000, // miliseconds,
    odds: {
        big: 1.96,
        small: 1.96,
    },
    accounts: {
        local: "222262",
        local1: "222262",
        local2: "222262",
        local3: "222262",
        sit: "supertestsaba67",
        uat: "IT56Test789",
        prod: "supertestte120201012",
    },
    productId: "1659"
}

export const BigSmallCity3Configs: Components.GameConfiguration = {
    id: 50,
    name: "unbalancedbigsmall3",
    durations: {
        wholeRound: 60 * 1000,
        placingBets: 50 * 1000,
        lockingBet: 5 * 1000,
        shakeThePlateDuration: 5 * 1000,
    },
    choices: ["big3", "small3"],
    hedgeBetGroups: [["big3", "small3"]],
    maxTimeout: 200 * 1000, // miliseconds,
    odds: {
        big: 1.96,
        small: 1.96,
    },
    accounts: {
        local: "222262",
        local1: "222262",
        local2: "222262",
        local3: "222262",
        sit: "supertestsaba67",
        uat: "IT56Test789",
        prod: "supertestte120201012",
    },
    productId: "1659"
}

export const BigSmallCity4Configs: Components.GameConfiguration = {
    id: 50,
    name: "unbalancedbigsmall4",
    durations: {
        wholeRound: 40 * 1000,
        placingBets: 30 * 1000,
        lockingBet: 5 * 1000,
        shakeThePlateDuration: 5 * 1000,
    },
    choices: ["big4", "small4"],
    hedgeBetGroups: [["big4", "small4"]],
    maxTimeout: 200 * 1000, // miliseconds,
    odds: {
        big: 1.96,
        small: 1.96,
    },
    accounts: {
        local: "222262",
        local1: "222262",
        local2: "222262",
        local3: "222262",
        sit: "supertestsaba67",
        uat: "IT56Test789",
        prod: "supertestte120201012",
    },
    productId: "1659"
}