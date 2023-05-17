import { Components } from "sc-automation-core";

export const RouletteConfigs: Components.GameConfiguration = {
    id: 21,
    name: "Roulette",
    durations: {
        wholeRound: 60 * 1000,
        placingBets: 45 * 1000,
        lockingBet: 5 * 1000,
        shakeThePlateDuration: 9 * 1000,
    },
    choices: ["straightUp","split","street","triangle","corner","fourNumbers","line","column","dozen","redBlack","oddEven","bigSmall"],
    maxTimeout: 350 * 1000, // miliseconds,
    odds: {
        straightUp: 36,
        split: 18,
        street: 12,
        triangle: 12,
        corner: 9,
        dozen: 3,
        fourNumbers: 9,
        line: 6,
        column: 3,
        bigSmall: 2,
        oddEven: 2,
        redBlack: 2,
    },
    betBoard: true,
    accounts: {
        local: "222239",
        local1: "222239",
        local2: "222239",
        local3: "222239",
        sit: "supertestsaba69",
        uat: "IT58Test789",
        prod: "supertestte120201011",
        vguat: "TestSep2749",
        vgprod: "VNtest050",
    },
    productId: "1632"
};
