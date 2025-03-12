import { Components } from "sc-automation-core";

export const ChineseBlackjackConfigs: Components.GameConfiguration = {
  id: 77,
  name: "chineseblackjack",
  durations: {
    wholeRound: 45 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 9 * 1000,
  },
  choices: ["1", "2", "3"],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    fiveCardTrick: 3,
    banLuck: 2.5,
    banBan: 3,
    regular: 2,
  },
  cardgame: true,
  accounts: {
    local: "2152363",
    local1: "222241",
    local2: "222241",
    local3: "222241",
    sit: "supertestsaba70",
    l2sit: "SIT_test_INH_017",
    uat: "IT55Test789",
    prod: "supertestte120201006",
    l2uat: "TestSep2744",
    l2prod: "VNtest046",
  },
  productId: { l1: "1684", l2: 3876 },
  isDoubleFunction: false,
};

export const AdminDataSet_local2 = {
  settlePath: "SetChineseBlackjackResult",
  settleDomain: process.env.npm_config_project + "-proxy1",
  accountId: 222241,
  datasetRER: {
    TC1_expect: {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1005",
      errorDescription: "Game round is running.",
    },
    TC2_expect: {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist.",
    },
    TC3_expect: {
      totalAmount: 1,
      totalWin: 2,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null,
    },
    TC3_settle: `name=Mango91531&dealer%5B0%5D%5Brank%5D=J&dealer%5B0%5D%5Bsuit%5D=1&dealer%5B1%5D%5Brank%5D=J&dealer%5B1%5D%5Bsuit%5D=3&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=A&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=0&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=10&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=0`,
    TC4_settle: `name=Mango91531&dealer%5B0%5D%5Brank%5D=A&dealer%5B0%5D%5Bsuit%5D=0&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=0&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=J&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=1&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=J&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=3`,
    TC4_expect: {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null,
    },
    TC5_expect: {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null,
    },
    TC6_settle: `gameConfigName=casinoholdempoker&roundName=Banana73390&player%5B0%5D%5Brank%5D=9&player%5B0%5D%5Bsuit%5D=0&player%5B1%5D%5Brank%5D=10&player%5B1%5D%5Bsuit%5D=0&dealer%5B0%5D%5Brank%5D=2&dealer%5B0%5D%5Bsuit%5D=2&dealer%5B1%5D%5Brank%5D=3&dealer%5B1%5D%5Bsuit%5D=2&communityCards%5B0%5D%5Brank%5D=8&communityCards%5B0%5D%5Bsuit%5D=3&communityCards%5B1%5D%5Brank%5D=1&communityCards%5B1%5D%5Bsuit%5D=3&communityCards%5B2%5D%5Brank%5D=8&communityCards%5B2%5D%5Bsuit%5D=2&communityCards%5B3%5D%5Brank%5D=10&communityCards%5B3%5D%5Bsuit%5D=2&communityCards%5B4%5D%5Brank%5D=2&communityCards%5B4%5D%5Bsuit%5D=3`,
    TC6_expect: {
      totalAmount: 4,
      totalWin: 6,
      validBetAmount: 4,
      errorCode: "0",
      errorDescription: null,
    },
  },
  l1datasetTicket: {
    settle_running: `name=Mango91531&dealer%5B0%5D%5Brank%5D=10&dealer%5B0%5D%5Bsuit%5D=0&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=3&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=A&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=3&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=9&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=1`,
    expect_running: {
      snapshot: {
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[8]":
          "RunningWinloss.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]":
          "RunningDealerCard.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[4]":
          "RunningDealerPoint.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[6]":
          "RunningPlayerPointWithAce.png",
        "//*/div[@id='game-ticket']/table[1]/thead": "BetDetailsTable.png",
      },
    },
    settle_win: `name=Mango91531&dealer%5B0%5D%5Brank%5D=A&dealer%5B0%5D%5Bsuit%5D=3&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=0&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=A&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=0&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=A&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=1`,
    expect_win: {
      snapshot: {
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]":
          "BanLuckCards.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[4]": "BanLuckText.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[5]": "BanBanCards.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[6]": "BanBanText.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[8]":
          "WinLoss_WinBanban.png",
      },
    },
    settle_draw: `name=Mango91531&dealer%5B0%5D%5Brank%5D=10&dealer%5B0%5D%5Bsuit%5D=3&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=0&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=10&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=2&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=K&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=2`,
    expect_draw: {
      snapshot: {
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "Cards20.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[4]": "Point20.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[8]":
          "WinLoss_Draw.png",
      },
    },
    settle_lose: `name=Mango91531&dealer%5B0%5D%5Brank%5D=10&dealer%5B0%5D%5Bsuit%5D=3&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=0&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=10&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=2&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=3&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=2`,
    expect_lose: {
      snapshot: {
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[6]":
          "UnqualifiedText.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[8]":
          "WinLoss_Lose.png",
      },
    },
    settle_fivecards: `name=Mango91531&dealer%5B0%5D%5Brank%5D=10&dealer%5B0%5D%5Bsuit%5D=3&dealer%5B1%5D%5Brank%5D=3&dealer%5B1%5D%5Bsuit%5D=0&dealer%5B2%5D%5Brank%5D=10&dealer%5B2%5D%5Bsuit%5D=0&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=2&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=2&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=2&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=1&hands%5B0%5D%5Bcards%5D%5B2%5D%5Brank%5D=3&hands%5B0%5D%5Bcards%5D%5B2%5D%5Bsuit%5D=1&hands%5B0%5D%5Bcards%5D%5B3%5D%5Brank%5D=5&hands%5B0%5D%5Bcards%5D%5B3%5D%5Bsuit%5D=0&hands%5B0%5D%5Bcards%5D%5B4%5D%5Brank%5D=5&hands%5B0%5D%5Bcards%5D%5B4%5D%5Bsuit%5D=2`,
    expect_fivecards: {
      snapshot: {
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[4]": "BustText.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[6]":
          "FiveCardsText.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[8]": "WinLoss_Win.png",
      },
    },
  },
};

export const AdminDataSet_local2 = {
  settlePath: "SetChineseBlackjackResult",
  settleDomain: process.env.npm_config_project + "-proxy",
  accountId: 2152363,
  datasetRER: {
    TC1_expect: {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1005",
      errorDescription: "Game round is running.",
    },
    TC2_expect: {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist.",
    },
    TC3_expect: {
      totalAmount: 1,
      totalWin: 2,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null,
    },
    TC3_settle: `name=Mango91531&dealer%5B0%5D%5Brank%5D=J&dealer%5B0%5D%5Bsuit%5D=1&dealer%5B1%5D%5Brank%5D=J&dealer%5B1%5D%5Bsuit%5D=3&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=A&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=0&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=10&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=0`,
    TC4_settle: `name=Mango91531&dealer%5B0%5D%5Brank%5D=A&dealer%5B0%5D%5Bsuit%5D=0&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=0&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=J&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=1&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=J&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=3`,
    TC4_expect: {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null,
    },
    TC5_expect: {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null,
    },
    TC6_settle: `gameConfigName=casinoholdempoker&roundName=Banana73390&player%5B0%5D%5Brank%5D=9&player%5B0%5D%5Bsuit%5D=0&player%5B1%5D%5Brank%5D=10&player%5B1%5D%5Bsuit%5D=0&dealer%5B0%5D%5Brank%5D=2&dealer%5B0%5D%5Bsuit%5D=2&dealer%5B1%5D%5Brank%5D=3&dealer%5B1%5D%5Bsuit%5D=2&communityCards%5B0%5D%5Brank%5D=8&communityCards%5B0%5D%5Bsuit%5D=3&communityCards%5B1%5D%5Brank%5D=1&communityCards%5B1%5D%5Bsuit%5D=3&communityCards%5B2%5D%5Brank%5D=8&communityCards%5B2%5D%5Bsuit%5D=2&communityCards%5B3%5D%5Brank%5D=10&communityCards%5B3%5D%5Bsuit%5D=2&communityCards%5B4%5D%5Brank%5D=2&communityCards%5B4%5D%5Bsuit%5D=3`,
    TC6_expect: {
      totalAmount: 4,
      totalWin: 6,
      validBetAmount: 4,
      errorCode: "0",
      errorDescription: null,
    },
  },
  l2datasetTicket: {
    settle_running: `name=Mango91531&dealer%5B0%5D%5Brank%5D=10&dealer%5B0%5D%5Bsuit%5D=0&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=3&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=A&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=3&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=9&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=1`,
    expect_running: {
      snapshot: {
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[8]":
          "RunningWinloss.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]":
          "RunningDealerCard.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[4]":
          "RunningDealerPoint.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[6]":
          "RunningPlayerPointWithAce.png",
        "//*/div[@id='game-ticket']/table[1]/thead": "BetDetailsTable.png",
      },
    },
    settle_win: `name=Mango91531&dealer%5B0%5D%5Brank%5D=A&dealer%5B0%5D%5Bsuit%5D=3&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=0&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=A&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=0&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=A&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=1`,
    expect_win: {
      snapshot: {
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]":
          "BanLuckCards.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[4]": "BanLuckText.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[5]": "BanBanCards.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[6]": "BanBanText.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[8]":
          "WinLoss_WinBanban.png",
      },
    },
    settle_draw: `name=Mango91531&dealer%5B0%5D%5Brank%5D=10&dealer%5B0%5D%5Bsuit%5D=3&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=0&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=10&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=2&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=K&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=2`,
    expect_draw: {
      snapshot: {
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "Cards20.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[4]": "Point20.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[8]":
          "WinLoss_Draw.png",
      },
    },
    settle_lose: `name=Mango91531&dealer%5B0%5D%5Brank%5D=10&dealer%5B0%5D%5Bsuit%5D=3&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=0&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=10&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=2&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=3&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=2`,
    expect_lose: {
      snapshot: {
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[6]":
          "UnqualifiedText.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[8]":
          "WinLoss_Losel2.png",
      },
    },
    settle_fivecards: `name=Mango91531&dealer%5B0%5D%5Brank%5D=10&dealer%5B0%5D%5Bsuit%5D=3&dealer%5B1%5D%5Brank%5D=3&dealer%5B1%5D%5Bsuit%5D=0&dealer%5B2%5D%5Brank%5D=10&dealer%5B2%5D%5Bsuit%5D=0&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=2&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=2&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=2&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=1&hands%5B0%5D%5Bcards%5D%5B2%5D%5Brank%5D=3&hands%5B0%5D%5Bcards%5D%5B2%5D%5Bsuit%5D=1&hands%5B0%5D%5Bcards%5D%5B3%5D%5Brank%5D=5&hands%5B0%5D%5Bcards%5D%5B3%5D%5Bsuit%5D=0&hands%5B0%5D%5Bcards%5D%5B4%5D%5Brank%5D=5&hands%5B0%5D%5Bcards%5D%5B4%5D%5Bsuit%5D=2`,
    expect_fivecards: {
      snapshot: {
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[4]": "BustText.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[6]":
          "FiveCardsText.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[8]":
          "WinLoss_Winl2.png",
      },
    },
  },
};

export const AdminDataSet_uat = {
  settlePath: "SetChineseBlackjackResult",
  settleDomain: process.env.npm_config_project + "uatproxy.sgamesuat.com/uat",
  accountId: 44269346,
  datasetRER: {
    TC1_expect: {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1005",
      errorDescription: "Game round is running.",
    },
    TC2_expect: {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist.",
    },
    TC3_expect: {
      totalAmount: 1,
      totalWin: 2,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null,
    },
    TC3_settle: `name=@Ronninbiti&dealer%5B0%5D%5Brank%5D=J&dealer%5B0%5D%5Bsuit%5D=1&dealer%5B1%5D%5Brank%5D=J&dealer%5B1%5D%5Bsuit%5D=3&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=A&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=0&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=10&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=0`,
    TC4_settle: `name=@Ronninbiti&dealer%5B0%5D%5Brank%5D=A&dealer%5B0%5D%5Bsuit%5D=0&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=0&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=J&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=1&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=J&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=3`,
    TC4_expect: {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null,
    },
    TC5_expect: {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null,
    },
    TC6_settle: `gameConfigName=casinoholdempoker&roundName=Banana73390&player%5B0%5D%5Brank%5D=9&player%5B0%5D%5Bsuit%5D=0&player%5B1%5D%5Brank%5D=10&player%5B1%5D%5Bsuit%5D=0&dealer%5B0%5D%5Brank%5D=2&dealer%5B0%5D%5Bsuit%5D=2&dealer%5B1%5D%5Brank%5D=3&dealer%5B1%5D%5Bsuit%5D=2&communityCards%5B0%5D%5Brank%5D=8&communityCards%5B0%5D%5Bsuit%5D=3&communityCards%5B1%5D%5Brank%5D=1&communityCards%5B1%5D%5Bsuit%5D=3&communityCards%5B2%5D%5Brank%5D=8&communityCards%5B2%5D%5Bsuit%5D=2&communityCards%5B3%5D%5Brank%5D=10&communityCards%5B3%5D%5Bsuit%5D=2&communityCards%5B4%5D%5Brank%5D=2&communityCards%5B4%5D%5Bsuit%5D=3`,
    TC6_expect: {
      totalAmount: 4,
      totalWin: 6,
      validBetAmount: 4,
      errorCode: "0",
      errorDescription: null,
    },
  },
  l1datasetTicket: {
    settle_running: `name=@Ronninbiti&dealer%5B0%5D%5Brank%5D=10&dealer%5B0%5D%5Bsuit%5D=0&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=3&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=A&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=3&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=9&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=1`,
    expect_running: {
      snapshot: {
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[8]":
          "RunningWinloss.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]":
          "RunningDealerCard.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[4]":
          "RunningDealerPoint.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[6]":
          "RunningPlayerPointWithAce.png",
        "//*/div[@id='game-ticket']/table[1]/thead": "BetDetailsTable.png",
      },
    },
    settle_win: `name=@Ronninbiti&dealer%5B0%5D%5Brank%5D=A&dealer%5B0%5D%5Bsuit%5D=3&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=0&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=A&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=0&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=A&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=1`,
    expect_win: {
      snapshot: {
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]":
          "BanLuckCards.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[4]": "BanLuckText.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[5]": "BanBanCards.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[6]": "BanBanText.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[8]":
          "WinLoss_WinBanban.png",
      },
    },
    settle_draw: `name=@Ronninbiti&dealer%5B0%5D%5Brank%5D=10&dealer%5B0%5D%5Bsuit%5D=3&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=0&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=10&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=2&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=K&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=2`,
    expect_draw: {
      snapshot: {
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[3]": "Cards20.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[4]": "Point20.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[8]":
          "WinLoss_Draw.png",
      },
    },
    settle_lose: `name=@Ronninbiti&dealer%5B0%5D%5Brank%5D=10&dealer%5B0%5D%5Bsuit%5D=3&dealer%5B1%5D%5Brank%5D=10&dealer%5B1%5D%5Bsuit%5D=0&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=10&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=2&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=3&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=2`,
    expect_lose: {
      snapshot: {
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[6]":
          "UnqualifiedText.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[8]":
          "WinLoss_Lose.png",
      },
    },
    settle_fivecards: `name=@Ronninbiti&dealer%5B0%5D%5Brank%5D=10&dealer%5B0%5D%5Bsuit%5D=3&dealer%5B1%5D%5Brank%5D=3&dealer%5B1%5D%5Bsuit%5D=0&dealer%5B2%5D%5Brank%5D=10&dealer%5B2%5D%5Bsuit%5D=0&hands%5B0%5D%5Bpos%5D=1&hands%5B0%5D%5Bcards%5D%5B0%5D%5Brank%5D=2&hands%5B0%5D%5Bcards%5D%5B0%5D%5Bsuit%5D=2&hands%5B0%5D%5Bcards%5D%5B1%5D%5Brank%5D=2&hands%5B0%5D%5Bcards%5D%5B1%5D%5Bsuit%5D=1&hands%5B0%5D%5Bcards%5D%5B2%5D%5Brank%5D=3&hands%5B0%5D%5Bcards%5D%5B2%5D%5Bsuit%5D=1&hands%5B0%5D%5Bcards%5D%5B3%5D%5Brank%5D=5&hands%5B0%5D%5Bcards%5D%5B3%5D%5Bsuit%5D=0&hands%5B0%5D%5Bcards%5D%5B4%5D%5Brank%5D=5&hands%5B0%5D%5Bcards%5D%5B4%5D%5Bsuit%5D=2`,
    expect_fivecards: {
      snapshot: {
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[4]": "BustText.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[6]":
          "FiveCardsText.png",
        "//*/div[@id='game-ticket']/table[1]/tbody/tr/td[8]": "WinLoss_Win.png",
      },
    },
  },
};
