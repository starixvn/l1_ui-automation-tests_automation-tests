import { Components } from "sc-automation-core";

export const Baccarat3Configs: Components.GameConfiguration = {
  id: 85,
  name: "bac85",
  durations: {
    wholeRound: 50 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 7 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: ["player", "banker", "tie", "playerPair", "bankerPair", "natural"],
  hedgeBetGroups: [["player", "banker"]],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    player: 2,
    banker: 1.95,
    playerPair: 12,
    bankerPair: 12,
    tie: 9,
  },
  accounts: {
    local: "222265",
    local1: "222265",
    local2: "222265",
    local3: "222265",
    sit: "supertestsaba70",
    uat: "IT49Test789",
    prod: "supertestte120201008",
    l2uat: "TestSep2749",
    l2prod: "VNtest041",
  },
  socketName: "baccaratx",
  productId: { l1: "1689", l2: "3881" },
};

export const AdminDataSet_local = {
  accountId: 222265,
  mornitorlocator: "//*[contains(@onclick,'Baccarat 3') and contains(@onclick,'bac85')]",
  isSettleNextRound : true,
  l1operatorId: "ONEworks1",
  l2operatorId: "ONEworksVGCash",
  l1datasetRER:{
    "Expect_NoData": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist.",
    },
    "Expect_Win": {
      totalAmount: 1,
      totalWin: 2,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null,
    },
    "Expect_Lose": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null,
    },
    "Expect_Multiple_Choices": {
      totalAmount: 4,
      totalWin: 34,
      validBetAmount: 4,
      errorCode: "0",
      errorDescription: null,
    },
  },
  l1datasetTicket:{
    "Settle": {
      "#cards": "1s,8h,9h,8c,10h,10d,9h,8c,10h,10d,2d,2h,2s,2c,3s,3c",
      "#cutCardIndex": "300",
    },
    "Expect_Win": { "snapshot":{
      "//*[@id='game-ticket']/div": "TableName.png",
      "//*[@id='game-ticket']/table[1]/thead/tr": "RoundRessultHeader.png",
      "//*[@id='game-ticket']/table[2]/thead/tr": "BetDetailsHeader.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "Player.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "TotalWin.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": "WinLossWin.png"
    }},
    "Expect_Lose": { "snapshot":{
      "//*[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "Banker.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "TotalLose.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": "WinLossLose.png"
    }},
    "Expect_Multiple_Choices": { "snapshot": {
      "//*[@id='game-ticket']/table[1]/tbody/tr/td[2]": "RoundResult.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]" : "BankerWin.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]/td[2]" : "Tie.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]/td[2]" : "BankerPair.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[4]/td[2]" : "PlayerPair.png"

    }},
  },
  l2datasetRER:{
    "Expect_NoData": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist.",
    },
    "Expect_Win": {
      totalAmount: 10,
      totalWin: 20,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null,
    },
    "Expect_Lose": {
      totalAmount: 10,
      totalWin: 0,
      validBetAmount: 10,
      errorCode: "0",
      errorDescription: null,
    },
    "Expect_Multiple_Choices": {
      totalAmount: 40,
      totalWin: 340,
      validBetAmount: 40,
      errorCode: "0",
      errorDescription: null,
    },
  },
  l2datasetTicket:{
    "Settle": {
      "#cards": "1s,8h,9h,8c,10h,10d,9h,8c,10h,10d,2d,2h,2s,2c,3s,3c",
      "#cutCardIndex": "300"
    },
    "Expect_Win": { "snapshot":{
      "//*[@id='game-ticket']/div": "TableName.png",
      "//*[@id='game-ticket']/table[1]/thead/tr": "RoundRessultHeader.png",
      "//*[@id='game-ticket']/table[2]/thead/tr": "BetDetailsHeader.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "Player.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "l2TotalWin.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": "l2WinLossWin.png"
    }},
    "Expect_Lose": { "snapshot":{
      "//*[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "Banker.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "l2TotalLose.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": "l2WinLossLose.png"
    }},
    "Expect_Multiple_Choices": { "snapshot": {
      "//*[@id='game-ticket']/table[1]/tbody/tr/td[2]": "RoundResult.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]" : "BankerWin.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]/td[2]" : "Tie.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]/td[2]" : "BankerPair.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[4]/td[2]" : "PlayerPair.png"
    }},
  },
}
