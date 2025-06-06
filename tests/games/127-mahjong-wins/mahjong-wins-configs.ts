import { Components } from "sc-automation-core";

export const MahjongWinsConfigs: Components.GameConfiguration = {
  id: 127,
  name: "MahjongWins",
  durations: {
    wholeRound: 0,
    placingBets: 0,
    lockingBet: 0,
    shakeThePlateDuration: 0,
  },
  choices: ["1", "25"],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    symbols: {
      "0": [
        {
          from: 8,
          to: 9,
          odds: 5,
        },
        {
          from: 10,
          to: 11,
          odds: 15,
        },
        {
          from: 12,
          to: 30,
          odds: 40,
        },
      ],
      "1": [
        {
          from: 8,
          to: 9,
          odds: 8,
        },
        {
          from: 10,
          to: 11,
          odds: 18,
        },
        {
          from: 12,
          to: 30,
          odds: 80,
        },
      ],
      "2": [
        {
          from: 8,
          to: 9,
          odds: 10,
        },
        {
          from: 10,
          to: 11,
          odds: 20,
        },
        {
          from: 12,
          to: 30,
          odds: 100,
        },
      ],
      "3": [
        {
          from: 8,
          to: 9,
          odds: 16,
        },
        {
          from: 10,
          to: 11,
          odds: 24,
        },
        {
          from: 12,
          to: 30,
          odds: 160,
        },
      ],
      "4": [
        {
          from: 8,
          to: 9,
          odds: 20,
        },
        {
          from: 10,
          to: 11,
          odds: 30,
        },
        {
          from: 12,
          to: 30,
          odds: 200,
        },
      ],
      "5": [
        {
          from: 8,
          to: 9,
          odds: 30,
        },
        {
          from: 10,
          to: 11,
          odds: 40,
        },
        {
          from: 12,
          to: 30,
          odds: 240,
        },
      ],
      "6": [
        {
          from: 8,
          to: 9,
          odds: 40,
        },
        {
          from: 10,
          to: 11,
          odds: 100,
        },
        {
          from: 12,
          to: 30,
          odds: 300,
        },
      ],
      "7": [
        {
          from: 8,
          to: 9,
          odds: 50,
        },
        {
          from: 10,
          to: 11,
          odds: 200,
        },
        {
          from: 12,
          to: 30,
          odds: 500,
        },
      ],
      "8": [
        {
          from: 8,
          to: 9,
          odds: 200,
        },
        {
          from: 10,
          to: 11,
          odds: 500,
        },
        {
          from: 12,
          to: 30,
          odds: 1000,
        },
      ],
    },
    freeSpins: {
      initialOdds: [
        {
          count: 4,
          odds: 3,
        },
        {
          count: 5,
          odds: 6,
        },
        {
          count: 6,
          odds: 18,
        },
      ],
      additionalOdds: [
        {
          count: 4,
          odds: 5,
        },
      ],
    },
  },
  slotsgame: true,
  accounts: {
    local: "5063205",
    local1: "5063205",
    local2: "5063205",
    local3: "5063205",
  },
  productId: { l1: "1654", l2: 3846 },

};


export const AdminDataSet_local1 = {
  accountId: 5063205,
  gameName: "Treasure Island",
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*/td[text()='Treasure Island']//following::a[1]",
  betBoard: false,
  l1odds:{
    index: "0",
    from: "8",
    to: "9",
    odds: "6",
  },
  l2odds:{
    index: "0",
    from: "8",
    to: "9",
    odds: "6",
  },
  l1datasetRER: {
    Expect_NoData: {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist.",
    },
    Expect_Win: {
      totalAmount: 10,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null,
    },
    Settle_Win: {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    Settle_Lose: {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    Expect_Lose: {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null,
    },
  },
  l1datasetTicket: {
    Settle_Win: {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultWin.png",
      "//*[@id='game-ticket']/table[2]": "detailWin.png",
    },
    Settle_Lose: {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultLoss.png",
      "//*[@id='game-ticket']/table[2]": "detailLoss.png",
    },
  },

  l2datasetRER: {
    Expect_NoData: {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist.",
    },
    Expect_Win: {
      totalAmount: 10,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null,
    },
    Settle_Win: {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    Settle_Lose: {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    Expect_Lose: {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null,
    },
  },
  l2datasetTicket: {
    Settle_Win: {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultWin.png",
      "//*[@id='game-ticket']/table[2]": "detailWin.png",
    },
    Settle_Lose: {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultLoss.png",
      "//*[@id='game-ticket']/table[2]": "detailLoss.png",
    },
  },
};