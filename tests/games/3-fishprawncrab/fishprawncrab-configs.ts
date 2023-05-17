import { Components } from "sc-automation-core";

export const FPCConfigs: Components.GameConfiguration = {
    id: 3,
    name: "fishprawncrab",
    durations: {
        wholeRound: 40 * 1000,
        placingBets: 30 * 1000,
        lockingBet: 7 * 1000,
        shakeThePlateDuration: 3 * 1000,
    },
    choices: ["stag", "gourd", "rooster", "fish", "crab", "prawn"],
    hedgeBetGroups: [["fish", "crab"]],
    maxTimeout: 200 * 1000, // miliseconds,
    odds: {
        single: 2,
        double: 3.5,
        triple: 6,
    },
    betBoard: false,
    accounts: {
        local: "222223",
        local1: "222223",
        local2: "222223",
        local3: "222223",
        sit: "supertestsaba68",
        uat: "IT57Test789",
        prod: "supertestte120201004",
        vguat: "TestSep2742",
        vgprod: "VNtest044",
    },
    productId: "1614"
};
