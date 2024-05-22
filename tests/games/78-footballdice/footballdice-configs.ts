import { Components } from "sc-automation-core";

export const FootballDiceConfigs: Components.GameConfiguration = {
  id: 78,
  name: "FootballDice",
  durations: {
    wholeRound: 38 * 1000,
    placingBets: 20 * 1000,
    lockingBet: 3 * 1000,
    shakeThePlateDuration: 2 * 1000,
  },
  choices: ["home", "draw", "away", "draw12"],
  hedgeBetGroups: [["home", "away"]],
  maxTimeout: 150 * 1000, // miliseconds,
  odds: {
    home: 1.96,
    away: 1.96,
    draw: 8,
    draw12: 50,
  },
  accounts: {
    local: "222222",
    local1: "222222",
    local2: "222222",
    l2local2: "222222",
    local3: "222222",
    sit: "supertestsaba67",
    uat: "IT56Test789",
    prod: "supertestte120201003",
    l2uat: "TestSep2741",
    l2prod: "VNtest041",
  },
  productId: { l1: "1685", l2: 3877 },
}

export const AdminDataSet_local1 ={
  accountId: 222222,
  l1datasetRER:{
    "expect_running": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "expect_archive": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "expect_win": {
      totalAmount: 1,
      totalWin: 1.96,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "settle_win": {
      "#Result_home_0_": "1",
      "#Result_home_1_": "2",
      "#Result_away_0_": "3",
      "#Result_away_1_": "4"
    },
    "expect_lose": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "settle_lose": {
      "#Result_home_0_": "5",
      "#Result_home_1_": "5",
      "#Result_away_0_": "6",
      "#Result_away_1_": "6"
    },    
    "expect_multiple_choices": {
      totalAmount: 2,
      totalWin: 0,
      validBetAmount: 2,
      errorCode: "0",
      errorDescription: null
    },
    "settle_lose_multiple_choices": {
      "#Result_home_0_": "5",
      "#Result_home_1_": "5",
      "#Result_away_0_": "6",
      "#Result_away_1_": "6"
    },  
    "settle_draw": {
      "#Result_home_0_": "1",
      "#Result_home_1_": "1",
      "#Result_away_0_": "1",
      "#Result_away_1_": "1"
    },
    "expect_draw": {
      totalAmount: 1,
      totalWin: 1,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
  },
  l1datasetTicket:{
    "settle_win": {
      "#Result_home_0_": "1",
      "#Result_home_1_": "2",
      "#Result_away_0_": "3",
      "#Result_away_1_": "4"
    },
    "expect_win": { "snapshot":{
      "//*[@id='game-ticket']/table[1]/tbody/tr/td[3]/div/span/div": "Dice.png",
      "//*[@id='game-ticket']/table[1]/thead": "Header.png",
      "//*[@id='game-ticket']/table[2]/thead": "HeaderDetails.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": "WinLossWin.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "BetChoiceAwayWin.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "Total.png"
    }},
    "settle_lose": {
      "#Result_home_0_": "5",
      "#Result_home_1_": "5",
      "#Result_away_0_": "6",
      "#Result_away_1_": "6"
    },
    "expect_lose": { "snapshot":{
      "//*[@id='game-ticket']/table[1]/tbody/tr/td[3]/div/span/div": "Dice2.png",
      "//*[@id='game-ticket']/table[1]/thead": "Header.png",
      "//*[@id='game-ticket']/table[2]/thead": "HeaderDetails.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": "WinLossLose.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[1]/td[2]": "BetChoiceHome.png",
      "//*[@id='game-ticket']/table[2]/tbody/tr[2]": "Total.png"
    }},
    "settle_lose_multiple_choices": {
      "#Result_home_0_": "5",
      "#Result_home_1_": "5",
      "#Result_away_0_": "6",
      "#Result_away_1_": "6"
    },  
    "expect_multiple_choices": { "snapshot":{
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": `Total2.png`,
      "//*[@id='game-ticket']/table[2]/tbody/tr[4]": "WinLossLose.png",
    }},
    "settle_draw": {
      "#Result_home_0_": "1",
      "#Result_home_1_": "1",
      "#Result_away_0_": "1",
      "#Result_away_1_": "1",
    },
    "expect_draw": { "snapshot":{
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]/td[2]": "WinLossDraw.png"
    },
  }
}}

export const AdminDataSet_sit ={
  accountId: 222222,
  gameType: 2,
  datasetRER:{
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
      totalAmount: 1,
      totalWin: 1.96,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "TC3_settle": {
      "//*/div[contains(@class,'shake-the-plate_result')]/div[1]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[2]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[3]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[4]": "//*/div[@class='modal-content']//div[2]/img"
    },
    "TC4_settle": {
      "//*/div[contains(@class,'shake-the-plate_result')]/div[1]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[2]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[3]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[4]": "//*/div[@class='modal-content']//div[2]/img"
    },
    "TC4_expect": {
      totalAmount: 0,
      totalWin: 0,
      validBetAmount: 0,
      errorCode: "SB1001",
      errorDescription: "The game round does not exist."
    },
    "TC5_settle": {
      "//*/div[contains(@class,'shake-the-plate_result')]/div[1]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[2]": "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[3]": "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[4]": "//*/div[@class='modal-content']//div[1]/img"
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
  datasetTicket:{
    "TC3_settle": {
      "//*/div[contains(@class,'shake-the-plate_result')]/div[1]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[2]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[3]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[4]": "//*/div[@class='modal-content']//div[2]/img"
    },
    "TC3_expect": {
    "snapshot":{
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "4red.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "even4red.png",
      "//*[@id='game-ticket']/table[2]": "betdetail.png",
    }
    }
  }
}
