import { Components } from "sc-automation-core";

export const FootballSpinConfigs: Components.GameConfiguration = {
  id: 79,
  name: "FootballSlot",
  durations: {
    wholeRound: 50 * 1000,
    placingBets: 30 * 1000,
    lockingBet: 7 * 1000,
    shakeThePlateDuration: 5 * 1000,
  },
  choices: [
    "big",
    "small",
    "cup",
    "mascot",
    "franceShirt",
    "hostCountry",
    "englandShirt",
    "tickets",
    "ball",
    "shoes",
    "cup25",
    "mascot3",
    "franceShirt3",
    "hostCountry3",
    "englandShirt3",
    "tickets3",
    "ball3",
    "shoes3",
    "cup50",
    "lucky"
  ],
  hedgeBetGroups: [["big", "small"]],
  maxTimeout: 100 * 1000, // miliseconds,
  odds: {
    cup: 100,
    cup50: 50,
    cup25: 25,
    mascot: 40,
    mascot3: 3,
    hostCountry: 30,
    hostCountry3: 3,
    franceShirt: 20,
    franceShirt3: 3,
    englandShirt: 20,
    englandShirt3: 3,
    ball: 15,
    ball3: 3,
    tickets: 10,
    tickets3: 3,
    shoes: 5,
    shoes3: 3,
    big: 1.96,
    small: 1.96
  },
  accounts: {
    local: "222263",
    local1: "222263",
    local2: "222263",
    local3: "222263",
    sit: "supertestsaba70",
    uat: "IT58Test789",
    prod: "supertestte120201008",
    l2uat: "TestSep2749",
    l2prod: "VNtest041",
  },
  productId:  { l1: "1686", l2: "3878" },
};

export const AdminDataSet_local3 ={
  accountId: 222263,
  l1datasetRER:{
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
    "settle_win": {
      dropDown: {
      "//*[@id='__next']/div/div[4]/div/select": "10"},
      button: "//*[@id='__next']/div/div[7]/div/img[1]"
    
    },
    "settle_lose": {
      "#Result_home_0_": "5",
      "#Result_home_1_": "5",
      "#Result_away_0_": "6",
      "#Result_away_1_": "6"
    },
    "settle_draw": {
      "#Result_home_0_": "1",
      "//*[@id='__next']/div/div[7]/div/img[1]'": "1",
      "#Result_away_0_": "1",
      "#Result_away_1_": "1"
    },
    "TC4_expect": {
      totalAmount: 1,
      totalWin: 0,
      validBetAmount: 1,
      errorCode: "0",
      errorDescription: null
    },
    "TC5_expect": {
      totalAmount: 2,
      totalWin: 0,
      validBetAmount: 2,
      errorCode: "0",
      errorDescription: null
    },
    "TC6_expect": {
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
    "TC5_settle": {
      "//*/div[contains(@class,'shake-the-plate_result')]/div[1]": "//*/div[@class='modal-content']//div[2]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[2]": "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[3]": "//*/div[@class='modal-content']//div[1]/img",
      "//*/div[contains(@class,'shake-the-plate_result')]/div[4]": "//*/div[@class='modal-content']//div[1]/img"
    },
    "TC5_expect": { "snapshot":{
      "//*[@id='game-ticket']/table[2]/tbody/tr[3]": `Total2.png`,
      "//*[@id='game-ticket']/table[2]/tbody/tr[4]": "WinLossLose.png",
    },
    "TC6_expect": { "snapshot":{
      "//*[@id='game-ticket']/table[1]/tbody//td[3]": "1red.png",
      "//*[@id='game-ticket']/table[1]/tbody//td[4]": "ode1red.png",
      "//*[@id='game-ticket']/table[2]": "tc6betdetail.png",}
    },
  }
}}
