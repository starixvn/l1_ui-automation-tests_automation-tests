import { Components } from "sc-automation-core";

export const SpecialSedieConfigs: Components.GameConfiguration = {
  id: 24,
  name: "SpecialSeDie", //specialsedie
  durations: {
    wholeRound: 39 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 4 * 1000,
  },
  choices: ["even", "odd"],
  hedgeBetGroups: [["even", "odd"]],
  maxTimeout: 280 * 1000, // miliseconds,
  odds: {
    even: 1.96,
    odd: 1.96,
  },
  betBoard: true,
  accounts: {
    local: "222242",
    local1: "222242",
    local2: "222242",
    local3: "222242",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201006",
    l2uat: "TestSep2742",
    l2prod: "VNtest044",
  },
  productId: { l1: "1635", l2: 3825 },
};

export const AdminDataSet_local2 = {
  accountId: 222242,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='specialsedie']",
  isSettleNextRound: false,
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
      "//*/div[contains(@class,'dice_dice')][1]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'dice_dice')][2]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'dice_dice')][3]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'dice_dice')][4]":
        "//*/div[@class='modal-content']//div[2]/img",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "winResult.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "winChoices.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png",
    },
    Settle_Lose: {
      "//*/div[contains(@class,'dice_dice')][1]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'dice_dice')][2]":
        "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'dice_dice')][3]":
        "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'dice_dice')][4]":
        "//*/div[@class='modal-content']//div[1]/img",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "lossResult.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "lossChoices.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png",
    },
  },
};
