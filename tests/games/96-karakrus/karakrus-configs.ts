import { Components } from "sc-automation-core";

export const KaraKrusConfigs: Components.GameConfiguration = {
  id: 96,
  name: "KaraKrus",
  durations: {
    wholeRound: 38 * 1000,
    placingBets: 20 * 1000,
    lockingBet: 3 * 1000,
    shakeThePlateDuration: 2 * 1000,
  },
  choices: ["kara", "krus", "head1", "head2", "head3", "tail3"],
  hedgeBetGroups: [["kara", "krus"]],
  maxTimeout: 150 * 1000, // miliseconds,
  odds: {
    kara: 1.96,
    krus: 1.96,
    head1: 2.5,
    head2: 2.5,
    head3: 7.5,
    tail3: 7.5,
  },
  accounts: {
    local: "222274",
    local1: "222274",
    local2: "222274",
    l2local2: "222274",
    local3: "222274",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201003",
    l2uat: "TestSep2741",
    l2prod: "VNtest041",
  },
  productId: { l1: "1691", l2: "3883" },
};

export const AdminDataSet_local2 = {
  accountId: 222274,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='karakrus']",
  isSettleNextRound: true,
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
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null,
    },
    Expect_Lose: {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null,
    },
  },
  l2datasetTicket: {
    Settle_Win: {
      "//*/div[contains(@class,'dice_dice')][1]":
        "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'dice_dice')][2]":
        "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'dice_dice')][3]":
        "//*/div[@class='modal-content']//div[1]/img",
    },
    Expect_Win: {
      "//*[@id='game-ticket']/table[1]/tbody//td[2]": "winResult.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png",
    },
    Settle_Lose: {
      "//*/div[contains(@class,'dice_dice')][1]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'dice_dice')][2]":
        "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'dice_dice')][3]":
        "//*/div[@class='modal-content']//div[2]/img",
    },
    Expect_Lose: {
      "//*[@id='game-ticket']/table[1]/tbody//td[2]": "lossResult.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png",
    },
  },
};
