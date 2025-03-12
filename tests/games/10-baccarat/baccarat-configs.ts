import { Components } from "sc-automation-core";

export const BaccaratConfigs: Components.GameConfiguration = {
  id: 10,
  name: "baccarat",
  durations: {
    wholeRound: 45 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 9 * 1000,
  },
  choices: [
    "player",
    "banker",
    "tie",
    "big",
    "small",
    "playerPair",
    "bankerPair",
    "natural",
  ],
  hedgeBetGroups: [["big", "small"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    player: 2,
    banker: 1.95,
    big: 1.54,
    small: 2.5,
    tie: 9,
    playerPair: 12,
    bankerPair: 12,
  },
  betBoard: false,
  accounts: {
    local: "222230",
    local1: "222230",
    local2: "222230",
    local3: "222230",
    sit: "supertestsaba70",
    uat: "IT55Test789",
    prod: "supertestte120201013",
    l2uat: "TestSep2748",
    l2prod: "VNtest046",
  },
  productId: { l1: "1621", l2: 3810 },
};

export const Isconfigs = {
  gameIndex: 7,
  clickCount: 7,
};

export const AdminDataSet_local2 ={
  accountId: 222230,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='baccarat']",
  isSettleNextRound: true,
  l2datasetRER:{
    "Expect_NoData": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
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
  l2datasetTicket:{
    "Settle_Win": {
      "//div[text()='Player']/following::div[1]/div[1]": "//*/div[contains(@class,'modal-body')]/div[1]/div[9]",
      "//div[text()='Player']/following::div[1]/div[2]": "//*/div[contains(@class,'modal-body')]/div[1]/div[10]",
      "//div[text()='Banker']/following::div[1]/div[1]": "//*/div[contains(@class,'modal-body')]/div[1]/div[7]",
      "//div[text()='Banker']/following::div[1]/div[2]": "//*/div[contains(@class,'modal-body')]/div[1]/div[8]",
    },
    "Expect_Win": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "winResult.png",
      "//*[@id='game-ticket']/table[2]": "winDetail.png"
    },
    "Settle_Lose": {
      "//div[text()='Player']/following::div[1]/div[1]": "//*/div[contains(@class,'modal-body')]/div[2]/div[8]",
      "//div[text()='Player']/following::div[1]/div[2]": "//*/div[contains(@class,'modal-body')]/div[2]/div[4]",
      "//div[text()='Banker']/following::div[1]/div[1]": "//*/div[contains(@class,'modal-body')]/div[2]/div[9]",
      "//div[text()='Banker']/following::div[1]/div[2]": "//*/div[contains(@class,'modal-body')]/div[2]/div[10]",
    },
    "Expect_Lose": {
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "lossResult.png",
      "//*[@id='game-ticket']/table[2]": "lossDetail.png"
    },
  }
}