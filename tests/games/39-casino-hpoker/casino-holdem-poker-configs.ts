import { Components } from "sc-automation-core";

export const CasinoHoldemPokerConfigs: Components.GameConfiguration = {
  id: 39,
  name: "CasinoHoldemPoker",
  durations: {
    wholeRound: 45 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 9 * 1000,
  },
  choices: ["ante", "aa"],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    CallBet_callBet: 2,
    AnteBet_highCards: 2,
    AnteBet_onePair: 2,
    AnteBet_twoPairs: 2,
    AABet_flush: 21,
    AABet_fourKind: 41,
    AABet_fullHouse: 31,
    AABet_pairAces: 8,
    AABet_royalFlush: 101,
    AABet_straight: 8,
    AABet_straightFlush: 51,
    AABet_threeKind: 8,
    AABet_twoPairs: 8,
    AnteBet_flush: 3,
    AnteBet_fourKind: 11,
    AnteBet_fullHouse: 4,
    AnteBet_royalFlush: 101,
    AnteBet_straight: 2,
    AnteBet_straightFlush: 21,
    AnteBet_threeKind: 2,
  },
  cardgame: true,
  accounts: {
    local: "222252",
    local1: "222252",
    local2: "222252",
    local3: "222252",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201006",
    l2uat: "TestSep2750",
    l2prod: "VNtest041",
  },
  productId: { l1: "1650", l2: 3836 },
};

export const AdminDataSet_local2 = {
  accountId: 222252,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*/td[contains(text(),'Casino Hold')]//following::a[1]",
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
      nickname: { locator: "#nickname", value: "Plum1467" },
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
