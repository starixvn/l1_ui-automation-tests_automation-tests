import { Components } from "sc-automation-core";

export const BigSmallCity1Configs: Components.GameConfiguration = {
  id: 50,
  name: "unbalancedbigsmall1",
  durations: {
    wholeRound: 60 * 1000,
    placingBets: 50 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: ["big", "small"],
  hedgeBetGroups: [["big", "small"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    big: 1.96,
    small: 1.96,
  },
  socketName: "unbalancedbigsmall",
  accounts: {
    local: "222262",
    local1: "222262",
    local2: "222262",
    local3: "222262",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201004",
    l2uat: "TestSep2747",
    l2prod: "VNtest050",
  },
  productId: { l1: "1659", l2: 3850 },

};

export const BigSmallCity2Configs: Components.GameConfiguration = {
  id: 50,
  name: "unbalancedbigsmall2",
  socketName: "unbalancedbigsmall",
  durations: {
    wholeRound: 40 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: ["big2", "small2"],
  hedgeBetGroups: [["big2", "small2"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    big: 1.96,
    small: 1.96,
  },
  accounts: {
    local: "222262",
    local1: "222262",
    local2: "222262",
    local3: "222262",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201012",
  },
  productId: { l1: "1659", l2: 3850 },
};

export const BigSmallCity3Configs: Components.GameConfiguration = {
  id: 50,
  name: "unbalancedbigsmall3",
  socketName: "unbalancedbigsmall",
  durations: {
    wholeRound: 60 * 1000,
    placingBets: 50 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: ["big3", "small3"],
  hedgeBetGroups: [["big3", "small3"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    big: 1.96,
    small: 1.96,
  },
  accounts: {
    local: "222262",
    local1: "222262",
    local2: "222262",
    local3: "222262",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201012",
  },
  productId: { l1: "1659", l2: 3850 },
};

export const BigSmallCity4Configs: Components.GameConfiguration = {
  id: 50,
  name: "unbalancedbigsmall4",
  socketName: "unbalancedbigsmall",
  durations: {
    wholeRound: 40 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 5 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: ["big4", "small4"],
  hedgeBetGroups: [["big4", "small4"]],
  maxTimeout: 200 * 1000, // miliseconds,
  odds: {
    big: 1.96,
    small: 1.96,
  },
  accounts: {
    local: "222262",
    local1: "222262",
    local2: "222262",
    local3: "222262",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201012",
  },
  productId: { l1: "1659", l2: 3850 },
};

export const LasvegasAdminDataSet_local ={
  accountId: 222262,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='unbalancedbigsmall1']",
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
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Lose": {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null
    }
  }, 
  l2datasetTicket:{
    "Settle_Win": {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    "Expect_Win": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "LasVegas-resultWin.png",
      "//*[@id='game-ticket']/table[2]": "LasVegas-detailWin.png",
    },
    "Settle_Lose": {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    "Expect_Lose": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "LasVegas-resultLoss.png",
      "//*[@id='game-ticket']/table[2]": "LasVegas-detailLoss.png",}
  }
}

export const MarinaBayAdminDataSet_local ={
  accountId: 222262,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='unbalancedbigsmall2']",
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
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Lose": {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null
    }
  }, 
  l2datasetTicket:{
    "Settle_Win": {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    "Expect_Win": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "MarinaBay-resultWin.png",
      "//*[@id='game-ticket']/table[2]": "MarinaBay-detailWin.png",
    },
    "Settle_Lose": {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    "Expect_Lose": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "MarinaBay-resultLoss.png",
      "//*[@id='game-ticket']/table[2]": "MarinaBay-detailLoss.png",}
  }
}

export const MacawAdminDataSet_local ={
  accountId: 222262,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='unbalancedbigsmall3']",
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
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Lose": {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null
    }
  }, 
  l2datasetTicket:{
    "Settle_Win": {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    "Expect_Win": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "Macaw-resultWin.png",
      "//*[@id='game-ticket']/table[2]": "Macaw-detailWin.png",
    },
    "Settle_Lose": {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    "Expect_Lose": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "Macaw-resultLoss.png",
      "//*[@id='game-ticket']/table[2]": "Macaw-detailLoss.png",}
  }
}

export const MonteCarloAdminDataSet_local ={
  accountId: 222262,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  mornitorlocator: "//*[@data-game-name='unbalancedbigsmall4']",
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
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null
    },
    "Expect_Lose": {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "0",
      errorDescription: null
    }
  }, 
  l2datasetTicket:{
    "Settle_Win": {
      "#dice-0": "//div[@class='modal-content']/div/div[1]",
      "#dice-1": "//div[@class='modal-content']/div/div[2]",
      "#dice-2": "//div[@class='modal-content']/div/div[3]",
    },
    "Expect_Win": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "MonteCarlo-resultWin.png",
      "//*[@id='game-ticket']/table[2]": "MonteCarlo-detailWin.png",
    },
    "Settle_Lose": {
      "#dice-0": "//div[@class='modal-content']/div/div[4]",
      "#dice-1": "//div[@class='modal-content']/div/div[5]",
      "#dice-2": "//div[@class='modal-content']/div/div[6]",
    },
    "Expect_Lose": { 
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "MonteCarlo-resultLoss.png",
      "//*[@id='game-ticket']/table[2]": "MonteCarlo-detailLoss.png",}
  }
}

