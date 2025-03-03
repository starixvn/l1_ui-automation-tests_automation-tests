import { Components } from "sc-automation-core";

export const TexasHoldemPokerrConfigs: Components.GameConfiguration = {
  id: 42,
  name: "TexasHoldemPoker",
  durations: {
    wholeRound: 45 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 9 * 1000,
  },
  choices: ["ante", "call", "turn", "river"],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    call: 2,
    turn: 2,
    river: 2,
    AnteBet_highCard: 1,
    AnteBet_onePair: 1,
    AnteBet_twoPairs: 1,
    AnteBet_threeKind: 1,
    AnteBet_straight: 2,
    AnteBet_flush: 2,
    AnteBet_fullHouse: 2,
    AnteBet_fourKind: 2,
    AnteBet_straightFlush: 2,
    AnteBet_royalFlush: 2,
  },
  cardgame: true,
  accounts: {
    local: "222255",
    local1: "222255",
    local2: "222255",
    local3: "222255",
    sit: "supertestsaba70",
    uat: "IT57Test789",
    prod: "supertestte120201008",
    l2uat: "TestSep2740",
    l2prod: "VNtest044",
  },
  productId: { l1: "1652", l2: 3837 },
};

export const AdminDataSet_local = {
  accountId: 222255,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*/td[contains(text(),'Texas Hold')]//following::a[1]",
  l2datasetRER: {
    "Expect_NoData": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "Expect_Running": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1005",
      errorDescription: "Game round is running."
    },
    "Expect_Win": {
      totalAmount: 10,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Lose": {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null
    },
  },
  l2datasetTicket: {
    "Settle_Win": {
      //11- 16-1q1032
      nickname: { locator: "#nickname", value: "Froggy20560" },
      hand: [
        "//div[contains(@class,'form-row')][1]/div[1]",
        "//div[contains(@class,'form-row')][2]/div[1]",
        "//div[contains(@class,'form-row')][3]/div[1]",
        "//div[contains(@class,'form-row')][1]/div[6]",
        "//div[contains(@class,'form-row')][4]/div[1]",
        "//div[contains(@class,'form-row')][1]/div[11]",
        "//div[contains(@class,'form-row')][1]/div[10]",
        "//div[contains(@class,'form-row')][1]/div[2]",
        "//div[contains(@class,'form-row')][1]/div[3]",
      ],
      btnSubmit: "//button",
    },
    "Expect_Win": {
      "//*[@id='game-ticket']/table[1]/tbody": "winResult.png",
    },
    "Settle_Lose": {
      nickname: { locator: "#nickname", value: "Lavender99456" },
      hand: [
        "//div[contains(@class,'form-row')][1]/div[12]",
        "//div[contains(@class,'form-row')][1]/div[9]",
        "//div[contains(@class,'form-row')][2]/div[9]",
        "//div[contains(@class,'form-row')][9]/div[9]",
        "//div[contains(@class,'form-row')][1]/div[10]",
        "//div[contains(@class,'form-row')][1]/div[1]",
        "//div[contains(@class,'form-row')][1]/div[2]",
        "//div[contains(@class,'form-row')][1]/div[7]",
        "//div[contains(@class,'form-row')][2]/div[10]",
      ],
      btnSubmit: "//button",
    },
    "Expect_Lose": {
      "//*[@id='game-ticket']/table[1]/tbody": "lossResult.png",
    },
  },
};
