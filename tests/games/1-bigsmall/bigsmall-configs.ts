import { Components } from "sc-automation-core";

export const BigSmallConfigs: Components.GameConfiguration = {
  id: 1,
  name: "BigSmall",
  durations: {
    wholeRound: 61 * 1000,
    placingBets: 50 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: ["big", "small"],
  hedgeBetGroups: [["big", "small"]],
  maxTimeout: 250 * 1000, // miliseconds x,
  odds: {
    big: 1.96,
    small: 1.96,
  },
  betBoard: true,
  accounts: {
    local: "222221",
    local1: "222221",
    local2: "222221",
    local3: "222221",
    sit: "supertestsaba66",
    uat: "IT55Test789",
    prod: "supertestte120201002",
    l2uat: "TestSep2740",
    l2prod: "VNtest040",
  },
  productId: { l1: "1612", l2: 3802 },
};

export const Isconfigs = {
  gameIndex: 3,
  clickCount: 3,
};

export const AdminDataSet_local ={
  accountId: 222221,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='taixiu']",
  l2datasetRER:{
    "TC1_expect": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "TC2_expect": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "TC3_expect": {
      totalAmount: 10,
      totalWin: 1.96,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "TC3_settle": {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    "TC4_settle": {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    "TC4_expect": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "TC5_settle": {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    "TC5_expect": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "TC6_settle": {
      "//*/div[contains(@class,'shake-the-plate_result')]/div[1]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[2]": "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[3]": "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[4]": "//*/div[@class='modal-content']//div[1]/img"
    },
    "TC6_expect": {
      totalAmount: 2,
      totalWin: 0,
      validBetAmount: 2,
      errorCode: "0",
      errorDescription: null
    },
  },
  l2datasetTicket:{
    "TC3_settle": {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    "TC3_expect": { "snapshot":{
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultWin.png",
      "//*[@id='game-ticket']/table[2]": "detailWin.png",}
    },
    "TC4_settle": {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    "TC5_settle": {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    "TC5_expect": { "snapshot":{
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "resultLoss.png",
      "//*[@id='game-ticket']/table[2]": "detailLoss.png",}
    },
  }
}
